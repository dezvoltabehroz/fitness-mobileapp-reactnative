import {
    MENU_MODAL_SUCCESS,
    NOTIFICATION_MODAL_SUCCESS,
    CALENDER_MODAL_SUCCESS,
    FILTER_MODAL_SUCCESS,
    STOPWATCH_MODAL_SUCCESS,
    MENU_DOTS_MODAL_SUCCESS,
    USER_LOGIN_SUCCESS,
    LOADING_SUCCESS,
    USER_LOGOUT_SUCCESS
} from '../types';
import { Alert, Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthServices } from '../../services';

import { SUCCESS_CODE } from '../../lib/utils/constants';
import { clearAllLocalData, clearLocalData, LOCAL_STORAGE_KEYS, storeLocalData } from '../../lib/utils/localstorage';

const menuModal = (modal) => {
    return (dispatch) => {
        dispatch({ type: MENU_MODAL_SUCCESS, modal: modal })
    }
}

const notificationModal = (modal) => {
    return (dispatch) => {
        dispatch({ type: NOTIFICATION_MODAL_SUCCESS, modal: modal })
    }
}

const calenderModal = (modal) => {
    return (dispatch) => {
        dispatch({ type: CALENDER_MODAL_SUCCESS, modal: modal })
    }
}

const filterModal = (modal) => {
    return (dispatch) => {
        dispatch({ type: FILTER_MODAL_SUCCESS, modal: modal })
    }
}

const stopwatchModal = (modal) => {
    return (dispatch) => {
        dispatch({ type: STOPWATCH_MODAL_SUCCESS, modal: modal })
    }
}

const menuDotModal = (modal) => {
    return (dispatch) => {
        dispatch({ type: MENU_DOTS_MODAL_SUCCESS, modal: modal })
    }
}

const setUserData = (data) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_SUCCESS, userData: data, loading: false })
    }
}

const userLogin = (userData, navigate) => {

    return (dispatch) => {
        let loading = true;
        if (loading) {
            dispatch({ type: LOADING_SUCCESS, loading: loading })
        }
        AuthServices.userLogin(userData)
            .then((res) => {
                if (res.data.responseCode == SUCCESS_CODE) {
                    dispatch({ type: USER_LOGIN_SUCCESS, userData: res.data, loading: !loading })
                    storeLocalData(LOCAL_STORAGE_KEYS.loginDetails, JSON.stringify(userData))
                    storeLocalData(LOCAL_STORAGE_KEYS.userToken, JSON.stringify(res.data))
                    navigate('Home')
                }
                else {
                    alert(res.data.responseMessage)
                    dispatch({ type: LOADING_SUCCESS, loading: !loading })
                }
            })
            .catch((err) => {
                console.log(err.response)
                alert(err.response.data.responseMessage)
                dispatch({ type: LOADING_SUCCESS, loading: !loading })
            })
    }
}

const removeUser = (navigate) => {
    return (dispatch) => {
        clearAllLocalData();
        navigate.reset({
            index: 0,
            routes: [{ name: 'AuthLoading' }],
        });
        setTimeout(() => {
            dispatch({ type: USER_LOGOUT_SUCCESS })
        }, 2000)

    }
};

const forgotPassword = (userData, success, error) => {

    return (dispatch) => {

        AuthServices.forgotPassword(userData)
            .then((res) => {
                if (res.data.responseCode == SUCCESS_CODE) {
                    // dispatch({ type: USER_LOGIN_SUCCESS, userData: res.data, loading: !loading })
                    success()
                }
                else {
                    error()
                }
            })
            .catch((err) => {
                console.log(err.response.data.responseMessage)
                error()
                alert(err.response.data.responseMessage)
            })
    }
}

export const authActions = {
    menuDotModal,
    menuModal,
    setUserData,
    notificationModal,
    filterModal,
    calenderModal,
    stopwatchModal,
    userLogin,
    forgotPassword,
    removeUser
};