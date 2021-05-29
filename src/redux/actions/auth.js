import {
    MENU_MODAL_SUCCESS
} from '../types';
import { Alert, Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const menuModal = (modal) => {
    return (dispatch) => {
        dispatch({ type: MENU_MODAL_SUCCESS, modal: modal })
    }
}


export const authActions = {
    menuModal
};