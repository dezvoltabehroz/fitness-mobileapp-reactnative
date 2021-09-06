import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'

const Api = {

    getAllActivitiesByAudit: function (token, userId) {
        return axiosInstance.get(`GetActivityAuditLogById?ClientId=${userId}&UserId=${userId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },


};

export default Api;