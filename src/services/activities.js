import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'

const Api = {

    getAllActivitiesByAudit: function (token, userId) {
        return axiosInstance.get(`GetActivityAuditLogById?ActivityTypeId=0`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getAllNotification: function (token, userId) {
        return axiosInstance.get(`GetUserNotification`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getTodaySchedule: function (userId) {
        return axiosInstance.get(`GetTodaysSchedules`, { headers: { "UserId": userId } })
        // http://185.132.39.105/BlaqstarFitnessAPI/v1/GetTodaysSchedules
    },
    getUsersNotificationPriority: function (token, userId) {
        return axiosInstance.get(`GetUsersNotificationPriority`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    updateUsersNotificationPriority: function (data, token, userId) {
        return axiosInstance.post(`UpdateUsersNotificationPriority`, data, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getUnfinishedWorkout:function(userId,token){
        return axiosInstance.get(`GetUnfinishedWorkouts?IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
    }

};

export default Api;