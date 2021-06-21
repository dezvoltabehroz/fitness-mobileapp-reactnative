import React, { Component } from 'react'
import {
    View, Text, ScrollView
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

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: true,
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
                id: 1,
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




    render() {
        const { data, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.generalMargin}>
                            <Text style={styles.headingTextStyle}>Push Notifications</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Session Booked</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Session Edited</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Session Cancellation Requests</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Session Cancelled</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Scheduled AM Workout Reminder</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Scheduled PM Workout Reminder</Text>
                            <ToggleSwitch
                                isOn={true}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Reminder to log nutrition</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Reminder to update measurement</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Reminder to update progress photo</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>New schedule</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.headingTextStyle}>Email Notifications</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Session Booked</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Notification Frequency</Text>
                            <DropDownPicker
                                items={data}
                                arrowColor="#000000"
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen1: false })}
                                onOpen={() => this.setState({ dropdownOpen1: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen1 ? '50%' : 0 }}
                                defaultValue={this.state.selectedValue ? this.state.selectedValue.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedValue: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Session Edited</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Notification Frequency</Text>
                            <DropDownPicker
                                items={data}
                                arrowColor="#000000"
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen2: false })}
                                onOpen={() => this.setState({ dropdownOpen2: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen2 ? '50%' : 0 }}
                                defaultValue={this.state.selectedValue ? this.state.selectedValue.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedValue: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Session Cancellation</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Notification Frequency</Text>
                            <DropDownPicker
                                items={data}
                                arrowColor="#000000"
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen3: false })}
                                onOpen={() => this.setState({ dropdownOpen3: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen3 ? '50%' : 0 }}
                                defaultValue={this.state.selectedValue ? this.state.selectedValue.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedValue: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Purcahse Package</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}

                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Notification Frequency</Text>
                            <DropDownPicker
                                items={data}
                                arrowColor="#000000"
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen4: false })}
                                onOpen={() => this.setState({ dropdownOpen4: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen4 ? '50%' : 0 }}
                                defaultValue={this.state.selectedValue ? this.state.selectedValue.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedValue: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Package Expired</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Notification Frequency</Text>
                            <DropDownPicker
                                items={data}
                                arrowColor="#000000"
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen5: false })}
                                onOpen={() => this.setState({ dropdownOpen5: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen5 ? '50%' : 0 }}
                                defaultValue={this.state.selectedValue ? this.state.selectedValue.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedValue: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textStyle}>Package Low Session Remaining</Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                                offColor={THEME.COLOR_LIGHT_GRAY}
                                label=""
                                labelStyle={styles.labelStyle}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Notification Frequency</Text>
                            <DropDownPicker
                                items={data}
                                arrowColor="#000000"
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen6: false })}
                                onOpen={() => this.setState({ dropdownOpen6: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen6 ? '50%' : 0 }}
                                defaultValue={this.state.selectedValue ? this.state.selectedValue.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedValue: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button.BrownButton title="Update Notification" onPress={() => this.props.navigation.replace('Home')} />
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