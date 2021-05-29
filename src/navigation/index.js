import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Home, Login, Settings, MyProfile } from '../screens';
import { Icon } from "../components";

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
            <Stack.Screen name="MyDetails" component={MyProfile} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Account Details"
            })} />
            <Stack.Screen name="Hub" component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Setting" component={Settings} options={{
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
        fontFamily: 'notoserif', // 'Poppins-Bold'
    }
})

export default AppRoutes;


