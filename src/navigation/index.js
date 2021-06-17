import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import moment from 'moment';
import { Home, Login, Settings, MyProfile, Files, WorkoutTemplate, Forms, UpdateNotificationSettings, Workouts, WorkoutLibrary, ProgressPhoto, LogNutrition, StartWorkout, Integrations, Notifications, UnitMeasurement, UploadPhoto, Programs, ProgramLibrary, MarketPlace, CreditPackages, Packages, WorkoutDetails, CurrentWorkout, Financials, Nutrition, AddItem, Measurement, Calendar, ChatList, ChatSetting, Media, Chat } from '../screens';
import { Icon } from "../components";
import { SCREEN_TITLE_ALIGN_CENTER, SCREEN_TITLE_MEASUREMENT } from '../lib/utils/constants';
import { NavigationHeaderButton } from '../components/special/navigationHeaderButton'

const Stack = createStackNavigator();

// 
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
            <Stack.Screen name="Calendar" component={Calendar} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Chat" component={ChatList} options={{
                headerShown: false
            }} />
            <Stack.Screen name="ChatScreen" component={Chat} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerRight: () => (<TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('ChatSettings')}><Icon.AntDesign name="setting" size={25} color="lightgray" /></TouchableOpacity>),

                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: " "
            })} />
            <Stack.Screen name="MyDetails" component={MyProfile} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Account Details"
            })} />
            <Stack.Screen name="ChatSettings" component={ChatSetting} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Settings"
            })} />
            <Stack.Screen name="Media" component={Media} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Media"
            })} />
            <Stack.Screen name="AddItem" component={AddItem} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Add Item"
            })} />
            <Stack.Screen name={SCREEN_TITLE_MEASUREMENT} component={Measurement} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: SCREEN_TITLE_MEASUREMENT
            })} />
            <Stack.Screen name="WorkoutTemplate" component={WorkoutTemplate} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Workout Template"
            })} />
            <Stack.Screen name="UpdateNotificationSettings" component={UpdateNotificationSettings} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Notifications"
            })} />
            <Stack.Screen name="Notifications" component={Notifications} options={({ navigation, route }) => ({
                headerShown: false,
                // headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                // headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                // headerTitle: "Notifications"
            })} />
            <Stack.Screen name="Integrations" component={Integrations} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Integrations"
            })} />
            <Stack.Screen name="UnitMeasurement" component={UnitMeasurement} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Unit of Measurement"
            })} />
            <Stack.Screen name="StartWorkout" component={StartWorkout} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Start Session"
            })} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Upload Photo"
            })} />
            <Stack.Screen name="LogNutrition" component={LogNutrition} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: `${moment().format('Do MMMM YYYY')}`
            })} />
            <Stack.Screen name="WorkoutLibrary" component={WorkoutLibrary} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Workout Library"
            })} />
            <Stack.Screen name="ProgramLibrary" component={ProgramLibrary} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Program Library"
            })} />

            <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: `${route.params.heading}`
            })} />
            <Stack.Screen name="Files" component={Files} options={({ navigation, route }) => ({
                headerShown: false,
            })} />
            <Stack.Screen name="Forms" component={Forms} options={({ navigation, route }) => ({ headerShown: false })} />
            <Stack.Screen name="Workouts" component={Workouts} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name="Programs" component={Programs} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name="Marketplace" component={MarketPlace} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name="Financials" component={Financials} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name="Nutrition" component={Nutrition} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name="Packages" component={Packages} options={({ navigation, route }) => ({
                // headerShown: false,
                headerTitleStyle: { color: "white" },
                headerStyle: {
                    backgroundColor: "#181818"
                },
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Packages"
            })} />
            <Stack.Screen name="CreditPackages" component={CreditPackages} options={({ navigation, route }) => ({
                // headerShown: false,
                headerTitleStyle: { color: "white" },
                headerStyle: { backgroundColor: "#181818" },
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Credit Packages"
            })} />

            <Stack.Screen name="ProgressPhoto" component={ProgressPhoto} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: () => (<NavigationHeaderButton navigation={navigation} />),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: "Progress Photo"
            })} />

            <Stack.Screen name="CurrentWorkout" component={CurrentWorkout} options={({ navigation, route }) => ({
                // headerShown: false,
                headerLeft: false,
                headerStyle: { elevation: 0 },
                headerRight: () => (<TouchableOpacity style={{ marginRight: 10 }} onPress={() => handleAlert()}><Icon.MaterialCommunityIcons name="dots-horizontal" size={25} color="lightgray" /></TouchableOpacity>),
                headerTitleAlign: SCREEN_TITLE_ALIGN_CENTER,
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


