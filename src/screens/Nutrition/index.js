import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Icon, Button, Container, FilterModal } from "../../components";
import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';

import styles from './style';

const { width, height } = Dimensions.get('window');

class Nutrition extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterModal: false,
            visible: true,
            currentPage: 0,
            buttonArr: [{
                text: "Start a workout",
                title: "StartWorkout",
                iconName: <Icon.FontAwesome5 name={'fire-alt'} size={20} color='white' />,
            },
            {
                text: "Log Nutrition",
                title: "LogNutrition",
                iconName: <Icon.MaterialIcons name={'dinner-dining'} size={20} color='white' />,
            },
            {
                text: "Add Progress Photo",
                title: "ProgressPhoto",
                iconName: <Icon.FontAwesome name={'user'} size={20} color='white' />,
            },
            {
                text: "Update Metrics",
                title: "UpdateMetrics",
                iconName: <Icon.Entypo name={'gauge'} size={20} color='white' />,
            }],
            activityArr: [
                {
                    user_name: 'T',
                    type: 'Ended program',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
            ]
        }
        this.data = this.state.activityArr
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
            switch (indexOfNextScreen) {
                case 0:
                    this.scroll1.scrollTo({ x: 0 });
                    break;
                case 1:
                    this.scroll1.scrollTo({ x: 0.35 * width });
                    break;
                case 2:
                    this.scroll1.scrollTo({ x: 2.4 * width });
                    break;

                default:
                    this.scroll1.scrollTo({ x: 0 });
                    break;
            }

        }
    };

    setHeadingSliderPage = () => {
        const { currentPage } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor((width * 0.5)));
        if (indexOfNextScreen !== currentPage) {
            this.setState({
                currentPage: indexOfNextScreen,
            });
        }
    }


    render() {
        const { currentPage, filterModal } = this.state;
        return (
            <Container props={this.props} >
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <ScrollView
                            horizontal={true}
                            scrollEventThrottle={16}
                            pagingEnabled={true}
                            contentContainerStyle={{ paddingLeft: "5%", paddingRight: "15%" }}
                            showsHorizontalScrollIndicator={false}
                            ref={(node) => (this.scroll1 = node)}
                            // onScroll={(event) => this.setHeadingSliderPage(event)}
                            style={{ flex: 0.7 }} >
                            <RNBounceable style={{ paddingRight: "3.5%" }} onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); this.scroll1.scrollTo({ x: width * 0 }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#544b4c" }]}>{"Nutrition"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable style={{ paddingRight: "3.5%" }} onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); this.scroll1.scrollTo({ x: width * 0.35 }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#544b4c" }]}>{"Custom"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable style={{ paddingRight: "2.5%" }} onPress={() => { this.setState({ currentPage: 2 }); this.scroll.scrollTo({ x: width * 2 }); this.scroll1.scrollTo({ x: width * 2.4 }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 2 ? "black" : "#544b4c" }]}>{"Shopping List"}</Text>
                                </View>
                            </RNBounceable>
                        </ScrollView>
                    </View>
                    <ScrollView
                        horizontal={true}
                        scrollEventThrottle={16}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        ref={(node) => (this.scroll = node)}
                        onScroll={(event) => this.setSliderPage(event)}
                        style={{ flex: 0.7 }} >
                        <View style={styles.firstContainer}>
                            <ScrollView style={{ flex: 1 }}>
                                <View style={{ alignItems: "center" }}>
                                    <View style={styles.iconContainer}>
                                        <Icon.MaterialIcons name="dinner-dining" size={30} color={"white"} />
                                    </View>
                                    <View style={{ marginTop: "5%" }}>
                                        <Text style={styles.textStyle3}>Nothing to see here?</Text>
                                    </View>
                                    <View style={{ marginTop: "5%", marginHorizontal: "10%" }}>
                                        <Text style={styles.textStyle1}>No nutrition plans assigned yet!</Text>
                                    </View>
                                </View>
                                <View style={{ height: 50 }}></View>
                            </ScrollView>
                            <View style={styles.buttonContainer}>
                                <View style={{ position: "absolute", bottom: 40, }}>
                                    <Button.SlimButton title={"Log Nutrition"} onPress={() => { this.props.navigation.navigate('StartWorkout') }} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.secondContainer}>
                            <ScrollView style={{ flex: 1, paddingTop: "5%" }}>
                                <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                                <View style={styles.rowContainer} >
                                    <Text style={styles.textStyle}>A to Z</Text>
                                    <RNBounceable onPress={() => this.setState({ filterModal: true })} style={styles.row}>
                                        <Icon.FontAwesome name="filter" size={20} />
                                    </RNBounceable>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <View style={styles.iconContainer}>
                                        <Icon.MaterialIcons name="dinner-dining" size={30} color={"white"} />
                                    </View>
                                    <View style={{ marginTop: "5%" }}>
                                        <Text style={styles.textStyle3}>Nothing to see here?</Text>
                                    </View>
                                    <View style={{ marginTop: "5%", marginHorizontal: "10%" }}>
                                        <Text style={styles.textStyle1}>Nothing added just yet!</Text>
                                    </View>
                                </View>
                                <View style={{ height: 50 }}></View>
                            </ScrollView>
                            <View style={styles.buttonContainer}>
                                <View style={{ position: "absolute", bottom: 40, }}>
                                    <Button.SlimButton title={"Create Custom Food"} onPress={() => { this.props.navigation.navigate('AddItem') }} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.secondContainer}>
                            <ScrollView style={{ flex: 1 }}>

                                <View style={{ alignItems: "center" }}>
                                    <View style={styles.iconContainer}>
                                        <Icon.MaterialIcons name="dinner-dining" size={30} color={"white"} />
                                    </View>
                                    <View style={{ marginTop: "5%" }}>
                                        <Text style={styles.textStyle3}>No Shopping Items</Text>
                                    </View>
                                    <View style={{ marginTop: "5%", marginHorizontal: "10%" }}>
                                        <Text style={styles.textStyle1}>Your Trainer hasn't assigned any food items to you just yet.</Text>
                                    </View>
                                </View>
                                <View style={{ height: 50 }}></View>
                            </ScrollView>

                        </View>
                    </ScrollView>
                </View>
                <FilterModal isVisible={filterModal} hide={() => this.setState({ filterModal: false })} />
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);