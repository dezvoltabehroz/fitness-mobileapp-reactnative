import React from 'react';
import { View, TouchableOpacity, ScrollView, UIManager, LayoutAnimation, Text, Image, Dimensions, FlatList, Platform } from 'react-native';
// import { Icon } from '../index';
import { Icon } from 'native-base'
import THEME from '../../assets/styles/theme.style';
import Modal from 'react-native-modal';
import styles from './style';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Container = ({ children, props }) => {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    let screen = "";
    const { routes, index } = props.navigation.dangerouslyGetState();
    console.log(routes, index)
    screen = routes[index].name;
    const { state: exploreState } = routes[index];
    // console.log(exploreState)
    // if (exploreState) {
    //     const { routes: exploreRoutes, index: exploreIndex } = exploreState;
    //     const exploreActiveRoute = exploreRoutes[exploreIndex];
    //     screen =  routes[index];
    // }
    console.log(screen)
    const changeLayout =async () => {
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
            <TouchableOpacity onPress={async () => {
                changeLayout()
                await props.navigation.replace(item.name)
            }}
                style={{ alignItems: "center" }}>
                <View onPress={() => {
                }} style={[styles.flatlistContainer, { backgroundColor: "#544b4c" }]}>
                    <Icon type={item.type} name={item.iconName} style={{ fontSize: 20, color: 'white' }} />
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text style={{ fontSize: 12 }} >{item.name}</Text>
                </View>
            </TouchableOpacity >

        )
    }


    const renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.9 }}>
                    {children}

                </View>
                <View style={{ flex: 0.1, flexDirection: "column", backgroundColor: "white", }}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}  >
                        <View>
                            {
                                screen == 'Notifications' ?

                                    <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%", justifyContent: "center", alignItems: "center" }}>
                                        <Icon type="MaterialCommunityIcons" name="bell-off-outline" style={{ fontSize: 35 }} />
                                    </TouchableOpacity>
                                    :
                                    null
                            }
                        </View>
                        <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%", height: 30, width: 40 }}>
                            <Icon type="MaterialCommunityIcons" name="dialpad" style={{ fontSize: 40 }} />
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
                                        <Text style={{ color: "white", fontWeight: "bold" }} >T</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.imageContainer, { marginTop: 20 }]}>
                                    <Image style={{ height: 150, width: 150, }}
                                        source={require('../../assets/images/logo.png')}
                                        resizeMode='contain' />
                                </View>
                            </View>
                            <View style={styles.lowerContainer}>
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
                    <View style={{ flex: 0.1, flexDirection: "column", backgroundColor: "white", }}>
                        <View style={{ flex: 1, flexDirection: "row", borderWidth: 1, borderColor: "#f2f2f2", justifyContent: "space-between", alignItems: "center" }}  >
                            <View>


                            </View>
                            <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%", height: 30, width: 40, overflow: "hidden" }}>
                                <Icon type="MaterialCommunityIcons" name="dialpad" style={{ fontSize: 40 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
};

export default Container;
