import React, { Component } from 'react'
import {
    View, Text, FlatList, ScrollView, RefreshControl
} from 'react-native'

import RNBounceable from "@freakycoder/react-native-bounceable";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import moment from "moment"

import { authActions } from '../../redux/actions/auth';
import { Icon, Container } from "../../components";

import styles from './style';
import { ActivitiesServices } from '../../services';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: [], loading: false
        }
    }

    componentDidMount = () => {
        const { userData } = this.props.user;
        this.setState({ loading: true })
        ActivitiesServices.getAllNotification(userData.token, userData.userId)
            .then((response) => { this.setState({ notification: response.data, loading: false, isRefreshing: false }) })
            .catch((err) => console.log(err))

    }

    truncateString = (str, num) => {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num)
    }

    _renderItems = ({ index, item }) => {
        const { firstName, lastName } = this.props.user.userData;
        return (
            <RNBounceable style={styles.itemContainer} onPress={() => { }}>
                <View style={styles.user_nameContainer}>
                    <Text style={styles.user_nameText}>{this.truncateString(firstName, 1)}{this.truncateString(lastName, 1)}</Text>
                </View>
                <View style={styles.itemTypeContainer}>

                    <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.notificationDescription}</Text>
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
                                refreshControl={
                                    <RefreshControl refreshing={this.state.loading} onRefresh={() => this.componentDidMount()} />
                                }
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
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);