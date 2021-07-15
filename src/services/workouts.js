import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN, } from '../lib/utils/constants'

const Api = {
    getAllWorkouts: function (token, id) {
        return axiosInstance.get('GetAllWorkouts', apiHeaderConfiguration(token, TOKEN, id))
    },
    getAllWorkoutsbyId: function (id) {
        return axiosInstance.get('GetAllWorkoutsById?ClientId=' + id, apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllSets: function () {
        return axiosInstance.get('GetAllSets', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllWorkoutSets: function () {
        return axiosInstance.get('GetAllWorkoutSets', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    createWorkout: function (userData, token) {
        return axiosInstance.post('CreateWorkout', userData, apiHeaderConfiguration(token, TOKEN))
    },
    createWorkoutExercise: function (userData, token) {
        return axiosInstance.post('CreateWorkoutExercise', userData, apiHeaderConfiguration(token, TOKEN))
    },
    createWorkoutExerciseSets: function (userData, token) {
        return axiosInstance.post('CreateWorkoutExerciseSets', userData, apiHeaderConfiguration(token, TOKEN))
    },
    createWorkExerciseSet: function (userData, token) {
        return axiosInstance.post('CreateWorkExerciseSet', userData, apiHeaderConfiguration(token, TOKEN))
    },
    updateWorkout: function (userData, token) {
        return axiosInstance.post('UpdateWorkout', userData, apiHeaderConfiguration(token, TOKEN))
    },
    duplicateWorkout: function (userData, token) {
        return axiosInstance.post('DuplicateWorkout', userData, apiHeaderConfiguration(token, TOKEN))
    },
    deleteWorkout: function (userData, token) {
        return axiosInstance.post('DeleteWorkout', userData, apiHeaderConfiguration(token, TOKEN))
    },
    deleteWorkoutExercise: function (userData, token) {
        return axiosInstance.post('DeleteWorkoutExercise', userData, apiHeaderConfiguration(token, TOKEN))
    },
    deleteWorkoutExerciseSet: function (userData, token) {
        return axiosInstance.post('DeleteWorkoutExerciseSet', userData, apiHeaderConfiguration(token, TOKEN))
    },
    ClientAssign: function (userData, token) {
        return axiosInstance.post('ClientAssign', userData, apiHeaderConfiguration(token, TOKEN))
    }
};

export default Api;