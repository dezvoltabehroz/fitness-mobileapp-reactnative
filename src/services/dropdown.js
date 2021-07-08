import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'

const Api = {
    getAllGender: function () {
        return axiosInstance.get('GetAllGender', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllRole: function () {
        return axiosInstance.get('GetAllRole', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllMeasurementUnit: function () {
        return axiosInstance.get('GetAllMeasurementUnit', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllMeals: function () {
        return axiosInstance.get('GetAllMeals', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllCustomFoodsList: function () {
        return axiosInstance.get('GetAllCustomFoodsList', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllEquipment: function () {
        return axiosInstance.get('GetAllEquipment', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllMacroType: function () {
        return axiosInstance.get('GetAllRole', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllExerciseBodyPart: function () {
        return axiosInstance.get('GetAllExerciseBodyPart', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllMechanicsType: function () {
        return axiosInstance.get('GetAllMechanicsType', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllSport: function () {
        return axiosInstance.get('GetAllSport', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllOtherMuscleWorked: function () {
        return axiosInstance.get('GetAllOtherMuscleWorked', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllMainMuscleWorked: function () {
        return axiosInstance.get('GetAllMainMuscleWorked', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllExerciseType: function () {
        return axiosInstance.get('GetAllExerciseType', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllLevel: function () {
        return axiosInstance.get('GetAllLevel', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllForce: function () {
        return axiosInstance.get('GetAllForce', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllExerciseCategory: function () {
        return axiosInstance.get('GetAllExerciseCategory', apiHeaderConfiguration(EMPTY, EMPTY))
    },
};

export default Api;