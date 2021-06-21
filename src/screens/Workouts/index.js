import React, { Component } from 'react'
import {
    View, Text, FlatList
} from 'react-native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Icon, Button, Container, } from "../../components";

import styles from './style';
import { renderSeperator } from '../../lib/utils/global';

class Workouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workout: [
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
            ]
        }
    }



    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }


    render() {
        const { workout, reportModal, issue } = this.state;
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
                        <FlatList
                            data={workout}
                            contentContainerStyle={{ paddingBottom: 180 }}
                            keyExtractor={item => item}
                            ItemSeparatorComponent={(renderSeperator)}
                            renderItem={({ index, item }) => {
                                return (
                                    <RNBounceable onPressIn={() => { this.props.navigation.navigate('WorkoutDetails', { heading: item.type }) }} style={styles.itemContainer} onPress={() => { }}>
                                        <View style={styles.boxView}>
                                            <Text></Text>
                                        </View>
                                        <View style={styles.itemTypeContainer}>
                                            <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.type}</Text>
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