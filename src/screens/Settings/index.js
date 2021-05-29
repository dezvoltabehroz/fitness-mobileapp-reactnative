import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, LayoutAnimation,
    UIManager, TouchableOpacity, ScrollView, Animated, RefreshControl, Linking, Easing, Dimensions
} from 'react-native'
import { Icon, Button, FloatingInput, MessageTextInput, Container } from "../../components";
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
            expandedFeature: false
        }
        this.data = this.state.activityArr
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



    render() {
        const { currentPage, reportModal, issue } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{"Settings"}</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.upperContentContainer}>
                            <RNBounceable
                                onPress={() => this.props.authActions.menuModal(!this.props.user.menuModal)}
                                style={{
                                    justifyContent: "center", alignItems: "center", height: 100, width: 100, borderRadius: 50, backgroundColor: "#544b4c", alignContent: "flex-end"
                                }}>
                                <Text style={[styles.headingStyle, { color: "white", fontWeight: "bold" }]} >T</Text>
                            </RNBounceable>
                            <View>
                                <Text style={styles.titleStyle}>{"Taimoor Tariq"}</Text>
                                <Text style={styles.emailStyle}>{"Taimoornu@gmail.com"}</Text>
                            </View>
                        </View>
                        <View style={styles.lowerContentContainer}>

                            <View style={styles.activities_container}>
                                <RNBounceable activeOpacity={0.8} onPress={this.changeGeneralLayout}>
                                    <View style={styles.country_container}>
                                        <View style={styles.rowContainer}>
                                            <Icon.Octicons name="gear" size={35} />
                                            <Text style={styles.text_panel_heading}>General</Text>
                                        </View>

                                        {this.state.expandedGeneral &&
                                            <Icon.AntDesign name="up" size={25} />
                                        }
                                        {!this.state.expandedGeneral &&
                                            <Icon.AntDesign name="down" size={25} color={"lightgray"} />
                                        }
                                    </View>
                                </RNBounceable>
                                <View style={[{ height: this.state.expandedGeneral ? null : 0 }, styles.columnStyle]}>
                                    <RNBounceable onPress={() => this.props.navigation.navigate('MyDetails')} style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>My Detail</Text>
                                        <Icon.AntDesign name="right" size={25} color={"lightgray"} />
                                    </RNBounceable>
                                </View>
                            </View>
                            <View style={styles.activities_container}>
                                <RNBounceable activeOpacity={0.8} onPress={this.changeCustomisationLayout}>
                                    <View style={styles.country_container}>
                                        <View style={styles.rowContainer}>
                                            <Icon.FontAwesome name="star" size={35} />
                                            <Text style={styles.text_panel_heading}>Customisation</Text>
                                        </View>

                                        {this.state.expandedCustomisation &&
                                            <Icon.AntDesign name="up" size={25} />
                                        }
                                        {!this.state.expandedCustomisation &&
                                            <Icon.AntDesign name="down" size={25} color={"lightgray"} />
                                        }
                                    </View>
                                </RNBounceable>
                                <View style={[{ height: this.state.expandedCustomisation ? null : 0 }, styles.columnStyle]}>
                                    <View style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>Sync Brading</Text>
                                        <Icon.AntDesign name="right" size={25} color={"lightgray"} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.activities_container}>
                                <RNBounceable activeOpacity={0.8} onPress={this.changeFeatureSettingLayout}>
                                    <View style={styles.country_container}>
                                        <View style={styles.rowContainer}>
                                            <Icon.FontAwesome5 name="bell" size={35} />
                                            <Text style={styles.text_panel_heading}>Feature Settings</Text>
                                        </View>

                                        {this.state.expandedFeature &&
                                            <Icon.AntDesign name="up" size={25} />
                                        }
                                        {!this.state.expandedFeature &&
                                            <Icon.AntDesign name="down" size={25} color={"lightgray"} />
                                        }
                                    </View>
                                </RNBounceable>
                                <View style={[{ height: this.state.expandedFeature ? null : 0 }, styles.columnStyle]}>
                                    <View style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>Notifications</Text>
                                        <Icon.AntDesign name="right" size={25} color={"lightgray"} />
                                    </View>
                                </View>
                                <View style={[{ height: this.state.expandedFeature ? null : 0 }, styles.columnStyle]}>
                                    <View style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>Integrations</Text>
                                        <Icon.AntDesign name="right" size={25} color={"lightgray"} />
                                    </View>
                                </View>
                                <View style={[{ height: this.state.expandedFeature ? null : 0 }, this.state.expandedFeature ? styles.columnStyle : {}]}>
                                    <View style={styles.country_container_1}>
                                        <Text style={styles.text_panel_heading_1}>Unit of Measurement</Text>
                                        <Icon.AntDesign name="right" size={25} color={"lightgray"} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.activities_container}>
                                <RNBounceable activeOpacity={0.8} onPress={() => this.setState({ reportModal: !reportModal })} >
                                    <View style={styles.country_container}>
                                        <View style={styles.rowContainer}>
                                            <Icon.MaterialIcons name="email" size={35} />
                                            <Text style={styles.text_panel_heading}>Report an Issue</Text>
                                        </View>
                                        <Icon.AntDesign name="right" size={25} color={"lightgray"} />
                                    </View>
                                </RNBounceable>
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
                        <TouchableOpacity
                            onPress={() => this.setState({ reportModal: !reportModal, issue: "" })}
                            style={[styles.loginButton, issue ? {} : { backgroundColor: "lightgray" }]}>
                            <View>
                                <Text style={[styles.loginButtonText, issue ? { color: "black" } : { color: "white" }]}>Send</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);