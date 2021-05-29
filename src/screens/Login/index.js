import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, LayoutAnimation, Alert, Linking } from 'react-native'
import { Icon, Button, FloatingInput, RadioButton, Container } from "../../components";
import styles from './style';
import { Input } from '../../components/Input/Input.component';
import THEME from '../../assets/styles/theme.style';
import COMMON_STYLE from '../../assets/styles/common.style';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isEmailFocus: false,
            isPasswordFocus: null,
            emailValid: true,
            submiting: true,
            staySignIn: true,
            signInModal: false,
            provider: false,
            costumer: false
        }
    }

    componentDidMount = async () => {
        let userToken = await AsyncStorage.getItem('Email')
        if (userToken) {
            let data = JSON.parse(userToken);
            this.setState({ email: data.email, password: data.password })
        }
    }


    forgetPassword = () => {

    }



    isEmailValid(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.imageContainer}>
                        {/* <View style={[{ backgroundColor: "white", borderRadius: 2.5, overflow: "hidden" }]}> */}
                            <Image style={{ height: 150, width: 150, }}
                                source={require('../../assets/images/logo.png')}
                                resizeMode='contain' />
                        {/* </View> */}
                    </View>
                </View>
                <View style={styles.lowerContainer}>
                    <Input placeholder="Email address" label="Email Address" />
                    <Input placeholder="Password" label="Password" />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.replace('Home')} style={styles.loginButton}>
                            <View style={styles.loginButtonText}>
                                <Text>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <Text onPress={() => this.forgetPassword()} style={styles.forgetPasswordTextStyle}>Forget Password?</Text>
                    </View>
                </View>
            </View >

        )
    }
}
const mapStateToProps = (state) => {

    return {
        user: state.authReducer || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);