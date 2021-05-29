import React, { Component } from 'react';
import { StatusBar, Linking, Platform, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './navigation'
import AsyncStorage from '@react-native-community/async-storage';
import THEME from './assets/styles/theme.style';

import { Provider } from "react-redux";
import createStore from "./redux/CreateStore";
const store = createStore();

export default function App() {

    React.useEffect(() => {
        LogBox.ignoreAllLogs()
    }, [])
    
    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <SafeAreaProvider>
                        <StatusBar backgroundColor={THEME.PRIMARY_BACKGROUND_COLOR} />
                        <AppRoutes />
                    </SafeAreaProvider>
                </NavigationContainer>
            </Provider>
        </>
    );
}


