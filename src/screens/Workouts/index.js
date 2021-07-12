import React, { Component } from 'react'
import {
    View, Text, FlatList, Image
} from 'react-native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Icon, Button, Container, Loader, } from "../../components";

import styles from './style';
import { renderSeperator } from '../../lib/utils/global';
import { WorkoutsServices } from '../../services';
import { LOGO, TOKEN } from '../../lib/utils/constants';

class Workouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workout: [],
            loading: true
        }
    }


    componentDidMount = () => {
        const { userData } = this.props.user;
        console.log(userData)
        WorkoutsServices.getAllWorkouts(userData.token, TOKEN, userData.userId)
            .then((res) => {
                console.log(res.data)
                this.setState({ workout: res.data, loading: false })
            })
            .catch((err) => {
                this.setState({ workout: [], loading: false })
                console.log(err.response)
            })
    }


    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }


    render() {
        const { workout, reportModal, loading } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{"Workouts"}</Text>
                    </View>
                    <View style={styles.lowerContentContainer}>
                        <View style={styles.rowContainer} >
                            <Text style={styles.recentStyle}>Recent</Text>
                            <RNBounceable onPress={() => this.props.navigation.navigate('WorkoutLibrary')} style={styles.row}>
                                <Text style={styles.viewStyle} >View all</Text>
                                <Icon.Entypo name="chevron-small-right" size={20} />
                            </RNBounceable>
                        </View>
                        {
                            loading ?
                                <Loader />
                                :
                                workout.length == 0 ?
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={styles.viewStyle} >No workout is found</Text>
                                    </View>
                                    :
                                    <>
                                        <FlatList
                                            data={workout}
                                            contentContainerStyle={{ paddingBottom: 180 }}
                                            keyExtractor={item => item}
                                            ItemSeparatorComponent={(renderSeperator)}
                                            renderItem={({ index, item }) => {
                                                return (
                                                    <RNBounceable onPress={() => { this.props.navigation.navigate('WorkoutDetails', { heading: item.workoutName }) }} style={styles.itemContainer} onPress={() => { }}>
                                                        <Image style={styles.boxView} source={item.imagePath != "" ? { uri: item.imagePath } : LOGO} />
                                                        <View style={styles.itemTypeContainer}>
                                                            <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.workoutName}</Text>
                                                        </View>
                                                    </RNBounceable>
                                                )
                                            }}

                                        />
                                        <View style={styles.buttonContainer}>
                                            <View style={styles.buttonStyle}>
                                                <Button.SlimButton title={"Start Workout"} onPress={() => { this.props.navigation.navigate('StartWorkout') }} />
                                            </View>
                                        </View>
                                    </>
                        }
                    </View>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);