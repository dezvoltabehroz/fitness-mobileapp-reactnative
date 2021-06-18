import React, { Component } from 'react'
import {
    View, Text, FlatList, ScrollView
} from 'react-native'

import RNBounceable from "@freakycoder/react-native-bounceable";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import moment from "moment"

import { authActions } from '../../redux/actions/auth';
import { Icon, Container } from "../../components";

import styles from './style';

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
            <RNBounceable style={styles.itemContainer} onPress={() => { }}>
                <View style={styles.user_nameContainer}>
                    <Text style={styles.user_nameText}>{item.user_name}</Text>
                </View>
                <View style={styles.itemTypeContainer}>

                    <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.type}</Text>
                    <Text style={styles.fromNowText} >{moment(item.time).fromNow()} </Text>


                </View>
                <View style={styles.iconContainer} >
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
                        <ScrollView style={{ paddingTop: 40, paddingBottom: 120 }}>
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