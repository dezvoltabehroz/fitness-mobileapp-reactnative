import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Icon, Container } from "../../components";

import styles from './style';
import themeStyle from '../../assets/styles/theme.style';

const { width, height } = Dimensions.get('window');

class Financials extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            currentPage: 0,
            currentPackage: 0,
            currentSession: 0,
            currentCredit: 0
        }
    }

    componentDidMount = async () => {
        let userToken = await AsyncStorage.getItem('Email')
        if (userToken) {
            let data = JSON.parse(userToken);
            this.setState({ email: data.email, password: data.password })
        }
    }

    setSliderPage = (event: any) => {
        const { currentPage } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor((width)));
        if (indexOfNextScreen !== currentPage) {
            this.setState({
                currentPage: indexOfNextScreen,
            });
        }
    };
    setSliderPage1 = (event: any) => {
        const { currentPackage } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor((width)));
        if (indexOfNextScreen !== currentPackage) {
            this.setState({
                currentPackage: indexOfNextScreen,
            });
        }
    };
    setSliderPage2 = (event: any) => {
        const { currentSession } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor((width)));
        if (indexOfNextScreen !== currentSession) {
            this.setState({
                currentSession: indexOfNextScreen,
            });
        }
    };
    setSliderPage3 = (event: any) => {
        const { currentCredit } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor((width)));
        if (indexOfNextScreen !== currentCredit) {
            this.setState({
                currentCredit: indexOfNextScreen,
            });
        }
    };

    handlePress = (index) => {
        console.log("press")
        let array = [...this.state.templates]
        for (let i = 0; i < array.length; i++) {
            array[i] = { ...array[i], selected: false };
        }
        console.log(array)
        array[index] = { ...array[index], selected: true };
        console.log(array)
        this.setState({ templates: array })
    }


    render() {
        const { currentPage, currentPackage, currentCredit, currentSession } = this.state;
        return (
            <Container props={this.props} >
                <StatusBar backgroundColor={themeStyle.PRIMARY_BACKGROUND_COLOR} barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingTextStyle}>{"Financials"}</Text>
                    </View>
                    <View style={styles.lowerContentContainer}>
                        <View style={styles.upperContentContainer}>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#C0C0C0", textDecorationLine: currentPage == 0 ? "underline" : "none" }]}>{"Packages"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#C0C0C0", textDecorationLine: currentPage == 1 ? "underline" : "none" }]}>{"Sessions"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 2 }); this.scroll.scrollTo({ x: width * 2 }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 2 ? "black" : "#C0C0C0", textDecorationLine: currentPage == 2 ? "underline" : "none" }]}>{"Credits"}</Text>
                                </View>
                            </RNBounceable>
                        </View>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled={true}
                            scrollEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            ref={(node) => (this.scroll = node)}
                            style={{ flex: 0.8 }} >
                            <View style={styles.firstContainer}>
                                <View style={styles.firstUpperContainer}>
                                    <RNBounceable onPress={() => { this.setState({ currentPackage: 0 }); this.scroll1.scrollTo({ x: 0 }); }}>
                                        <View style={[styles.tabStyle, { backgroundColor: currentPackage == 0 ? "black" : "white", }]} >
                                            <Text style={[styles.tabTextStyle, { color: currentPackage == 0 ? "white" : "black" }]}>{"Active"}</Text>
                                        </View>
                                    </RNBounceable>
                                    <RNBounceable onPress={() => { this.scroll1.scrollTo({ x: width }); this.setState({ currentPackage: 1 }); }}>
                                        <View style={[styles.tabStyle, { backgroundColor: currentPackage == 1 ? "black" : "white", }]} >
                                            <Text style={[styles.tabTextStyle, { color: currentPackage == 1 ? "white" : "black" }]}>{"Inactive"}</Text>
                                        </View>
                                    </RNBounceable>
                                </View>
                                <ScrollView
                                    horizontal={true}
                                    scrollEventThrottle={16}
                                    pagingEnabled={true}
                                    showsHorizontalScrollIndicator={false}
                                    ref={(node) => (this.scroll1 = node)}
                                    onScroll={(event) => this.setSliderPage1(event)}
                                    style={{ flex: 0.8 }} >
                                    <View style={styles.firstContainer}>
                                        <View style={styles.contentContainer}>
                                            <View style={styles.iconContainer}>
                                                <Icon.FontAwesome5 name="box" size={30} color={"white"} />
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayTextStyle}>Nothing to see here?</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayText}>No active packages</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.firstContainer}>
                                        <View style={styles.contentContainer}>
                                            <View style={styles.iconContainer}>
                                                <Icon.FontAwesome5 name="box" size={30} color={"white"} />
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayTextStyle}>Nothing to see here?</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayText}>No inactive packages</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.secondContainer}>
                                <View style={styles.firstUpperContainer}>
                                    <RNBounceable onPress={() => { this.setState({ currentSession: 0 }); this.scroll2.scrollTo({ x: 0 }); }}>
                                        <View style={[styles.tabStyle, { backgroundColor: currentSession == 0 ? "black" : "white", }]} >
                                            <Text style={[styles.tabTextStyle, { color: currentSession == 0 ? "white" : "black" }]}>{"Session"}</Text>
                                        </View>
                                    </RNBounceable>
                                    <RNBounceable onPress={() => { this.scroll2.scrollTo({ x: width }); this.setState({ currentSession: 1 }); }}>
                                        <View style={[styles.tabStyle, { backgroundColor: currentSession == 1 ? "black" : "white", }]} >
                                            <Text style={[styles.tabTextStyle, { color: currentSession == 1 ? "white" : "black" }]}>{"History"}</Text>
                                        </View>
                                    </RNBounceable>
                                </View>
                                <ScrollView
                                    horizontal={true}
                                    scrollEventThrottle={16}
                                    pagingEnabled={true}
                                    showsHorizontalScrollIndicator={false}
                                    ref={(node) => (this.scroll2 = node)}
                                    onScroll={(event) => this.setSliderPage2(event)}
                                    style={{ flex: 0.8 }} >

                                    <View style={styles.firstContainer}>
                                        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                                            <View style={{ flex: 1, }}>
                                                <View style={{ marginHorizontal: "5%", flex: 0.7 }}>
                                                    <View style={styles.boxContainer}>
                                                        <Text>0 Sessions Remaining</Text>
                                                    </View>
                                                    <View style={styles.marginTop}>
                                                        <Text style={styles.textStyle}>Active Sessions</Text>
                                                    </View>
                                                    <View style={styles.row}>
                                                        <Text style={styles.textStyle1}>Session Purchased</Text>
                                                        <Text style={styles.textStyle1}>0</Text>
                                                    </View>
                                                    <View style={styles.row}>
                                                        <Text style={styles.textStyle1}>Session Gifted</Text>
                                                        <Text style={styles.textStyle1}>0</Text>
                                                    </View>
                                                    <View style={styles.marginTop}>
                                                        <Text style={styles.textStyle}>Lifetime</Text>
                                                    </View>
                                                    <View style={styles.row}>
                                                        <Text style={styles.textStyle1}>Session Purchased</Text>
                                                        <Text style={styles.textStyle1}>0</Text>
                                                    </View>
                                                    <View style={styles.row}>
                                                        <Text style={styles.textStyle1}>Session Gifted</Text>
                                                        <Text style={styles.textStyle1}>0</Text>
                                                    </View>

                                                </View>
                                            </View>
                                        </ScrollView>
                                    </View>
                                    <View style={styles.firstContainer}>
                                        <View style={styles.contentContainer}>
                                            <View style={styles.iconContainer}>
                                                <Icon.FontAwesome5 name="box" size={30} color={"white"} />
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayTextStyle}>Nothing to see here?</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayText}>No history</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.firstContainer}>
                                <View style={styles.firstUpperContainer}>
                                    <RNBounceable onPress={() => { this.setState({ currentCredit: 0 }); this.scroll3.scrollTo({ x: 0 }); }}>
                                        <View style={[styles.tabStyle1, { backgroundColor: currentCredit == 0 ? "black" : "white", }]} >
                                            <Text style={[styles.tabTextStyle, { color: currentCredit == 0 ? "white" : "black" }]}>{"Overview"}</Text>
                                        </View>
                                    </RNBounceable>
                                    <RNBounceable onPress={() => { this.scroll3.scrollTo({ x: width }); this.setState({ currentCredit: 1 }); }}>
                                        <View style={[styles.tabStyle1, { backgroundColor: currentCredit == 1 ? "black" : "white", }]} >
                                            <Text style={[styles.tabTextStyle, { color: currentCredit == 1 ? "white" : "black" }]}>{"Added"}</Text>
                                        </View>
                                    </RNBounceable>
                                    <RNBounceable onPress={() => { this.scroll3.scrollTo({ x: width * 2 }); this.setState({ currentCredit: 2 }); }}>
                                        <View style={[styles.tabStyle1, { backgroundColor: currentCredit == 2 ? "black" : "white", }]} >
                                            <Text style={[styles.tabTextStyle, { color: currentCredit == 2 ? "white" : "black" }]}>{"Redeemed"}</Text>
                                        </View>
                                    </RNBounceable>
                                </View>
                                <ScrollView
                                    horizontal={true}
                                    scrollEventThrottle={16}
                                    pagingEnabled={true}
                                    showsHorizontalScrollIndicator={false}
                                    ref={(node) => (this.scroll3 = node)}
                                    onScroll={(event) => this.setSliderPage3(event)}
                                    style={{ flex: 0.8 }} >

                                    <View style={styles.firstContainer}>
                                        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                                            <View style={{ flex: 1, }}>
                                                <View style={{ marginHorizontal: "5%", flex: 0.7 }}>
                                                    <View style={styles.boxContainer1}>
                                                        <Text style={[styles.textStyle, { color: "white" }]} >0 credit remaining</Text>
                                                    </View>
                                                    <View style={styles.marginTop}>
                                                        <Text style={styles.textStyle}>Lifetime Credits</Text>
                                                    </View>
                                                    <View style={styles.row}>
                                                        <Text style={styles.textStyle1}>Credits Purchased</Text>
                                                        <Text style={styles.textStyle1}>0</Text>
                                                    </View>
                                                    <View style={styles.row}>
                                                        <Text style={styles.textStyle1}>Credits Redeemed</Text>
                                                        <Text style={styles.textStyle1}>0</Text>
                                                    </View>
                                                    <View style={styles.row}>
                                                        <Text style={styles.textStyle1}>Credits Gifted</Text>
                                                        <Text style={styles.textStyle1}>0</Text>
                                                    </View>

                                                </View>
                                            </View>
                                        </ScrollView>
                                    </View>
                                    <View style={styles.firstContainer}>
                                        <View style={styles.contentContainer}>
                                            <View style={styles.iconContainer}>
                                                <Icon.FontAwesome5 name="box" size={30} color={"white"} />
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayTextStyle}>Nothing to see here?</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayText}>No credits</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.firstContainer}>
                                        <View style={styles.contentContainer}>
                                            <View style={styles.iconContainer}>
                                                <Icon.FontAwesome5 name="box" size={30} color={"white"} />
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayTextStyle}>Nothing to see here?</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.grayText}>No credits</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Financials);