import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN, } from '../lib/utils/constants'

const Api = {
    getAllWorkouts: function (id, token, sortBy) {
        return axiosInstance.get(`GetAllWorkoutsById?UserId=${id}&SortBy=${sortBy}`, apiHeaderConfiguration(token, TOKEN, id))
    },
    getWorkoutExercise: function (workoutId, userWorkoutId, token, userId) {
        return axiosInstance.get(`GetAllWorkoutSets?WorkoutId=${workoutId}&UsersWorkoutId=${userWorkoutId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getAllSets: function () {
        return axiosInstance.get('GetAllSets', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllWorkoutSets: function () {
        return axiosInstance.get(`GetAllWorkoutSets`, apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getSelfCreatedWorkoutsByClientId: function (token, id) {
        return axiosInstance.get(`GetSelfCreatedWorkoutsByClientId?ClientId=${id}`, apiHeaderConfiguration(token, TOKEN, id))
    },
    getExerciseById: function (token, id, exerciseId) {
        return axiosInstance.get(`GetExerciseById?ExerciseId=${exerciseId}`, apiHeaderConfiguration(token, TOKEN, id))
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
    clientAssign: function (userData, token) {
        return axiosInstance.post('ClientAssign', userData, apiHeaderConfiguration(token, TOKEN))
    },
    getOldMeasurements: function (token, userId) {
        return axiosInstance.get(`GetAllWeightCircumferencebyId?ClientId=${userId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    addSet: function (workoutExerciseId, token, userId) {
        return axiosInstance.post(`AddSetToWorkoutExercise?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    setCompleted: function (setId, token, userId) {
        return axiosInstance.post(`CompleteWorkoutExerciseSet?UsersProgramWorkoutExerciseSetId=${setId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    setUnCompleted: function (setId, token, userId) {
        return axiosInstance.post(`CompleteWorkoutExerciseSet?UsersProgramWorkoutExerciseSetId=${setId}&IsProgramWorkout=false&IsCompleted=true`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    allSetCompleted: function (workoutExerciseId, token, userId) {
        return axiosInstance.post(`CompleteWorkoutExercise?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    completeTheWholeDayWorkout: function (workoutExerciseId, token, userId) {
        return axiosInstance.post(`CompleteWorkoutExercise?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    startWorkout: function (workoutId, token, userId) {
        return axiosInstance.post(`StartWorkout?WorkoutId=${workoutId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    addExercise: function (exerciseId, workoutId, token, userId) {
        return axiosInstance.post(`AddExerciseFromRecentWorkout?WorkoutExerciseId=${exerciseId}&UsersWorkoutId=${workoutId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getRecentWorkouts: function (token, userId) {
        return axiosInstance.get(`GetRecentWorkouts`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    addNotesToExercise: function (workoutExerciseId, note, token, userId) {
        console.log(workoutExerciseId, note)
        return axiosInstance.post(`AddNotesUsersWorkoutExericse?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=false&Notes=${note}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getExerciseHistory: function (workoutExerciseId, token, userId) {
        // return axiosInstance.get(`GetWorkoutExerciseSetHistory?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
        return axiosInstance.get(`GetWorkoutExerciseSetHistory?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    removeExerciseFromWorkout: function (workoutExerciseId, token, userId) {
        return axiosInstance.post(`RemoveUsersWorkoutExericse?UsersProgramWorkoutExerciseId=${workoutExerciseId}&IsProgramWorkout=false`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    swapExercise: function (exerciseId, workoutId, token, userId) {
        return axiosInstance.post(`SwapWorkoutExercise?UsersProgramWorkoutExerciseId=${exerciseId}&IsProgramWorkout=false&SwapWorkoutExerciseId=${workoutId}`, apiHeaderConfiguration(token, TOKEN, userId))
    },
    getWorkoutExerciseGropuSet: function (token, userId) {
        // http://185.132.39.105/BlaqstarFitnessAPI/v1/GetWorkoutExerciseGroupSet
        return axiosInstance.get(`GetWorkoutExerciseGroupSet`, apiHeaderConfiguration(token, TOKEN, userId))
    }
};

export default Api;