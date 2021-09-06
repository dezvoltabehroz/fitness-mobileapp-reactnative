import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'

const Api = {

    getAllPrograms: function (token, userId) {
        return axiosInstance.get(`GetUserProgramByUserId?CountBit=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getAllAssignedPrograms:function (token, userId) {
        return axiosInstance.get(`GetUserProgramByUserId?CountBit=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },


};

export default Api;