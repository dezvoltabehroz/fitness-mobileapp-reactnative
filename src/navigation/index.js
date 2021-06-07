import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Home, Login, Settings, MyProfile, UpdateNotificationSettings, Workouts, WorkoutLibrary, ProgressPhoto, LogNutrition, StartWorkout, Integrations, Notifications, UnitMeasurement, UploadPhoto } from '../screens';
import { Icon } from "../components";
import moment from 'moment';


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
            <Stack.Screen name="UpdateNotificationSettings" component={UpdateNotificationSettings} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Notifications"
            })} />
            <Stack.Screen name="Notifications" component={Notifications} options={({ navigation, route }) => ({
                headerShown: false,
                // headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                // headerTitleAlign: "center",
                // headerTitle: "Notifications"
            })} />
            <Stack.Screen name="Integrations" component={Integrations} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Integrations"
            })} />
            <Stack.Screen name="UnitMeasurement" component={UnitMeasurement} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Unit of Measurement"
            })} />
            <Stack.Screen name="StartWorkout" component={StartWorkout} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Start Session"
            })} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Upload Photo"
            })} />
            <Stack.Screen name="LogNutrition" component={LogNutrition} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: `${moment().format('Do MMMM YYYY')}`
            })} />
            <Stack.Screen name="WorkoutLibrary" component={WorkoutLibrary} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Workout Library"
            })} />
            <Stack.Screen name="Workouts" component={Workouts} options={({ navigation, route }) => ({
                headerShown: false,
            })} />



            <Stack.Screen name="ProgressPhoto" component={ProgressPhoto} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Progress Photo"
            })} />

            <Stack.Screen name="Hub" component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Settings" component={Settings} options={{
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


