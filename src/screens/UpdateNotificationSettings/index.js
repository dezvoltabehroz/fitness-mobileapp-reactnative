import React, { Component } from 'react'
import {
    View, Text, ScrollView, FlatList, Alert
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import ToggleSwitch from 'toggle-switch-react-native'
import { StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Container, Button } from "../../components";
import { authActions } from '../../redux/actions/auth';

import THEME from '../../assets/styles/theme.style'
import styles from './style';
import { ActivitiesServices } from '../../services';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: true,
            notifications: [],
            selectedValue: [
                {

                }
            ],
            data: [{
                id: 1,
                label: "Immediate",
                value: "Immediate"
            },
            {
                id: 2,
                label: "Hourly",
                value: "Hourly"
            },
            {
                id: 3,
                label: "Daily",
                value: "Daily"
            },
            {
                id: 4,
                label: "Off",
                value: "Off"
            }]
        }

    }

    componentDidMount = () => {
        ActivitiesServices.getUsersNotificationPriority(this.props.user.userData.token, this.props.user.userData.userId)
            .then((res) => {
                console.log(res.data);
                let array = [...res.data];
                array.map((item, index) => {
                    if (item.notificationFrequencyId != 0) {
                        array[index] = { ...array[index], dropdownOpen: false }
                    }
                })
                this.setState({ notifications: array })
            })
            .catch((err) => console.log(err.response))
    }

    handleStateValues = async (data) => {
        console.log(data)
        await this.setState({ notifications: data }, () => console.log(this.state.notifications))
    }


    _renderItems = (index, item) => {
        return (
            <>
                {index == 0 ?
                    <View style={styles.generalMargin}>
                        <Text style={styles.headingTextStyle}>{item.notificationTypeName}</Text>
                    </View>
                    :
                    index == 9 ?
                        <View style={styles.generalMargin}>
                            <Text style={styles.headingTextStyle}>{item.notificationTypeName}</Text>
                        </View>
                        :
                        null
                }
                {
                    item.notificationFrequencyId != 0 ?
                        <>
                            <View style={styles.rowContainer}>
                                <Text style={styles.textStyle}>{item.notificationName}</Text>
                                <ToggleSwitch
                                    isOn={item.isAllowed}
                                    onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                    offColor={THEME.COLOR_LIGHT_GRAY}
                                    label=""
                                    labelStyle={styles.labelStyle}
                                    size="medium"
                                    onToggle={isOn => {
                                        let array = [...this.state.notifications];
                                        array[index] = { ...array[index], isAllowed: isOn }
                                        this.setState({ notifications: array })
                                    }}
                                />
                            </View>
                            <View style={styles.generalMargin}>
                                <Text style={styles.notiText}>Notification Frequency</Text>
                                <DropDownPicker
                                    items={this.state.data}
                                    arrowColor="#000000"
                                    placeholder="Select Value"
                                    // onClose={() => {
                                    //     let array = [...this.state.notifications];
                                    //     array[index] = { ...array[index], dropdownOpen: false }
                                    //     this.setState({ notifications: array })
                                    // }}
                                    onOpen={() => {
                                        let array = [...this.state.notifications];
                                        array[index] = { ...array[index], dropdownOpen: true }
                                        this.setState({ notifications: array })
                                    }}
                                    containerStyle={{ height: 40, marginBottom: item.dropdownOpen ? '50%' : 0 }}
                                    defaultValue={item.frequency ? item.frequency : ""}
                                    onChangeItem={(itemData) => {
                                        console.log(itemData)
                                        let array = [...this.state.notifications];
                                        array[index] = { ...array[index], notificationFrequencyId: itemData.id, frequency: itemData.value, dropdownOpen: false }
                                        console.log(array)
                                        this.setState({ notifications: array })
                                        console.log("after updating : ", this.state.notifications)
                                        this.handleStateValues(array);
                                    }}
                                />
                            </View>
                        </>
                        :
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>{item.notificationName}</Text>
                            <ToggleSwitch
                                isOn={item.isAllowed}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => {
                                    let array = [...this.state.notifications];
                                    array[index] = { ...array[index], isAllowed: isOn }


                                }}
                            />
                        </View>
                }
            </>
        )
    }

    handleUpdateNotification = () => {
        const { notifications } = this.state;
        this.setState({ btnLoading: true })
        console.log("before updating : ", this.state.notifications)
        console.log("before updating : ", notifications)
        ActivitiesServices.updateUsersNotificationPriority(notifications, this.props.user.userData.token, this.props.user.userData.userId)
            .then((res) => {
                console.log(res.data)
                this.setState({ btnLoading: false })
                this.props.navigation.goBack();
            })
            .catch((err) => { this.setState({ btnLoading: false }); Alert.alert(err?.response?.data?.responseMessage); console.log(err.response) })
    }


    render() {
        const { data, selectedValue, notifications } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <ScrollView>
                    <View style={styles.container}>
                        <FlatList
                            data={notifications}
                            keyExtractor={item => item}
                            style={{ marginBottom: 100, paddingBottom: 20 }}
                            ItemSeparatorComponent={this.renderSeparator}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ index, item }) => this._renderItems(index, item)}
                        />
                        <View style={styles.buttonContainer}>
                            <Button.BrownButton title="Update Notification" onPress={() => this.handleUpdateNotification()} />
                        </View>
                    </View>
                </ScrollView>
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