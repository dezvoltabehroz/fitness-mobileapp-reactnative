import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, LayoutAnimation,
    UIManager, TouchableOpacity, ScrollView, Animated, RefreshControl, Linking, Easing, Dimensions
} from 'react-native'
import { Icon, Button, FloatingInput, MessageTextInput, Container, OutlineButton, SlimButton } from "../../components";
import styles from './style';
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { FlatList } from 'react-native';
import Modal from 'react-native-modal';
import moment from "moment"
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

class Workouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workout: [
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
            ]
        }
    }

    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable onPress={() => this.props.navigation.navigate('WorkoutDetails', { heading: item.type })} style={{ flex: 1, flexDirection: "row", marginHorizontal: "5%" }} onPress={() => { }}>
                <View style={{
                    borderRadius: 30, height: 40, width: 40,
                    justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
                }}>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>{item.user_name}</Text>
                </View>
                <View style={{ flex: 0.8, marginHorizontal: "5%" }}>

                    <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.type}</Text>
                    <Text style={{ color: "gray", fontWeight: "bold", fontSize: 12 }} >{moment(item.time).fromNow()} </Text>


                </View>
                <View style={{ flex: 0.2, justifyContent: "flex-start", alignItems: "flex-end" }} >
                    <Icon.Octicons name="primitive-dot" color="green" size={20} />
                </View>
            </RNBounceable>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }


    render() {
        const { workout, reportModal, issue } = this.state;
        const totalItemWidth = Dimensions.get('window').width - 140;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{"Workouts"}</Text>
                    </View>
                    <View style={styles.lowerContentContainer}>
                        <View style={styles.rowContainer} >
                            <Text style={styles.recentStyle}>Recent</Text>
                            <RNBounceable onPress={() => this.props.navigation.navigate('WorkoutLibrary')} style={styles.row}>
                                <Text style={styles.viewStyle} >View all</Text>
                                <Icon.Entypo name="chevron-small-right" size={20} />
                            </RNBounceable>
                        </View>
                        <FlatList
                            data={workout}
                            contentContainerStyle={{ paddingBottom: 180 }}
                            keyExtractor={item => item}
                            renderItem={({ index, item }) => {
                                return (
                                    <RNBounceable onPressIn={() => { this.props.navigation.navigate('WorkoutDetails', { heading: item.type }) }} style={{ flexDirection: "row", alignItems: "center", marginHorizontal: "5%", elevation: 2, padding: "5%", borderRadius: 10, marginBottom: 10 }} onPress={() => { }}>
                                        <View style={{
                                            borderRadius: 10, height: 50, width: 50,
                                            justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
                                        }}>
                                            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}></Text>
                                        </View>
                                        <View style={{ flex: 0.8, marginHorizontal: "5%" }}>
                                            <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.type}</Text>
                                        </View>
                                    </RNBounceable>
                                )
                            }}

                        />
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <View style={{ position: "absolute", bottom: 40, }}>
                                <SlimButton title={"Start Workout"} onPress={() => { this.props.navigation.navigate('StartWorkout') }} />
                            </View>
                        </View>

                    </View>
                </View>
            </Container >
        )
    }
}
const mapStateToProps = (state) => {

    return {
        user: state.authReducer || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);