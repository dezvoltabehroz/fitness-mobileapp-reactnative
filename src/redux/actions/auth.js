import {
    MENU_MODAL_SUCCESS,
    NOTIFICATION_MODAL_SUCCESS,
    CALENDER_MODAL_SUCCESS,
    FILTER_MODAL_SUCCESS
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



export const authActions = {
    menuModal,
    notificationModal,
    filterModal,
    calenderModal
};