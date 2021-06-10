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

class Programs extends Component {
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



    render() {
        const { workout, reportModal, issue } = this.state;
        const totalItemWidth = Dimensions.get('window').width - 140;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{"Programs"}</Text>
                    </View>
                    <View style={styles.lowerContentContainer}>
                        <View style={styles.rowContainer} >
                            <Text style={styles.recentStyle}>Recent</Text>
                            <RNBounceable onPress={() => this.props.navigation.navigate('ProgramLibrary')} style={styles.row}>
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
                                    <RNBounceable style={styles.contentContainer} onPress={() => { }}>
                                        <View style={styles.boxView}>
                                            <Text></Text>
                                        </View>
                                        <View style={{ flex: 0.8, marginHorizontal: "5%" }}>
                                            <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.type}</Text>
                                        </View>
                                    </RNBounceable>
                                )
                            }}

                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Programs);