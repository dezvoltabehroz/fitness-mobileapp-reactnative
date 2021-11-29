import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions, FlatList, Image, } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Icon, Button, Container, Sets, Loader, } from "../../components";

import styles from './style';
import { WorkoutsServices } from '../../services';
import { renderSeperator } from '../../lib/utils/global';
import { route } from '../../lib/utils/constants';
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
        WorkoutsServices.getExerciseHistory(this.props.route?.params?.data?.usersWorkoutExerciseId, userData.token, userData.userId)
            .then((res) => {
                console.log("res.data : ", res.data)
                this.setState({ exerciseData: res.data, loading: false })

            })
            .catch((error) => {this.setState({ exerciseData: [], loading: false });console.log(error.response)})
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

    _renderItem = (item, index) => {
        return (
            <View style={styles.rowTitleContainer}>
                <View style={styles.first}><Text style={styles.headingText}>{index + 1}</Text></View>
                <View style={styles.fifth}><Text style={styles.headingText}>{item.reps}</Text></View>
                <View style={styles.second}><Text style={styles.headingText}>{item.weight}kg</Text></View>
                <View style={styles.fourth}><Text style={styles.headingText}>{item.tempo}</Text></View>
            </View>
        )
    }

    handleStartWorkout = () => {
        const { userData } = this.props.user;
        WorkoutsServices.startWorkout(this.props.route?.params?.data?.workoutId, userData.token, userData.userId)
            .then((res) => { console.log(res); this.props.navigation.navigate(route.CURRENT_WORKOUT, { workout: this.props.route.params.data }) })
            .catch((err) => console.log(err))
    }

    render() {
        const { currentPage, exerciseData, loading } = this.state;
        return (
            <Container props={this.props} >
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
                {
                    loading ?
                        <Loader />
                        :
                        <View style={styles.container}>
                            <View style={styles.upperContentContainer}>
                                <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
                                    <View >
                                        <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#C0C0C0" }]}>{"This Workout"}</Text>
                                    </View>
                                </RNBounceable>
                                <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
                                    <View >
                                        <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#C0C0C0" }]}>{"All Workouts"}</Text>
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
                                    <View style={{ alignItems: "center", flex: 0.7 }}>
                                        <View style={styles.iconContainer}>
                                            <Icon.FontAwesome5 name="fire-alt" size={30} color={"white"} />
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle}>Nothing to see here?</Text>
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle1}>Nothing added just yet!</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.secondContainer}>
                                    <ScrollView contentContainerStyle={{ paddingBottom: '30%' }}>
                                        {
                                            exerciseData.length == 0 ?
                                                <View style={{ alignItems: "center", flex: 0.7 }}>
                                                    <View style={styles.iconContainer}>
                                                        <Icon.FontAwesome5 name="fire-alt" size={30} color={"white"} />
                                                    </View>
                                                    <View style={styles.marginTop}>
                                                        <Text style={styles.textStyle}>Nothing to see here?</Text>
                                                    </View>
                                                    <View style={styles.marginTop}>
                                                        <Text style={styles.textStyle1}>Nothing added just yet!</Text>
                                                    </View>
                                                </View>

                                                :
                                                <>
                                                    <View style={styles.flatListContainer}>
                                                        <View style={styles.rowTitleContainer}>
                                                            <View style={styles.first}><Text style={styles.headingText}>#</Text></View>
                                                            <View style={styles.fifth}><Text style={styles.headingText}>Reps</Text></View>
                                                            <View style={styles.second}><Text style={styles.headingText}>Weight</Text></View>
                                                            <View style={styles.fourth}><Text style={styles.headingText}>Tempo</Text></View>
                                                        </View>
                                                        <FlatList
                                                            data={exerciseData}
                                                            ItemSeparatorComponent={(renderSeperator)}
                                                            contentContainerStyle={{ paddingVertical: "5%", }}
                                                            renderItem={({ item, index }) => this._renderItem(item, index)} />
                                                    </View>

                                                </>}
                                    </ScrollView>
                                </View>
                            </ScrollView>
                            {/* <View style={styles.buttonContainer}>
                                <View style={styles.buttonStyle}>
                                    <Button.SlimButton title={"Start Workout"} onPress={() => { this.handleStartWorkout() }} />
                                </View>
                            </View> */}
                        </View>
                }

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