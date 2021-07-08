import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'

const Api = {
    getAllContacts: function () {
        return axiosInstance.get('GetAllContact', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllActiveContacts: function () {
        return axiosInstance.get('GetActiveAllContact', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllExercisesbyName: function () {
        return axiosInstance.get('GetAllExercisesbyName', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    createExercise: function (userData, token) {
        return axiosInstance.post('CreateExercise', userData, apiHeaderConfiguration(token, TOKEN))
    },
    updateExercise: function (userData, token) {
        return axiosInstance.post('UpdateExercise', userData, apiHeaderConfiguration(token, TOKEN))
    },
    deleteExercise: function (userData, token) {
        return axiosInstance.post('DeleteExercise', userData, apiHeaderConfiguration(token, TOKEN))
    },

};

export default Api;