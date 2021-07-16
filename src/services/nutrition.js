import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
import { apiHeaderConfiguration } from '../lib/utils/global'
import { EMPTY, TOKEN } from '../lib/utils/constants'

const Api = {
    getAllCustomFoods: function (token, id) {
        return axiosInstance.get('GetAllCustomFoods', apiHeaderConfiguration(token, TOKEN, id))
    },
    getAllMacros: function () {
        return axiosInstance.get('GetAllMacros', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    addCustomFood: function (userData, token, id) {
        return axiosInstance.post('AddCustomFood', userData, apiHeaderConfiguration(token, TOKEN, id))
    },
    updateCustomFood: function(userData, token, id) {
        return axiosInstance.post('UpdateCustomFood', userData, apiHeaderConfiguration(token, TOKEN, id))
    },
    deleteCustomFood: function (token, id) {
        return axiosInstance.post('DeleteCustomFood', userData, apiHeaderConfiguration(token, TOKEN))
    },
    getAllMealPlanDetails: function (token, id) {
        return axiosInstance.get('GetAllMealPlanDetails', apiHeaderConfiguration(token, TOKEN, id))
    },
    recipeSearch: function () {
        return axiosInstance.get('search?q=chicken&app_id=9929fc03&app_key=beb5bf4f114df61b5f74074c20193f07&from=0&to=3&calories=591-722&health=alcohol-free', apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getAllMealPlanDetailsById: function (id) {
        return axiosInstance.get('GetAllMealPlanDetailsById?ClientId=' + id, apiHeaderConfiguration(EMPTY, EMPTY))
    },
    getMealPlanDetailsAccumulated: function (name) {
        return axiosInstance.get('GetAllMealPlanDetailsAccumulated?name=' + name, apiHeaderConfiguration(EMPTY, EMPTY))
    },
    addMealPlanDetailItem: function (userData, token) {
        return axiosInstance.post('AddMealPlanDetailItem', userData, apiHeaderConfiguration(token, TOKEN))
    },
    createMealPlanDetails: function (userData, token) {
        return axiosInstance.post('CreateMealPlanDetails', userData, apiHeaderConfiguration(token, TOKEN))
    },
    createWorkoutExerciseSets: function (userData, token) {
        return axiosInstance.post('CreateWorkoutExerciseSets', userData, apiHeaderConfiguration(token, TOKEN))
    },
    updateMealPlanAttachment: function (userData, token) {
        return axiosInstance.post('UpdateMealPlanAttachment', userData, apiHeaderConfiguration(token, TOKEN))
    },
    deleteMealPlanDetails: function (userData, token) {
        return axiosInstance.post('DeleteMealPlanDetails', userData, apiHeaderConfiguration(token, TOKEN))
    },
    deleteMealPlanDetailsAccumulated: function (userData, token) {
        return axiosInstance.post('DeleteMealPlanDetailsAccumulated', userData, apiHeaderConfiguration(token, TOKEN))
    },

};

export default Api;