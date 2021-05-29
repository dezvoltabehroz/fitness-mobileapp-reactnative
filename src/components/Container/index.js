import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, Image, Dimensions, FlatList } from 'react-native';
import { Icon } from '../index';
import THEME from '../../assets/styles/theme.style';
import Modal from 'react-native-modal';
import styles from './style';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Container = ({ children, props }) => {

    const array = [{
        name: "Hub",
        iconName: <Icon.Entypo name={'gauge'} size={20} color='white' />,
    },
    {
        name: "Workouts",
        iconName: <Icon.FontAwesome5 name={'fire-alt'} size={20} color='white' />,
    },
    {
        name: "Nutrition",
        iconName: <Icon.MaterialIcons name={'dinner-dining'} size={25} color='white' />,
    },
    {
        name: "Programs",
        iconName: <Icon.FontAwesome5 name={'calendar-alt'} size={20} color='white' />,
    },
    {
        name: "Calendar",
        iconName: <Icon.FontAwesome5 name={'calendar-day'} size={20} color='white' />,
    },
    {
        name: "Chat",
        iconName: <Icon.Ionicons name={'ios-chatbox-ellipses-sharp'} size={20} color='white' />,
    },
    {
        name: "Financials",
        iconName: <Icon.MaterialCommunityIcons name={'sack'} size={25} color='white' />,
    },
    {
        name: "Marketplace",
        iconName: <Icon.MaterialCommunityIcons name={'bookmark'} size={25} color='white' />,
    },
    {
        name: "Files",
        iconName: <Icon.FontAwesome name={'file-o'} size={20} color='white' />,

    },
    {
        name: "Forms",
        iconName: <Icon.FontAwesome name={'wpforms'} size={20} color='white' />,
    },
    {
        name: "Settings",
        iconName: <Icon.FontAwesome name={'gears'} size={20} color='white' />,
    }]

    const _renderItems = ({ index, item }) => {
        return (
            <TouchableOpacity onPress={async () => {
                await props.authActions.menuModal(!props.user.menuModal);
                await props.navigation.replace(item.name)
            }}
                style={{ alignItems: "center" }}>
                <View onPress={() => {
                }} style={[styles.flatlistContainer, { backgroundColor: "#544b4c" }]}>
                    {item.iconName}
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

                        </View>
                        <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%", height: 30, width: 40 }}>
                            <Icon.MaterialCommunityIcons name="dialpad" size={40} />
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
                                    <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%" }}>
                                        <Icon.Fontisto name="bell-alt" size={25} color="#544b4c" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%", justifyContent: "center", alignItems: "center", height: 30, width: 30, borderRadius: 15, backgroundColor: "#544b4c" }}>
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
                            <TouchableOpacity onPress={() => props.authActions.menuModal(!props.user.menuModal)} style={{ marginHorizontal: "5%", height: 30, width: 40 }}>
                                <Icon.MaterialCommunityIcons name="dialpad" size={40} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
};

export default Container;
