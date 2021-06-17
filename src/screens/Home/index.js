import React, { Component } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, ScrollView, RefreshControl, Dimensions } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import Timeline from 'react-native-timeline-flatlist';
import moment from "moment"

import { authActions } from '../../redux/actions/auth';
import { Icon, Container } from "../../components";

import styles from './style';

const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
                title: "Measurement",
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
        }
    };

    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable style={styles.flatListcontentContainer} onPress={() => { this.props.navigation.navigate(item.title) }}>
                <View style={[styles.rowContainerSpaceBetween, { flex: 1 }]}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text numberOfLines={3} style={{ fontSize: 16, fontWeight: "bold", width: "70%" }}>{item.text}</Text>
                    </View>
                    <View onPress={() => {
                    }} style={[styles.flatlistContainer, { flexDirection: "column", backgroundColor: "#544b4c" }]}>
                        {item.iconName}
                    </View>
                </View>
            </RNBounceable>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapWidth}></View>)
    }

    onRefresh = () => {
        this.setState({ isRefreshing: true });
        //refresh to initial data
        setTimeout(() => {
            //refresh to initial data
            this.setState({
                activityArr: this.data,
                isRefreshing: false
            });
        }, 2000);
    }
    truncateString = (str, num) => {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num)
    }
    renderDetail = (rowData, sectionID, rowID) => {
        let title = <View style={{ backgroundColor: "#544b4c", marginTop: 30, right: 45, bottom: 1, borderRadius: 50, height: 50, width: 50, justifyContent: 'center', }}>
            <Text style={{ textTransform: "capitalize", textAlign: "center", fontSize: 16, fontWeight: "bold", color: "white" }}>{this.truncateString(`${rowData.user_name}`, 1)}</Text>
        </View>
        var desc = (
            <View style={{ top: -40 }}>
                <View >
                    <View style={{ paddingRight: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 16 }} >{rowData.type}: {rowData.activity}</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ color: "gray", fontWeight: "bold", fontSize: 12 }} >{moment(rowData.time).format("HH:MM, DD MMM YYYY")} </Text>
                                <TouchableOpacity style={{ marginHorizontal: "5%" }}>
                                    <Icon.AntDesign name={'like1'} size={15} color='black' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', }}>
                            <Icon.FontAwesome5 name={'fire-alt'} size={20} color='black' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
        return (
            <RNBounceable onPress={() => { }}>
                <View style={{ flex: 1, marginTop: -45, height: 90, }}>
                    {title}
                    <View style={{ paddingLeft: 20 }}>
                        {desc}
                    </View>
                </View>
            </RNBounceable>
        )
    }

    onEndReached = () => {
        if (!this.state.waiting) {
            this.setState({ waiting: true });
            //fetch and concat data
            setTimeout(() => {
                // refresh to initial data
                var data = this.state.activityArr.concat(
                    [
                        {
                            jobName: 'Security Guard',
                            responsibitlity: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                            experience: '6 Months',
                            period: '6 dec, 2020 - 12 jun , 2021',
                        },
                        {
                            jobName: 'Security Guard',
                            responsibitlity: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                            experience: '6 Months',
                            period: '6 dec, 2020 - 12 jun , 2021',
                        },
                        {
                            jobName: 'Security Guard',
                            responsibitlity: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                            experience: '6 Months',
                            period: '6 dec, 2020 - 12 jun , 2021',
                        },
                        {
                            jobName: 'Security Guard',
                            responsibitlity: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                            experience: '6 Months',
                            period: '6 dec, 2020 - 12 jun , 2021',
                        },
                    ]
                )
                this.setState({
                    waiting: false,
                    activityArr: data,
                });
            }, 2000);
        }
    }

    renderFooter = () => {
        if (this.state.waiting) {
            return <ActivityIndicator />;
        } else {
            return <Text>~</Text>;
        }
    }


    render() {
        const { currentPage, } = this.state;
        return (
            <Container props={this.props} >
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: width * 0.7 }}>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#544b4c" }]}>{"Today"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#544b4c" }]}>{"Activity"}</Text>
                                </View>
                            </RNBounceable>
                        </View>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Settings'); }}
                            style={{ marginLeft: "15%", justifyContent: "center", alignItems: "center", height: 30, width: 30, borderRadius: 15, backgroundColor: "#544b4c", alignContent: "flex-end" }}>
                            <Text style={{ color: "white", fontWeight: "bold" }} >T</Text>
                        </TouchableOpacity>
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

                            {
                                this.state.visible ?
                                    <View style={styles.connectDevicesContainer} >
                                        <View style={styles.rowContainerSpaceBetween}>
                                            <Text style={[styles.headingStyle, { color: "white" }]}>{"Connect your Devices"}</Text>
                                            <RNBounceable onPress={() => { this.setState({ visible: false }) }}>
                                                <Icon.AntDesign on name={'close'} size={25} color='white' />
                                            </RNBounceable>
                                        </View>

                                        <View style={{ height: 50 }}></View>
                                        <View style={styles.rowContainerBadges}>
                                            <View style={styles.badgeMargin}>
                                                <Icon.FontAwesome5 name={'calendar-alt'} size={35} color='white' />
                                            </View>
                                            <View style={styles.badgeMargin}>
                                                <Icon.FontAwesome name={'wpforms'} size={35} color='white' />
                                            </View>
                                            <View style={styles.badgeMargin}>
                                                <Icon.MaterialCommunityIcons name={'sack'} size={35} color='white' />
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    null
                            }
                            <ScrollView style={{ flex: 1 }}>

                                <FlatList
                                    data={this.state.buttonArr}
                                    keyExtractor={item => item}
                                    numColumns={2}
                                    ItemSeparatorComponent={this.renderSeparator}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={styles.contentContainer}
                                    renderItem={({ index, item }) => this._renderItems({ index, item })}

                                />
                                <View style={{ marginHorizontal: "5%", marginTop: "5%" }}>
                                    <Text numberOfLines={3} style={{ fontSize: 20, fontWeight: "bold", width: "70%" }}>Today's Schedule</Text>
                                    <Text numberOfLines={3} style={{ fontSize: 16, fontWeight: "bold", width: "70%" }}>{moment().format("HH:MM, DD MMM YYYY")}</Text>
                                </View>
                                <View style={{ height: 50 }}></View>
                            </ScrollView>
                        </View>

                        <View style={styles.secondContainer}>

                            <Timeline
                                style={{ width: screenWidth }}
                                data={this.state.activityArr}
                                circleSize={50}
                                circleColor='rgb(255, 200, 0)'
                                lineColor='lightgrey'
                                options={{
                                    style: { padding: 0 }
                                }}
                                timeContainerStyle={{ minWidth: 0, marginTop: -15 }}
                                options={{
                                    style: { paddingTop: 15, paddingLeft: 0, width: screenWidth },
                                    refreshControl:
                                        <RefreshControl
                                            refreshing={this.state.isRefreshing}
                                            onRefresh={() => this.onRefresh()} />,
                                    // renderFooter: this.renderFooter,
                                    // onEndReached: this.onEndReached
                                }}
                                listViewContainerStyle={{
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                    // marginTop: -60
                                }}
                                renderCircle={() => { }}
                                innerCircle={'dot'}
                                showTime={false}
                                renderDetail={(navigation) => this.renderDetail(navigation)} />
                        </View>
                    </ScrollView>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);