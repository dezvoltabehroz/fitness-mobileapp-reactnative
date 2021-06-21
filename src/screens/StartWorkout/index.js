import React, { Component } from 'react'
import {
    View, Text, StatusBar
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import ToggleSwitch from 'toggle-switch-react-native'

import { authActions } from '../../redux/actions/auth';
import { Container, Icon, Button } from "../../components";

import THEME from '../../assets/styles/theme.style'
import styles from './style';

class StartWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { data, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>

                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>Starting Workout Now?</Text>
                        <ToggleSwitch
                            isOn={true}
                            onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                            offColor={THEME.COLOR_LIGHT_GRAY}
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>Folow Workout Template?</Text>
                        <ToggleSwitch
                            isOn={true}
                            onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                            offColor={THEME.COLOR_LIGHT_GRAY}
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        />
                    </View>
                    <View style={{ margin: "5%", flexDirection: "column" }}>
                        <Text style={[styles.textStyle, { color: '#544b4c' }]}>Available Workouts</Text>
                        <RNBounceable onPress={() => this.props.navigation.navigate('WorkoutTemplate')} style={styles.selectWorkoutContainer}>
                            <Text>Select Workout</Text>
                            <Icon.AntDesign name="right" size={25} color={"gray"} />
                        </RNBounceable>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button.SlimButton title="Start" onPress={() => { }} />
                    </View>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartWorkout);