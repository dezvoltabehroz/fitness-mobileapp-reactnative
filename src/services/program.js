import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'
import { BASE_URL } from '../enviroments';
import axios from 'axios';

const Api = {

    getAllPrograms: function (token, userId) {
        return axiosInstance.get(`GetUserProgramByUserId?CountBit=false`, apiHeaderConfiguration(token, TOKEN, userId))
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
    },
    getUserCircumference: function (programId, userProgramId, token, userId) {
        return axiosInstance.get(`GetUserCircumference?ProgramId=${programId}&UserProgramId=${userProgramId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getProgramWeekByUserId: function (userProgramId, token, userId) {
        return axiosInstance.get(`GetProgramWeekByUserId?UserProgramId=${userProgramId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getProgramWeekDaysByWeekId:function(userProgramId,userProgramWeekId,token,userId){
        return axiosInstance.get(`GetProgramDaysByProgramWeekId?UserProgramId=${userProgramId}&UsersProgramWeekId=${userProgramWeekId}`, apiHeaderConfiguration(token, TOKEN, userId))
        
    }


};

export default Api;