import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import DeviceInfo from 'react-native-device-info';

import { Button, ForgotPassword } from "../../components";
import { Input } from '../../components/Input/Input.component';
import { authActions } from '../../redux/actions/auth';
import { LOGO } from '../../lib/utils/constants'

import styles from './style';
import { isEmailValid } from '../../lib/utils/global';
import commonStyle from '../../assets/styles/common.style';

const EMAIL_ADDRESS = "Email address"
const PASSWROD = "Password"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            forgotPassword: false,
            forgotEmail: "",
            loading: false,
            submit: false,
            forgetSubmit: false,
            forgetLoading: false
        }
    }

    componentDidMount = async () => {
        let userToken = await AsyncStorage.getItem('Email')
        if (userToken) {
            let data = JSON.parse(userToken);
            this.setState({ email: data.email, password: data.password })
        }
    }

    handleLogin = () => {
        const navigate = this.props.navigation.replace;
        const { email, password, submit } = this.state;
        if (submit && email && password && isEmailValid(email)) {
            let deviceType = Platform.OS;
            let deviceId = DeviceInfo.getDeviceId();
            let deviceToken;
            DeviceInfo.getDeviceToken()
                .then(deviceToken => {
                    console.log(deviceToken)
                    deviceToken = deviceToken;
                })
                .catch(err => console.log(err))
            let userData = {
                email: email,
                password: password,
                source: "Mobile",
                deviceId,
                deviceToken: Platform.OS == 'ios' ? deviceToken : "",
                deviceType

            }
            // console.log(userData)
            this.props.authActions.userLogin(userData,navigate)
        } else {
            console.log("err hy ")
            this.setState({ submit: true, loading: false })
        }
    }

    forgetPassword = () => {
        const { forgetSubmit, forgotEmail } = this.state;
        if (forgetSubmit && forgotEmail && isEmailValid(forgotEmail)) {
            let userData = {
                email: forgotEmail
            }
            this.props.authActions.forgotPassword(userData, () => {
                console.log("success")
                this.setState({ forgetSubmit: false, forgetLoading: false, forgotPassword: false })
            }, () => {
                console.log("err")
                this.setState({ forgetSubmit: false, forgetLoading: false, forgotPassword: false })
            });
        }
        else {
            this.setState({ forgetSubmit: true, forgetLoading: false })
        }
    }

    render() {
        const navigate = this.props.navigation.replace;
        const { forgotPassword, forgotEmail, email, password, loading, submit, forgetSubmit, forgetLoading } = this.state;
        return (

            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageStyle}
                            source={LOGO}
                            resizeMode='contain' />
                    </View>
                </View>
                <View style={styles.lowerContainer}>
                    <Input placeholder={EMAIL_ADDRESS} value={email} label={EMAIL_ADDRESS} onChangeText={(email) => this.setState({ email })} />
                    {submit && !email ? <Text style={commonStyle.errorText}>Please fill this field</Text>
                        :
                        submit && email && !isEmailValid(email) ? <Text style={commonStyle.errorText}>Email is invalid</Text>
                            : null
                    }
                    <Input placeholder={PASSWROD} secureTextEntry={true} value={password} label={PASSWROD} onChangeText={(password) => this.setState({ password })} />
                    {submit && !password ? <Text style={commonStyle.errorText}>Please fill this field</Text>
                        : null
                    }
                    <View style={styles.buttonContainer}>
                        <Button.LoginButton loading={this.props.user.loading} title="Login" onPress={() => this.setState({ submit: true, loading: true }, () => this.handleLogin())} />
                    </View>
                    <TouchableOpacity onPress={() => this.setState({ forgotPassword: true })}>
                        <Text style={styles.forgetPasswordTextStyle}>Forget Password?</Text>
                    </TouchableOpacity>

                </View>
                <ForgotPassword
                    isVisible={forgotPassword}
                    onClose={() => this.setState({ forgotPassword: false, forgotEmail: "" })}
                    submit={forgetSubmit}
                    loading={forgetLoading}
                    onChangeText={(val) => this.setState({ forgotEmail: val })}
                    value={forgotEmail}
                    onPress={() => this.setState({ forgetSubmit: true, forgetLoading: true }, () => this.forgetPassword())} />
            </View>

        )
    }
}
const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);