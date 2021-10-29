import React from 'react';
import { View, TouchableOpacity, ScrollView, UIManager, LayoutAnimation, Text, Image, Dimensions, FlatList, Platform } from 'react-native';
// import { Icon } from '../index';
import { Icon } from 'native-base';
import { Icon as IconS } from '..';
import THEME from '../../assets/styles/theme.style';
import Modal from 'react-native-modal';
import styles from './style';
import RNBounceable from '@freakycoder/react-native-bounceable';
import DropDownPicker from 'react-native-dropdown-picker';
import { LOGO } from '../../lib/utils/constants';
import moment from 'moment';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
import ProgressBarAnimated from 'react-native-progress-bar-animated';
const Container = ({ children, props, component, selectedMinF, selectedSecF, onStartTimer, onPauseTimer, onResetTimer, onAgainStartTimer }) => {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    let screen = "";
    const { routes, index } = props.navigation.dangerouslyGetState();
    // console.log(routes, index)
    screen = routes[index].name;
    const changeLayout = async () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        await props.authActions.menuModal(!props.user.menuModal);
    }
    const array = [{
        name: "Hub",
        type: "Entypo", iconName: 'gauge'
    },
    {
        name: "Workouts",
        type: "FontAwesome5", iconName: 'fire-alt'
    },
    {
        name: "Nutrition",
        type: "MaterialIcons", iconName: 'dinner-dining'
    },
    {
        name: "Programs",
        type: "FontAwesome5", iconName: 'calendar-alt'
    },
    {
        name: "Calendar",
        type: "FontAwesome5", iconName: 'calendar-day'
    },
    {
        name: "Chat",
        type: "Ionicons", iconName: 'ios-chatbox-ellipses-sharp'
    },
    {
        name: "Financials",
        type: "MaterialCommunityIcons", iconName: 'sack'
    },
    {
        name: "Marketplace",
        type: "MaterialCommunityIcons",
        iconName: 'bookmark'
    },
    {
        name: "Files",
        type: "FontAwesome",
        iconName: 'file-o'

    },
    {
        name: "Forms",
        type: "FontAwesome",
        iconName: 'wpforms'
    },
    {
        name: "Settings",
        type: "FontAwesome",
        iconName: 'gears',
    }]

    const _renderItems = ({ index, item }) => {
        return (
            <TouchableOpacity onPress={async () => { changeLayout(); await props.navigation.replace(item.name) }}
                style={{ alignItems: "center" }}>
                <View style={[styles.flatlistContainer, { backgroundColor: "#544b4c" }]}>
                    <Icon type={item.type} name={item.iconName} style={{ fontSize: 20, color: 'white' }} />
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text style={{ fontSize: 12, color: screen == 'Marketplace' || screen == 'Packages' || screen == 'CreditPackages' ? 'white' : 'black' }} >{item.name}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    const renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }


    const truncateString = (str, num) => {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num)
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.9, backgroundColor: screen == 'Marketplace' || screen == 'Packages' || screen == 'CreditPackages' ? '#181818' : 'transparent' }}>
                    {children}
                </View>
                <View style={{ flex: 0.1, flexDirection: "column", backgroundColor: screen == 'Marketplace' || screen == 'Packages' || screen == 'CreditPackages' ? '#181818' : "white", }}>
                    <View style={styles.rowContainer}  >
                        <View>
                            {
                                screen == 'Notifications' ?

                                    <TouchableOpacity onPress={() => props.authActions.notificationModal(true)} style={{ marginHorizontal: "5%", justifyContent: "center", alignItems: "center" }}>
                                        <Icon type="MaterialCommunityIcons" name="bell-off-outline" style={{ fontSize: 35 }} />
                                    </TouchableOpacity>
                                    :
                                    screen == 'CurrentWorkout' ?
                                        props.user.stopwatchModal ?
                                            <TouchableOpacity onPress={() => props.authActions.stopwatchModal(!props.user.stopwatchModal)} style={{ marginHorizontal: "5%", justifyContent: "center", alignItems: "center" }}>
                                                <IconS.FontAwesome name="angle-down" size={35} color="black" />
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={() => props.authActions.stopwatchModal(true)} style={{ marginHorizontal: "5%", justifyContent: "center", alignItems: "center" }}>
                                                <IconS.Fontisto name="stopwatch" size={25} />
                                            </TouchableOpacity>
                                        :
                                        screen == 'Calendar' ?

                                            <TouchableOpacity onPress={() => props.authActions.calenderModal(true)} style={{ marginHorizontal: "5%", justifyContent: "center", alignItems: "center" }}>
                                                <IconS.FontAwesome5 name="user-cog" size={25} />
                                            </TouchableOpacity>
                                            :
                                            null
                            }
                        </View>
                        <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%", height: 30, width: 40 }}>
                            <Icon type="MaterialCommunityIcons" name="dialpad" style={{ fontSize: 40, color: screen == 'Marketplace' || screen == 'Packages' || screen == 'CreditPackages' ? 'white' : 'black' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal isVisible={props.user.menuModal}
                animationInTiming={1000}
                animationOutTiming={1000}
                style={{ margin: 0 }} >
                <View style={{ flex: 1, height: screenHeight, width: screenWidth, backgroundColor: '#fefefe' }}>
                    <View style={{ flex: 0.9, backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR }}>
                        <ScrollView contentContainerStyle={{ flex: 1, }}>
                            <View style={{ flex: 0.5 }}>
                                <View style={{ marginTop: '5%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}  >
                                    <TouchableOpacity onPress={async () => {
                                        await props.authActions.menuModal(!props.user.menuModal)
                                        await props.navigation.navigate("Notifications")
                                    }} style={{ marginHorizontal: "5%" }}>
                                        <Icon type="Fontisto" name="bell-alt" size={25} color="#544b4c" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={async () => {
                                        await props.authActions.menuModal(!props.user.menuModal);
                                        await props.navigation.navigate("Settings")
                                    }} style={{ marginHorizontal: "5%", justifyContent: "center", alignItems: "center", height: 30, width: 30, borderRadius: 15, backgroundColor: "#544b4c" }}>
                                        <Text style={{ color: "white", fontWeight: "bold", textTransform: "capitalize" }} >{truncateString(props.user.userData.firstName, 1)}{truncateString(props.user.userData.lastName, 1)}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.imageContainer, { marginTop: 20 }]}>
                                    <Image style={{ height: 150, width: 150, }}
                                        source={LOGO}
                                        resizeMode='contain' />
                                </View>
                            </View>
                            <View style={[styles.lowerContainer, { backgroundColor: screen == 'Marketplace' || screen == 'Packages' || screen == 'CreditPackages' ? '#181818' : '#fefefe' }]}>
                                <FlatList data={array}
                                    keyExtractor={item => item}
                                    ItemSeparatorComponent={renderSeparator}
                                    numColumns={4}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={styles.contentContainer}
                                    renderItem={({ index, item }) => _renderItems({ index, item })} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flex: 0.1, flexDirection: "column", backgroundColor: screen == 'Marketplace' || screen == 'Packages' || screen == 'CreditPackages' ? '#181818' : "white", }}>
                        <View style={styles.rowContainer}  >
                            <View>


                            </View>
                            <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%", height: 30, width: 40, overflow: "hidden" }}>
                                <Icon type="MaterialCommunityIcons" name="dialpad" style={{ fontSize: 40, color: screen == 'Marketplace' || screen == 'Packages' || screen == 'CreditPackages' ? 'white' : 'black' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={props.user.notificationModal}
                onBackdropPress={() => props.authActions.notificationModal(!props.user.notificationModal)}
                animationInTiming={1000}
                animationOutTiming={1000}
                style={{ justifyContent: 'flex-end', margin: 0 }} >
                <View style={styles.modalLowerContainer}>
                    <View>
                        <Text style={styles.headingTextStyle}>Notifications</Text>
                    </View>
                    <RNBounceable onPress={() => props.navigation.navigate('WorkoutTemplate')} style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "5%", borderRadius: 10, elevation: 1, paddingVertical: "10%", paddingHorizontal: "5%" }}>
                        <Text style={styles.headingStyle}>Mark all as read</Text>
                        <IconS.AntDesign name="right" size={25} color={"lightgray"} />
                    </RNBounceable>
                    <RNBounceable onPress={() => props.navigation.navigate('WorkoutTemplate')} style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "5%", borderRadius: 10, elevation: 1, paddingVertical: "10%", paddingHorizontal: "5%" }}>
                        <Text style={styles.headingStyle}>Clear All</Text>
                        <IconS.AntDesign name="right" size={25} color={"lightgray"} />
                    </RNBounceable>
                </View>
            </Modal>
            <Modal isVisible={props.user.stopwatchModal}
                onBackdropPress={() => props.authActions.stopwatchModal(!props.user.stopwatchModal)}
                animationInTiming={1000}
                animationOutTiming={1000}
                style={{ justifyContent: 'flex-end', margin: 0 }} >
                <View style={styles.modalLowerContainer}>
                    {component?.startTimer ?
                        <>
                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
                                <ProgressBarAnimated
                                    width={screenWidth * 0.9}
                                    height={70}
                                    value={component?.progress * 100 / component?.totalProgress}
                                    backgroundColor={component?.progress * 100 / component?.totalProgress == 100 ? "red" : "#6CC644"}
                                />
                            </View>
                            <View style={{ marginVertical: "5%" }}>
                                <Text style={{ textAlign: "center", fontSize: 30 }}>{moment.utc(component?.myTime * 1000).format('mm:ss')}</Text>
                            </View>
                            {
                                component.pauseTimer ?
                                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                        <RNBounceable onPress={() => { onResetTimer() }} style={{ justifyContent: "center", alignItems: "center" }}>
                                            <View style={{ height: 100, width: 100, borderRadius: 50, borderWidth: 1, borderColor: THEME.PRIMARY_BACKGROUND_COLOR, justifyContent: "center", alignItems: "center" }}>
                                                <Text style={{ color: THEME.PRIMARY_BACKGROUND_COLOR }}>Reset</Text>
                                            </View>
                                        </RNBounceable>
                                        <RNBounceable disabled={component?.selectedMin || component?.selectedSec ? false : true} onPress={() => { component?.myTime == 0 ? onStartTimer() : onAgainStartTimer() }} style={{ justifyContent: "center", alignItems: "center" }}>
                                            <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: component?.selectedMin || component?.selectedMin ? THEME.PRIMARY_BACKGROUND_COLOR : "lightgray", justifyContent: "center", alignItems: "center" }}>
                                                <Text>Start</Text>
                                            </View>
                                        </RNBounceable>
                                    </View>
                                    :
                                    <RNBounceable onPress={() => onPauseTimer()} style={{ justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR, justifyContent: "center", alignItems: "center" }}>
                                            <Text>Pause</Text>
                                        </View>
                                    </RNBounceable>

                            }
                        </>
                        :
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingBottom: "15%" }}>
                            <DropDownPicker
                                items={component?.minutes}
                                arrowColor="#000000"
                                placeholder="00 min"
                                activeLabelStyle={{ color: "white", fontWeight: "bold" }}
                                activeItemStyle={{ backgroundColor: '#544b4c' }}
                                dropDownStyle={{ paddingHorizontal: 0 }}
                                itemStyle={{ justifyContent: 'flex-start', paddingHorizontal: "5%" }}
                                containerStyle={{ height: 40, width: "45%", }}
                                defaultValue={component?.selectedMin ? component?.selectedMin?.label : ""}
                                onChangeItem={(item) => { selectedMinF(item) }} />
                            <DropDownPicker
                                items={component?.second}
                                arrowColor="#000000"
                                placeholder="00 sec"
                                activeLabelStyle={{ color: "white", fontWeight: "bold" }}
                                activeItemStyle={{ backgroundColor: '#544b4c' }}
                                dropDownStyle={{ paddingHorizontal: 0 }}
                                itemStyle={{ justifyContent: 'flex-start', paddingHorizontal: "5%" }}
                                containerStyle={{ height: 40, width: "45%", }}
                                defaultValue={component?.selectedSec ? component?.selectedSec?.label : ""}
                                onChangeItem={(item) => { selectedSecF(item) }} />
                        </View>}
                    {component?.startTimer ?
                        null :
                        < RNBounceable disabled={component?.selectedMin.value || component?.selectedSec.value ? false : true} onPress={() => onStartTimer()} style={{ justifyContent: "center", alignItems: "center" }}>
                            <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: component?.selectedMin.value || component?.selectedSec.value ? THEME.PRIMARY_BACKGROUND_COLOR : "lightgray", justifyContent: "center", alignItems: "center" }}>
                                <Text>Start</Text>
                            </View>
                        </RNBounceable>}
                </View>
            </Modal>

        </>
    )
};

export default Container;
