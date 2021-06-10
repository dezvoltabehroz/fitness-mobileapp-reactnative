import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, Dimensions, ScrollView, TouchableOpacity, Alert
} from 'react-native'
import { Container, Icon, BrownButton, Input } from "../../components";
import styles from './style';
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
import THEME from '../../assets/styles/theme.style'
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import RNBounceable from '@freakycoder/react-native-bounceable';
// import { Input } from '../../components/Input/Input.component';
class CurrentWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            side: "",
            back: "",
            searchModal: false,
            distance: [{
                id: 1,
                label: "Km",
                value: "Km"
            },
            {
                id: 2,
                label: "Miles",
                value: "Miles"
            }],
        }
    }

    componentDidMount = () => {
        console.log(" this.props.route", this.props.navigation)
    }

    handleAlert = () => {
        Alert.alert(
            `Are you sure?`,
            'Please confirm that you want to quit this session - Any data logged during the session will be cleared ',
            [
                {
                    text: 'CANCEL'
                },
                {
                    text: 'QUIT SESSion',
                    onPress: () => { }
                }
            ]
        )
    }

    render() {
        const { currentPage, searchModal, distance } = this.state;
        return (
            <>
                <Container props={this.props}>
                    <StatusBar backgroundColor={this.props.user.menuModal ? THEME.PRIMARY_BACKGROUND_COLOR : "#181818"} barStyle={"light-content"} />
                    <View style={styles.container}>
                        <View style={{ flex: 0.7, marginTop: "12.5%" }}>
                            <TouchableOpacity onPress={() => this.setState({ searchModal: true })} style={{ borderWidth: 1, marginHorizontal: "20%", borderColor: "#544b4c", alignItems: "center", justifyContent: "center", borderRadius: 35, height: 54 }}>
                                <Text style={styles.textStyle}>Add Exercise</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleAlert()} style={{ margin: "10%", }}>
                                <Text style={styles.textStyle2}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Container>
                <Modal style={{
                    // shadowOpacity: 1,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    justifyContent: 'flex-end',
                    margin: 0,
                }} isVisible={searchModal} onBackdropPress={() => this.setState({ searchModal: false })} >
                    <View style={{ bottom: "5%" }}>
                        <Text style={{ fontSize: 35, marginHorizontal: "5%", color: "white", fontWeight: "bold" }}>Search Exercise</Text>
                        <View style={{ flexDirection: "row", marginTop: "10%", marginHorizontal: "5%", justifyContent: "space-between", alignItems: "center" }}>
                            <RNBounceable onPressIn={() => this.setState({ currentPage: 0 })} style={[styles.rowContainer, { backgroundColor: currentPage == 0 ? "white" : "transparent" }]}>
                                <Icon.Feather name="search" size={20} color={currentPage == 0 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 0 ? 'black' : 'white' }]}>Search</Text>
                            </RNBounceable>
                            <RNBounceable onPressIn={() => this.setState({ currentPage: 1 })} style={[styles.rowContainer, { backgroundColor: currentPage == 1 ? "white" : "transparent" }]}>
                                <Icon.MaterialCommunityIcons name="weight-lifter" size={20} color={currentPage == 1 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 1 ? 'black' : 'white' }]}>Body Part</Text>
                            </RNBounceable>
                            <RNBounceable onPressIn={() => this.setState({ currentPage: 2 })} style={[styles.rowContainer, { backgroundColor: currentPage == 2 ? "white" : "transparent" }]}>
                                <Icon.Entypo name="back-in-time" size={20} color={currentPage == 2 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 2 ? 'black' : 'white' }]}>Recent</Text>
                            </RNBounceable>
                        </View>
                    </View>

                    <View style={{
                        flex: 0.8,
                        flexDirection: "column",
                        backgroundColor: "white",
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                    }}>
                        {
                            currentPage == 0 ?
                                <View style={{ flex: 1 }}>
                                    <View style={{ alignItems: "center", flex: 0.7 }}>
                                        <View style={styles.iconContainer}>
                                            <Icon.FontAwesome5 name="running" size={30} color={"white"} />
                                        </View>
                                        <View style={{ marginTop: "5%" }}>
                                            <Text style={styles.textStyle3}>No Results</Text>
                                        </View>
                                        <View style={{ marginTop: "5%", marginHorizontal: "10%" }}>
                                            <Text style={styles.textStyle1}>We can't find any exercise with these parameters</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                        <View style={{ flex: 0.7, paddingLeft: "5%", paddingTop: "7.5%", justifyContent: "flex-end" }}>
                                            <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                                        </View>
                                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "flex-end" }}>
                                            <BrownButton title="Save" onPress={() => { }} />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }
                        {
                            currentPage == 1 ?
                                <View style={{ flex: 1 }}>
                                    {/* <View style={{ alignItems: "center", flex: 0.9 }}>
                                        <View style={styles.iconContainer}>
                                            <Icon.MaterialCommunityIcons name="file" size={30} color={"white"} />
                                        </View>
                                        <View style={{ marginTop: "5%" }}>
                                            <Text style={styles.textStyle3}>Nothing to see here?</Text>
                                        </View>
                                        <View style={{ marginTop: "5%" }}>
                                            <Text style={styles.textStyle1}>No files assigned yet</Text>
                                        </View>
                                    </View> */}
                                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                        <View style={{ flex: 0.7, paddingLeft: "5%", paddingTop: "7.5%", justifyContent: "flex-end" }}>
                                            <DropDownPicker
                                                items={distance}
                                                arrowColor="#000000"
                                                placeholder="Select Value"
                                                activeLabelStyle={{
                                                    color: "white",
                                                    fontWeight: "bold"
                                                }}
                                                activeItemStyle={{
                                                    backgroundColor: '#544b4c',
                                                }}
                                                dropDownStyle={{
                                                    paddingHorizontal: 0
                                                }}
                                                itemStyle={{
                                                    justifyContent: 'flex-start',
                                                    paddingHorizontal: "5%",
                                                }}
                                                onClose={() => this.setState({ dropdownOpen5: false })}
                                                onOpen={() => this.setState({ dropdownOpen5: true })}
                                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen5 ? 100 : 10 }}
                                                defaultValue={this.state.selectedDistance ? this.state.selectedDistance.label : ""}
                                                onChangeItem={(item) => {
                                                    this.setState({
                                                        selectedDistance: item, item: item.value, index: item.value,
                                                    })
                                                }}
                                            />
                                        </View>
                                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "flex-end" }}>
                                            <BrownButton title="Save" onPress={() => { }} />
                                        </View>
                                    </View>

                                </View>
                                :
                                null
                        }
                        {
                            currentPage == 2 ?
                                <View style={{ flex: 1 }}>
                                    <View style={{ alignItems: "center", flex: 0.7 }}>
                                        <View style={styles.iconContainer}>
                                            <Icon.FontAwesome5 name="running" size={30} color={"white"} />
                                        </View>
                                        <View style={{ marginTop: "5%" }}>
                                            <Text style={styles.textStyle3}>No Recent Exercises</Text>
                                        </View>
                                        <View style={{ marginTop: "5%", marginHorizontal: "10%" }}>
                                            <Text style={styles.textStyle1}>Looks like you haven't used any exercises yet!</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                        <View style={{ flex: 0.7, paddingLeft: "5%", paddingTop: "7.5%", justifyContent: "flex-end" }}>
                                            {/* <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} /> */}
                                        </View>
                                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "flex-end" }}>
                                            <BrownButton title="Save" onPress={() => { }} />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }

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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWorkout);