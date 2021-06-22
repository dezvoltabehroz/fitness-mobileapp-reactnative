import {
    MENU_MODAL_SUCCESS,
    NOTIFICATION_MODAL_SUCCESS,
    CALENDER_MODAL_SUCCESS,
    FILTER_MODAL_SUCCESS,
    STOPWATCH_MODAL_SUCCESS,
    MENU_DOTS_MODAL_SUCCESS
} from '../types';
import { Alert, Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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



export const authActions = {
    menuDotModal,
    menuModal,
    notificationModal,
    filterModal,
    calenderModal,
    stopwatchModal
};