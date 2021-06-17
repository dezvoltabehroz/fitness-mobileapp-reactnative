import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import {apiHeaderConfiguration} from '../lib/utils/global'
import {TOKEN} from '../lib/utils/constants'

const Api = {
    getAllNotifications: function (userData) {
        return axiosInstance.post('notification/viewAll', {
            user_id: userData.id
        }, apiHeaderConfiguration(userData.token,TOKEN))
    },

    readAllNotifications: function (userData) {
        return axiosInstance.post('notification/readAllNotifications', {
            user_id: userData.id
        }, apiHeaderConfiguration(userData.token,TOKEN))
    },

};

export default Api;