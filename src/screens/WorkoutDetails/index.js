import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Icon, Button, Container, } from "../../components";

import styles from './style';
import { WorkoutsServices } from '../../services';

const { width, height } = Dimensions.get('window');

class WorkoutDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            currentPage: 0,
            exerciseData: null,
            loading: true,
            templates: [
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: true,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
            ]
        }
        this.data = this.state.activityArr
    }

    componentDidMount = async () => {
        const { userData } = this.props.user;
        console.log(userData)
        WorkoutsServices.getExerciseById(userData.token, userData.userId, this.props.route.params.data.exerciseId)
            .then((res) => {
                console.log("res.data : ", res.data)
                this.setState({ exerciseData: res.data[0], loading: false })
                WorkoutsServices.getAllWorkoutsbyId()
            })
            .catch((error) => console.log(error))
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

    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable onPressIn={() => this.handlePress(index)} style={styles.itemContainer} onPress={() => { }}>
                <View style={styles.boxView}>
                    <Text></Text>
                </View>
                <View style={styles.row}>
                    <Text numberOfLines={3} style={styles.itemTextStyle}>{item.type}</Text>
                    <View style={{ flex: 0.1 }} >
                        <Icon.MaterialIcons name={item.selected ? 'check-box' : 'check-box-outline-blank'} size={20} color='black' />
                    </View>
                </View>
            </RNBounceable>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    render() {
        const { currentPage, exerciseData } = this.state;
        return (
            <Container props={this.props} >
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.upperContentContainer}>
                        <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
                            <View >
                                <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#C0C0C0" }]}>{"Exercise"}</Text>
                            </View>
                        </RNBounceable>
                        <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
                            <View >
                                <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#C0C0C0" }]}>{"Details"}</Text>
                            </View>
                        </RNBounceable>
                    </View>
                    <ScrollView
                        horizontal={true}
                        scrollEventThrottle={16}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        ref={(node) => (this.scroll = node)}
                        onScroll={(event) => this.setSliderPage(event)}
                        style={{ flex: 0.8 }} >
                        <View style={styles.firstContainer}>
                            <View style={styles.generalMargin}>
                                <Text style={styles.textStyle1}>Nothing added just yet!</Text>
                            </View>
                        </View>
                        <View style={styles.secondContainer}>
                            <ScrollView contentContainerStyle={{ paddingBottom: '30%' }}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ marginHorizontal: "5%", flex: 0.7 }}>
                                        <View style={styles.iconContainer}>
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle}>Description</Text>
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle1}>{exerciseData != null ? exerciseData.name : "Nothing added just yet!"}</Text>
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle}>Note</Text>
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle1}>{exerciseData != null ? exerciseData.note : "Nothing added just yet!"}</Text>
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle}>Files</Text>
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle1}>{exerciseData != null ? exerciseData.files : "Nothing added just yet!"}</Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}>
                            <Button.SlimButton title={"Start Workout"} onPress={() => { this.props.navigation.navigate('CurrentWorkout') }} />
                        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetail);