import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Container, Icon } from '../../components';
import { authActions } from '../../redux/actions/auth';
import RNBounceable from '@freakycoder/react-native-bounceable';

import styles from './style';

const testIDs = require('../../config/testIDs');

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 100,
            filterModal: false,
            items: {}
        }
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {
                newItems[key] = this.state.items[key];
            });
            this.setState({
                items: newItems
            });
        }, 1000);
    }

    renderItem(item) {
        return (
            <TouchableOpacity
                testID={testIDs.agenda.ITEM}
                style={[styles.item, { height: item.height }]}
                onPress={() => Alert.alert(item.name)}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    render() {
        const { progress, reportModal, issue, filterModal } = this.state;
        return (
            <>
                <Container props={this.props}>
                    <View style={styles.container}>
                        <View style={styles.upperContainer}>
                            <Text style={styles.headingStyle}>{"Calendar"}</Text>
                        </View>
                        <View style={styles.lowerContentContainer}>
                            <Agenda
                                testID={testIDs.agenda.CONTAINER}
                                items={this.state.items}
                                loadItemsForMonth={this.loadItems.bind(this)}
                                selected={'2021-06-14'}
                                renderItem={this.renderItem.bind(this)}
                                renderEmptyDate={this.renderEmptyDate.bind(this)}
                                rowHasChanged={this.rowHasChanged.bind(this)}
                            />
                        </View>
                    </View>
                </Container>
                <Modal isVisible={this.props.user.calenderModal}
                    onBackdropPress={() => this.props.authActions.calenderModal(!this.props.user.calenderModal)}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    style={{ justifyContent: 'flex-end', margin: 0 }} >
                    <View style={styles.modalLowerContainer}>
                        <View style={{ marginTop: "5%" }}>
                            <Text style={styles.headingTextStyle}>Company Calendar</Text>
                        </View>
                        <RNBounceable onPress={() => this.props.authActions.calenderModal(!this.props.user.calenderModal)} style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.backContainer}>
                                    <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={20} color={"white"} />
                                </View>
                                <Text style={[styles.headingTextStyle, { marginLeft: 10 }]}>Clear All</Text>
                            </View>
                            <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={25} color={"lightgray"} />
                        </RNBounceable>
                        <View style={{ marginTop: "5%" }}>
                            <Text style={styles.headingTextStyle}>My Calendar</Text>
                        </View>
                        <RNBounceable onPress={() => this.props.authActions.calenderModal(!this.props.user.calenderModal)} style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.backContainer}>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }} >T</Text>
                                </View>
                                <Text style={[styles.headingTextStyle, { marginLeft: 10 }]}>Clear All</Text>
                            </View>
                            <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={25} color={"lightgray"} />
                        </RNBounceable>
                        <View style={{ marginTop: "5%" }}>
                            <Text style={styles.headingTextStyle}>Trainer Calendar</Text>
                        </View>
                        <RNBounceable onPress={() => this.props.authActions.calenderModal(!this.props.user.calenderModal)} style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image source={require('../../assets/images/logo.png')} style={{ height: 45, width: 40 }} />
                                <Text style={[styles.headingTextStyle, { marginLeft: 10 }]}>Clear All</Text>
                            </View>
                            <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={25} color={"lightgray"} />
                        </RNBounceable>
                    </View>
                </Modal>

            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
