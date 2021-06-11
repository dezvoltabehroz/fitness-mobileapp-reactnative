import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Home, Login, Settings, MyProfile, Files, WorkoutTemplate, Forms, UpdateNotificationSettings, Workouts, WorkoutLibrary, ProgressPhoto, LogNutrition, StartWorkout, Integrations, Notifications, UnitMeasurement, UploadPhoto, Programs, ProgramLibrary, MarketPlace, CreditPackages, Packages, WorkoutDetails, CurrentWorkout, Financials, Nutrition, AddItem, Measurement } from '../screens';
import { Icon } from "../components";
import moment from 'moment';


let data;
const Stack = createStackNavigator();

const handleAlert = () => {
    Alert.alert(
        `Are you sure?`,
        'Please confirm that you want to quit this session - Any data logged during the session will be cleared ',
        [
            {
                text: 'CANCEL'
            },
            {
                text: 'QUIT SESSion',
                onPress: () => { }
            }
        ]
    )
}

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
              <Stack.Screen name="AddItem" component={AddItem} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Add Item"
            })} />
               <Stack.Screen name="Measurement" component={Measurement} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Measurement"
            })} />
            <Stack.Screen name="WorkoutTemplate" component={WorkoutTemplate} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Workout Template"
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
            <Stack.Screen name="ProgramLibrary" component={ProgramLibrary} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Program Library"
            })} />

            <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: `${route.params.heading}`
            })} />
            <Stack.Screen name="Files" component={Files} options={({ navigation, route }) => ({
                headerShown: false,
            })} />
            <Stack.Screen name="Forms" component={Forms} options={({ navigation, route }) => ({
                headerShown: false,
            })} />
            <Stack.Screen name="Workouts" component={Workouts} options={({ navigation, route }) => ({
                headerShown: false,
            })} />
            <Stack.Screen name="Programs" component={Programs} options={({ navigation, route }) => ({
                headerShown: false,
            })} />

            <Stack.Screen name="Marketplace" component={MarketPlace} options={({ navigation, route }) => ({
                headerShown: false,
            })} />

            <Stack.Screen name="Financials" component={Financials} options={({ navigation, route }) => ({
                headerShown: false,
            })} />

            <Stack.Screen name="Nutrition" component={Nutrition} options={({ navigation, route }) => ({
                headerShown: false,
            })} />

            <Stack.Screen name="Packages" component={Packages} options={({ navigation, route }) => ({
                // headerShown: false,
                headerTitleStyle: { color: "white" },
                headerStyle: {
                    backgroundColor: "#181818"
                },
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Packages"
            })} />
            <Stack.Screen name="CreditPackages" component={CreditPackages} options={({ navigation, route }) => ({
                // headerShown: false,
                headerTitleStyle: { color: "white" },
                headerStyle: {
                    backgroundColor: "#181818"
                },
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Credit Packages"
            })} />

            <Stack.Screen name="ProgressPhoto" component={ProgressPhoto} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}><Icon.AntDesign name="left" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Progress Photo"
            })} />

            <Stack.Screen name="CurrentWorkout" component={CurrentWorkout} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: false,
                headerStyle: { elevation: 0 },
                headerRight: () => (<TouchableOpacity style={{ marginRight: 10 }} onPress={() => handleAlert()}><Icon.MaterialCommunityIcons name="dots-horizontal" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: "center",
                headerTitle: "Current Workout"
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


