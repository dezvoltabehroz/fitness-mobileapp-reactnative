import axiosInstance from './Interceptor';
import axios from 'axios';
import { Platform } from 'react-native';
import { BASE_URL } from '../enviroments/index'

import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, MULTIPART, TOKEN } from '../lib/utils/constants'


const Api = {

    sendCodeToPhoneNumber: function (number) {
        return axiosInstance.post('registration/regPhoneNumber', {
            phone: `${number}`,
            type: "customer"
        }, apiHeaderConfiguration(EMPTY, EMPTY))
    },

    verifyTheCode: function (userData) {
        return axiosInstance.post('registration/verifyCode', {
            phone: `${userData.phone}`
        }, apiHeaderConfiguration(EMPTY, EMPTY))
    },

    updatePersonalInfo: function (userData, phone) {
        let formData = new FormData();
        formData.append('full_name', userData.name);
        formData.append('gender', userData.gender);
        formData.append('dob', userData.dob);
        formData.append('phone', userData.phone ? userData.phone : phone);
        formData.append('image', userData.image ? {
            uri: Platform.OS === 'android' ? 'file://' + userData.image.path : userData.image.uri,
            name: `${new Date().getTime().toString()}.jpg`,
            filename: new Date().getTime().toString() + '.jpg',
            type: 'image/jpg'
        } : '');

        return axios.post(`${BASE_URL}registration/updatePersonalInfo`, formData, apiHeaderConfiguration(EMPTY, MULTIPART));
    },
    updateProfileInfo: function (userData) {
        return axiosInstance.post('registration/updateProfileInfo', {
            user_id: userData.id,
            full_name: userData.name,
            gender: userData.gender,
            dob: userData.dob
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    updateProfilePicture: function (userData) {
        // console.log("userData:", userData)
        let formData = new FormData();
        formData.append('user_id', userData.id);
        formData.append('image', userData.image ? {
            uri: Platform.OS === 'android' ? 'file://' + userData.image.path : userData.image.uri,
            name: `${new Date().getTime().toString()}.jpg`,
            filename: new Date().getTime().toString() + '.jpg',
            type: 'image/jpg'
        } : '');

        return axios.post(`${BASE_URL}registration/updateProfilePic`, formData, apiHeaderConfiguration(userData.token, TOKEN));
    },

    updateEmailAndPassword: function (userData) {
        return axiosInstance.post('registration/updateEmailAndPassword', {
            email: userData.email,
            password: userData.password,
            macAddress: userData.macAddress,
            phone: userData.phone
            // phone:'+923123680434'
        }, apiHeaderConfiguration(EMPTY, EMPTY))
    },

    getUserProfile: function (userData) {
        // console.log(userData.id)
        // console.log(userData.token)
        return axiosInstance.post('registration/profileDetail', {
            id: userData.id,
            review_by: userData.type
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },

    userLogin: function (userData) {
        return axiosInstance.post('Login', userData, apiHeaderConfiguration(EMPTY, EMPTY))
    },
    forgotPassword: function (userData) {
        return axiosInstance.post('ForgotPassword', userData, apiHeaderConfiguration(EMPTY, EMPTY))
    },
    userStepCount: function (userData) {
        return axiosInstance.post('registration/updateStepsCount', {
            user_id: userData.id,
            steps_count: userData.steps_count
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    updateFCMToken: function (userData) {
        return axiosInstance.post('registration/updateFcmtoken', {
            user_id: userData.id,
            fcmToken: userData.fcmToken
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    removeFcmToken: function (userData) {
        return axiosInstance.post('registration/removeFcmToken', {
            user_id: userData.id
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    getCodeForResetPass: function (email) {
        return axiosInstance.post('registration/getCodeForResetPass', {
            email: email
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    updatePassword: function (userData) {
        return axiosInstance.post('registration/updatePassword', {
            id: userData.id,
            newPassword: userData.password
        }, apiHeaderConfiguration(EMPTY, EMPTY))
    },
    verifyCodeForResetPass: function (code) {
        return axiosInstance.post('registration/verifyCodeForResetPass', { code: code }, apiHeaderConfiguration(EMPTY, EMPTY))
    },
};

export default Api;