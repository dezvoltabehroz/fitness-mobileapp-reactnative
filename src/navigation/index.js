import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Home, Login } from '../screens';
let data;
const Stack = createStackNavigator();

function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName={"Login"} >
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
             <Stack.Screen name="Workouts" component={Home} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 16,
        color: "#fff",
        fontFamily:'notoserif', // 'Poppins-Bold'
    }
})

export default AppRoutes;


