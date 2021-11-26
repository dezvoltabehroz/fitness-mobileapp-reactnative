import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'
import { BASE_URL } from '../enviroments';
import axios from 'axios';

const Api = {

    getAllPrograms: function (token, userId,sortBy) {
        return axiosInstance.get(`GetUserProgramByUserId?CountBit=false&SortBy=${sortBy}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getAllProgressPhotoById: function (token, userId) {
        return axiosInstance.get(`GetAllProgressPhotoById?ClientId=${userId}&PhotoBit=true`, apiHeaderConfiguration(token, TOKEN))
    },
    getAllAssignedPrograms: function (token, userId) {
        return axiosInstance.get(`GetUserProgramByUserId?CountBit=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    uploadProgressPhoto: function (data, token, userId) {
        return axios.post(`${BASE_URL}Uploader`, data, apiHeaderConfiguration(token, TOKEN, userId))
    },
    uploadProgressPhotoAssignUser: function (path, token, userId) {
        return axios.get(`${BASE_URL}UploadProgressPhotoClient?${path}&ClientId=${userId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getUserCircumference: function (programId, userProgramId, token, userId) {
        return axiosInstance.get(`GetUserCircumference?ProgramId=${programId}&UserProgramId=${userProgramId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getProgramWeekByUserId: function (userProgramId, token, userId) {
        return axiosInstance.get(`GetProgramWeekByUserId?UserProgramId=${userProgramId}&UserId${userId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getProgramWeekDaysByWeekId: function (userProgramId, userProgramWeekId, token, userId) {
        return axiosInstance.get(`GetProgramDaysByProgramWeekId?UserProgramId=${userProgramId}&UsersProgramWeekId=${userProgramWeekId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getDailyWorkOutExerciseByProgramWeekDay: function (usersProgramWeekDayId, workOutId, token, userId) {
        return axiosInstance.get(`GetDailyWorkOutExerciseByProgramWeekDayId?UsersProgramWeekDayId=${usersProgramWeekDayId}&WorkOutId=${workOutId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    addSet: function (workoutExerciseId, programWeekId, usersProgramWeekDayId, token, userId) {
        return axiosInstance.post(`AddSetToWorkoutExercise?UsersProgramWorkoutExerciseId=${workoutExerciseId}&UsersProgramWeekId=${programWeekId}&UsersProgramWeekDayId=${usersProgramWeekDayId}&IsProgramWorkout=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    setCompleted: function (setId, token, userId) {
        return axiosInstance.post(`CompleteWorkoutExerciseSet?UsersProgramWorkoutExerciseSetId=${setId}&IsProgramWorkout=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    setUnCompleted: function (setId, token, userId) {
        return axiosInstance.post(`CompleteWorkoutExerciseSet?UsersProgramWorkoutExerciseSetId=${setId}&IsProgramWorkout=true&IsCompleted=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    allSetCompleted: function (workoutExerciseId, token, userId) {
        return axiosInstance.post(`CompleteWorkoutExercise?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    completeTheWholeDayWorkout: function (weekDayId, token, userId) {
        return axiosInstance.post(`CompleteProgramDays?ProgramWeekDayId=${weekDayId}&IsProgramWorkout=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    completeNutrition: function (nutritionDetailId, token, userId) {
        return axiosInstance.post(`CompleteNutritions?UsersProgramNutritionDetailId=${nutritionDetailId}&IsProgramWorkout=true`, userData, apiHeaderConfiguration(token, TOKEN, userId))
    },
    startProgram: function (programId, userProgramId, token, userId) {
        return axiosInstance.post(`StartProgram?ProgramId=${programId}&UserProgramId=${userProgramId}`, userData, apiHeaderConfiguration(token, TOKEN, userId))
    },
    addExercise: function (exerciseId, workoutId, token, userId) {
        return axiosInstance.post(`AddExerciseFromRecentWorkout?WorkoutExerciseId=${exerciseId}&UsersWorkoutId=${workoutId}&IsProgramWorkout=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    updateUserMeasurements: function (data, token, userId) {
        return axios.post(`${BASE_URL}CreateWeightCircumferencebyId`, data,  apiHeaderConfiguration(token, TOKEN, userId))
    },
    updateUserBodyFats: function (data, token, userId) {
        return axios.post(`${BASE_URL}CreateBodyFatId`, data,  apiHeaderConfiguration(token, TOKEN, userId))
    },
    updateUserVitalStats: function (data, token, userId) {
        return axios.post(`${BASE_URL}CreateVitalStatsId`, data,  apiHeaderConfiguration(token, TOKEN, userId))
    },
    addNotesToExercise: function (workoutExerciseId, note, token, userId) {
        console.log(workoutExerciseId, note)
        return axiosInstance.post(`AddNotesUsersWorkoutExericse?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=true&Notes=${note}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getExerciseHistory: function (workoutExerciseId, token, userId) {
        // return axiosInstance.get(`GetWorkoutExerciseSetHistory?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
        return axiosInstance.get(`GetWorkoutExerciseSetHistory?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    removeExerciseFromWorkout: function (workoutExerciseId, token, userId) {
        return axiosInstance.post(`RemoveUsersWorkoutExericse?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    swapExercise: function (exerciseId, workoutId, token, userId) {
        return axiosInstance.post(`SwapWorkoutExercise?UsersProgramWorkoutExerciseId=${exerciseId}&IsProgramWorkout=true&SwapWorkoutExerciseId=${workoutId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getWorkoutExerciseGropuSet: function (token, userId) {
        // http://185.132.39.105/BlaqstarFitnessAPI/v1/GetWorkoutExerciseGroupSet
        return axiosInstance.get(`GetWorkoutExerciseGroupSet`, apiHeaderConfiguration(token, TOKEN, userId))
    }
};

export default Api;