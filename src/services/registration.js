import axiosInstance from './Interceptor';
import axios from 'axios';
import { Platform } from 'react-native';
import { BASE_URL } from '../enviroments/index'

import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, MULTIPART, TOKEN } from '../lib/utils/constants'


const Api = {

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
    updateProfileInfo: function (userData, token) {
        return axiosInstance.post('CreateExercise', userData, apiHeaderConfiguration(token, TOKEN))
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

   
    userLogin: function (userData) {
        return axiosInstance.post('Login', userData, apiHeaderConfiguration(EMPTY, EMPTY))
    },
    forgotPassword: function (userData) {
        return axiosInstance.post('ForgotPassword', userData, apiHeaderConfiguration(EMPTY, EMPTY))
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
};

export default Api;