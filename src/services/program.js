import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'
import { BASE_URL } from '../enviroments';
import axios from 'axios';

const Api = {

    getAllPrograms: function (token, userId) {
        return axiosInstance.get(`GetUserProgramByUserId?CountBit=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getAllProgressPhotoById: function (token, userId) {
        return axiosInstance.get(`GetAllProgressPhotoById?UserId=${userId}`, apiHeaderConfiguration(token, TOKEN))
    },
    getAllAssignedPrograms: function (token, userId) {
        return axiosInstance.get(`GetUserProgramByUserId?CountBit=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    uploadProgressPhoto: function (data, token, userId) {
        return axios.post(`${BASE_URL}Uploader`, data, apiHeaderConfiguration(token, TOKEN, userId))
    },
    uploadProgressPhotoAssignUser: function (path, token, userId) {
        return axiosInstance.get(`${BASE_URL}UploadProgressPhotoClient?PhotoPath='${path}'&ClientId=${userId}`, apiHeaderConfiguration(token, TOKEN, userId))
    }


};

export default Api;