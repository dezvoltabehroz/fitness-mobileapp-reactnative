import React, { Component } from 'react'
import {
    View, Text, LayoutAnimation,
    UIManager, TouchableOpacity, ScrollView
} from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import Modal from 'react-native-modal';

import { Icon, Button, MessageTextInput, Container, } from "../../components";
import { authActions } from '../../redux/actions/auth';
import { screen } from '../../lib/utils/constants';

import styles from './style';
import { getLocalData, LOCAL_STORAGE_KEYS } from '../../lib/utils/localstorage';

class Setting extends Component {
    constructor(props) {
        super(props);
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = {
            visible: true,
            reportModal: false,
            issue: "",
            expandedGeneral: false,
            expandedCustomisation: false,
            expandedFeature: false,
            email: ""
        }
        this.data = this.state.activityArr
    }

    componentDidMount = async () => {
        let userData = await getLocalData(LOCAL_STORAGE_KEYS.loginDetails)
        let data = JSON.parse(userData);
        this.setState({ email: data.email })
    }

    changeGeneralLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expandedGeneral: !this.state.expandedGeneral });
    }
    changeCustomisationLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expandedCustomisation: !this.state.expandedCustomisation });
    }
    changeFeatureSettingLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expandedFeature: !this.state.expandedFeature });
    }
    truncateString = (str, num) => {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num)
    }

    render() {
        const { currentPage, reportModal, issue, email } = this.state;
        const { firstName, lastName } = this.props.user.userData;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{screen.SCREEN_TITLE_SETTING}</Text>
                    </View>
                    <ScrollView >
                        <View style={styles.upperContentContainer}>
                            <RNBounceable
                                onPress={() => this.props.authActions.menuModal(!this.props.user.menuModal)}
                                style={{
                                    justifyContent: "center", alignItems: "center", height: 100, width: 100, borderRadius: 50, backgroundColor: "#544b4c", alignContent: "flex-end"
                                }}>
                                <Text style={[styles.headingStyle, { color: "white", fontWeight: "bold" }]} >{this.truncateString(firstName, 1)}</Text>
                            </RNBounceable>
                            <View>
                                <Text style={styles.titleStyle}>{firstName} {lastName}</Text>
                                <Text style={styles.emailStyle}>{email}</Text>
                            </View>
                        </View>
                        <View style={styles.lowerContentContainer}>

                            <View style={styles.activities_container}>
                                <RNBounceable activeOpacity={0.8} onPress={this.changeGeneralLayout}>
                                    <View style={styles.country_container}>
                                        <View style={styles.rowContainer}>
                                            <Icon.Octicons name="gear" size={25} />
                                            <Text style={styles.text_panel_heading}>General</Text>
                                        </View>

                                        {this.state.expandedGeneral &&
                                            <Icon.AntDesign name="up" size={15} />
                                        }
                                        {!this.state.expandedGeneral &&
                                            <Icon.AntDesign name="down" size={15} color={"lightgray"} />
                                        }
                                    </View>
                                </RNBounceable>
                                <View style={[{ height: this.state.expandedGeneral ? null : 0 }, styles.columnStyle]}>
                                    <RNBounceable onPress={() => this.props.navigation.navigate('MyDetails')} style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>My Detail</Text>
                                        <Icon.AntDesign name="right" size={15} color={"lightgray"} />
                                    </RNBounceable>
                                </View>
                            </View>
                            <View style={styles.activities_container}>
                                <RNBounceable activeOpacity={0.8} onPress={this.changeCustomisationLayout}>
                                    <View style={styles.country_container}>
                                        <View style={styles.rowContainer}>
                                            <Icon.FontAwesome name="star" size={25} />
                                            <Text style={styles.text_panel_heading}>Customisation</Text>
                                        </View>

                                        {this.state.expandedCustomisation &&
                                            <Icon.AntDesign name="up" size={15} />
                                        }
                                        {!this.state.expandedCustomisation &&
                                            <Icon.AntDesign name="down" size={15} color={"lightgray"} />
                                        }
                                    </View>
                                </RNBounceable>
                                <View style={[{ height: this.state.expandedCustomisation ? null : 0 }, styles.columnStyle]}>
                                    <View style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>Sync Brading</Text>
                                        <Icon.AntDesign name="right" size={15} color={"lightgray"} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.activities_container}>
                                <RNBounceable activeOpacity={0.8} onPress={this.changeFeatureSettingLayout}>
                                    <View style={styles.country_container}>
                                        <View style={styles.rowContainer}>
                                            <Icon.FontAwesome5 name="bell" size={25} />
                                            <Text style={styles.text_panel_heading}>Feature Settings</Text>
                                        </View>

                                        {this.state.expandedFeature &&
                                            <Icon.AntDesign name="up" size={15} />
                                        }
                                        {!this.state.expandedFeature &&
                                            <Icon.AntDesign name="down" size={15} color={"lightgray"} />
                                        }
                                    </View>
                                </RNBounceable>
                                <View style={[{ height: this.state.expandedFeature ? null : 0 }, styles.columnStyle]}>
                                    <RNBounceable onPress={() => this.props.navigation.navigate('UpdateNotificationSettings')} style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>Notifications</Text>
                                        <Icon.AntDesign name="right" size={15} color={"lightgray"} />
                                    </RNBounceable>
                                </View>
                                <View style={[{ height: this.state.expandedFeature ? null : 0 }, styles.columnStyle]}>
                                    <RNBounceable onPress={() => this.props.navigation.navigate('Integrations')} style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>Integrations</Text>
                                        <Icon.AntDesign name="right" size={15} color={"lightgray"} />
                                    </RNBounceable>
                                </View>
                                <View style={[{ height: this.state.expandedFeature ? null : 0 }, this.state.expandedFeature ? styles.columnStyle : {}]}>
                                    <RNBounceable onPress={() => this.props.navigation.navigate('UnitMeasurement')} style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>Unit of Measurement</Text>
                                        <Icon.AntDesign name="right" size={15} color={"lightgray"} />
                                    </RNBounceable>
                                </View>
                            </View>
                            <View style={styles.activities_container}>
                                <RNBounceable activeOpacity={0.8} onPress={() => this.setState({ reportModal: !reportModal })} >
                                    <View style={styles.country_container}>
                                        <View style={styles.rowContainer}>
                                            <Icon.MaterialIcons name="email" size={25} />
                                            <Text style={styles.text_panel_heading}>Report an Issue</Text>
                                        </View>
                                        <Icon.AntDesign name="right" size={15} color={"lightgray"} />
                                    </View>
                                </RNBounceable>
                            </View>

                        </View>
                        <View style={{ backgroundColor: "white", paddingTop: "10%" }}>

                            <View style={styles.buttonContainer}>
                                <Button.OutlineButton title="Log Out" onPress={() => this.props.authActions.removeUser(this.props.navigation.replace)} />
                            </View>

                            <View style={{}}>
                                <Text style={{ marginVertical: "5%", textAlign: "center", color: "lightgray" }} >v1.11.5(v43)</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Modal isVisible={reportModal}>
                    <View style={styles.modalContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={styles.textStyle}>Sorry to hear you are having trouble!</Text>
                            <TouchableOpacity onPress={() => this.setState({ reportModal: !reportModal, issue: "" })}>
                                <Icon.AntDesign name="close" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <MessageTextInput value={issue} onChangeText={(val) => this.setState({ issue: val })} label="Please describe the issue you are having" />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button.LoginButton disabled={issue ? false : true} title="Send" onPress={() => this.setState({ reportModal: !reportModal, issue: "" })} />
                        </View>
                    </View>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);