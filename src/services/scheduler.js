import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import {apiHeaderConfiguration} from '../lib/utils/global'
import {TOKEN} from '../lib/utils/constants'
import {getLocalData,LOCAL_STORAGE_KEYS} from '../lib/utils/localstorage'


const Api = {
    getAllListScheduler: function (userData) {
        return axiosInstance.post('scheduler/listScheduler', {
            id: userData.id
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },

    deleteScheduler: function (userData) {
        return axiosInstance.post('scheduler/deleteScheduler', {
            id: userData.id,
            scheduler_id: userData.scheduler_id
        }, apiHeaderConfiguration(getLocalData(LOCAL_STORAGE_KEYS.userToken), TOKEN))
    },
    createScheduler: function (userData) {
        // console.log("userData:", userData)
        return axiosInstance.post('scheduler/createScheduler', {
            id: userData.id,
            scheduler_name: userData.scheduler_name,
            working_days: userData.working_days
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    schedulerDetail: function (userData) {
        return axiosInstance.post('scheduler/schedulerDetail', {
            id: userData.id,
            scheduler_id: userData.scheduler_id
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },

};

export default Api;