import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, Dimensions, ScrollView
} from 'react-native'
import { BrownButton, Container, Icon, SlimButton } from "../../components";
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import ToggleSwitch from 'toggle-switch-react-native'
import { StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
import THEME from '../../assets/styles/theme.style'
import RNBounceable from '@freakycoder/react-native-bounceable';

class StartWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

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
                            offColor="#e2e2e2"
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
                            offColor="#e2e2e2"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        />
                    </View>
                    <View style={{ margin: "5%", flexDirection: "column" }}>
                        <Text style={[styles.textStyle, { color: '#544b4c' }]}>Available Workouts</Text>
                        <RNBounceable onPress={() => this.props.navigation.navigate('WorkoutTemplate')} style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "5%", borderRadius: 10, elevation: 2, paddingVertical: "10%", paddingHorizontal: "5%" }}>
                            <Text>Select Workout</Text>
                            <Icon.AntDesign name="right" size={25} color={"gray"} />
                        </RNBounceable>
                    </View>
                    <View>
                        <SlimButton title="Start" onPress={() => { }} />
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