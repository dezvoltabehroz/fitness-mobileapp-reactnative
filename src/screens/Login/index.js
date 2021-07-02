import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Button, ForgotPassword } from "../../components";
import { Input } from '../../components/Input/Input.component';
import { authActions } from '../../redux/actions/auth';
import { LOGO } from '../../lib/utils/constants'

import styles from './style';

const EMAIL_ADDRESS = "Email address"
const PASSWROD = "Password"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            forgotPassword: false,
            forgotEmail: ""
        }
    }

    componentDidMount = async () => {
        let userToken = await AsyncStorage.getItem('Email')
        if (userToken) {
            let data = JSON.parse(userToken);
            this.setState({ email: data.email, password: data.password })
        }
    }


    forgetPassword = () => { }

    render() {
        const navigate = this.props.navigation.replace;
        const { forgotPassword, forgotEmail } = this.state;
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
                    <Input placeholder={EMAIL_ADDRESS} label={EMAIL_ADDRESS} />
                    <Input placeholder={PASSWROD} label={PASSWROD} />

                    <View style={styles.buttonContainer}>
                        <Button.LoginButton title="Login" onPress={() => navigate('Home')} />
                    </View>
                    <TouchableOpacity onPress={() => this.setState({ forgotPassword: true })}>
                        <Text style={styles.forgetPasswordTextStyle}>Forget Password?</Text>
                    </TouchableOpacity>

                </View>
                <ForgotPassword isVisible={forgotPassword} onClose={() => this.setState({ forgotPassword: false, forgotEmail: "" })} onChangeText={(val) => this.setState({ forgotEmail: val })} value={forgotEmail} onPress={() => this.forgetPassword} />
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