import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import moment from 'moment';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../redux/actions/auth';
import {
    Home, Login, Settings, MyProfile, Files, WorkoutTemplate, Forms, UpdateNotificationSettings,
    Workouts, WorkoutLibrary, ProgressPhoto, LogNutrition, StartWorkout, Integrations, Notifications,
    UnitMeasurement, UploadPhoto, Programs, ProgramLibrary, MarketPlace, CreditPackages, Packages,
    WorkoutDetails, CurrentWorkout, Financials, Nutrition, AddItem, Measurement, Calendar, ChatList,
    ChatSetting, Media, Chat, NutritionLibrary, NutritionDetail, ExerciseDetail, ProgramDetail, WeekDetail, AddNutritionItem, AuthLoading, ProgramCurrentWorkout
} from '../screens';
import { screen, route, EMPTY } from '../lib/utils/constants';
import { NavigationHeaderLeftButton, NavigationHeaderRightButton } from '../components/special/navigationHeaderButton';
import styles from './style';

const Stack = createStackNavigator();

function AppRoutes(props) {
    return (
        <Stack.Navigator initialRouteName={route.AuthLoading} >
            <Stack.Screen name={route.AuthLoading} component={AuthLoading} options={{ headerShown: false }} />
            <Stack.Screen name={route.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={route.HOME} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={route.CALENDAR} component={Calendar} options={{ headerShown: false }} />
            <Stack.Screen name={route.CHAT} component={ChatList} options={{ headerShown: false }} />
            <Stack.Screen name={route.NOTIFICAONS} component={Notifications} options={({ navigation, route }) => ({ headerShown: false })} />
            <Stack.Screen name={route.FORM} component={Forms} options={({ navigation, route }) => ({ headerShown: false })} />
            <Stack.Screen name={route.WORKOUT} component={Workouts} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name={route.PROGRAM} component={Programs} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name={route.MARKETPLACE} component={MarketPlace} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name={route.FINANCIAL} component={Financials} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name={route.NUTRITION} component={Nutrition} options={({ navigation, route }) => ({ headerShown: false, })} />
            <Stack.Screen name={route.HUB} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={route.SETTING} component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name={route.FILE} component={Files} options={({ navigation, route }) => ({ headerShown: false })} />
            <Stack.Screen name={route.CHATSCREEN} component={Chat} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerRight: () => (<NavigationHeaderRightButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: EMPTY
            })} />
            <Stack.Screen name={route.ACCOUNT_DETAILS} component={MyProfile} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_ACCOUNT_DETAILS
            })} />
            <Stack.Screen name={route.CHATSETTING} component={ChatSetting} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_SETTING
            })} />
            <Stack.Screen name={route.MEDIA} component={Media} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_MEDIA
            })} />
            <Stack.Screen name={route.NUTRITIONITEM} component={AddNutritionItem} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_ITEM
            })} />
            <Stack.Screen name={route.ITEM} component={AddItem} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: route.params ? route.params.data.itemName : screen.SCREEN_TITLE_ITEM
            })} />
            <Stack.Screen name={screen.SCREEN_TITLE_MEASUREMENT} component={Measurement} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_MEASUREMENT
            })} />
            <Stack.Screen name={route.WORK_TEMPLATE} component={WorkoutTemplate} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_WORK_TEMPLATE
            })} />
            <Stack.Screen name={route.UPDATE_NOTIFICATIONS} component={UpdateNotificationSettings} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_NOTIFICAONS
            })} />
            <Stack.Screen name={route.INTEGRATION} component={Integrations} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_INTEGRATION
            })} />
            <Stack.Screen name={route.UNIT_MEASUREMENT} component={UnitMeasurement} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_UNIT_MEASUREMENT
            })} />
            <Stack.Screen name={route.START_SESSION} component={StartWorkout} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_START_SESSION
            })} />
            <Stack.Screen name={route.UPLOAD_PHOTO} component={UploadPhoto} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_UPLOAD_PHOTO
            })} />
            <Stack.Screen name={route.LOG_NUTRITION} component={LogNutrition} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: `${moment().format('Do MMMM YYYY')}`
            })} />
            <Stack.Screen name={route.WORKOUT_LIBRARY} component={WorkoutLibrary} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_WORKOUT_LIBRARY
            })} />
            <Stack.Screen name={route.NUTRITION_LIBRARY} component={NutritionLibrary} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                // headerRight: () => (<NavigationHeaderRightButton navigation={navigation} dot={true} authActions={props.authActions} />),
                headerTitle: screen.SCREEN_TITLE_NUTRITION_LIBRARY
            })} />
            <Stack.Screen name={route.PROGRAM_LIBRARY} component={ProgramLibrary} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_PROGRAM_LIBRARY
            })} />
            <Stack.Screen name={route.WORKOUT_DETAIL} component={WorkoutDetails} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: `${route.params.data.workoutName}`
            })} />
            <Stack.Screen name={route.NUTRITION_DETAIL} component={NutritionDetail} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: `${route.params.data.mealPlanName}`
            })} />
            <Stack.Screen name={route.EXERCISE} component={ExerciseDetail} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: `${route.params.heading}`
            })} />
            <Stack.Screen name={route.PROGRAM_DETAIL} component={ProgramDetail} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: `${route.params.heading}`
            })} />
            <Stack.Screen name={route.WEEK_DETAIL} component={WeekDetail} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: `${route.params.heading}`
            })} />
            <Stack.Screen name={route.PACKAGE} component={Packages} options={({ navigation, route }) => ({
                headerTitleStyle: styles.headerTitleStyle,
                headerStyle: styles.headerStyle,
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_PACKAGE
            })} />
            <Stack.Screen name={route.CREDIT} component={CreditPackages} options={({ navigation, route }) => ({
                headerTitleStyle: styles.headerTitleStyle,
                headerStyle: styles.headerStyle,
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_CREDIT
            })} />
            <Stack.Screen name={route.PROGRESS_PHOTO} component={ProgressPhoto} options={({ navigation, route }) => ({
                headerLeft: () => (<NavigationHeaderLeftButton navigation={navigation} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_PROGRESS_PHOTO
            })} />
            <Stack.Screen name={route.CURRENT_WORKOUT} component={CurrentWorkout} options={({ navigation, route }) => ({
                headerLeft: false,
                headerStyle: { elevation: 0 },
                headerRight: () => (<NavigationHeaderRightButton navigation={navigation} dot={true} authActions={props.authActions} user={props.user} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_CURRENT_WORKOUT
            })} />
              <Stack.Screen name={route.PROGRAM_CURRENT_WORKOUT} component={ProgramCurrentWorkout} options={({ navigation, route }) => ({
                headerLeft: false,
                headerStyle: { elevation: 0 },
                headerRight: () => (<NavigationHeaderRightButton navigation={navigation} dot={true} authActions={props.authActions} user={props.user} />),
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER,
                headerTitle: screen.SCREEN_TITLE_CURRENT_WORKOUT
            })} />
        </Stack.Navigator>
    );
}


const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);


