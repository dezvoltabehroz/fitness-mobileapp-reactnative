import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, LayoutAnimation,
    UIManager, TouchableOpacity, ScrollView, Animated, RefreshControl, Linking, Easing, Dimensions
} from 'react-native'
import { Icon, Button, FloatingInput, MessageTextInput, Container, OutlineButton } from "../../components";
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

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: [
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
            <RNBounceable style={{ flex: 1, flexDirection: "row", marginHorizontal: "5%" }} onPress={() => { }}>
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
        const { notification, reportModal, issue } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{"Notifications"}</Text>
                    </View>

                    <View style={styles.lowerContentContainer}>
                        <ScrollView style={{ paddingTop:40,paddingBottom:120 }}>
                            <FlatList
                                data={notification}
                                keyExtractor={item => item}
                                style={{ marginBottom: 100 }}
                                ItemSeparatorComponent={this.renderSeparator}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ index, item }) => this._renderItems({ index, item })}

                            />
                        </ScrollView>

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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);