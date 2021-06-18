import React, { Component } from 'react'
import {
    View, Text, StatusBar
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Container, Icon, Button } from "../../components";
import { authActions } from '../../redux/actions/auth';

import styles from './style';


class StartWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }

    }

    render() {
        const { data, selectedValue, dropdown, checked } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.selectPlanContainer}>
                        <Text style={[styles.textStyle, { color: '#544b4c' }]}>Assigned Plans</Text>
                        <RNBounceable style={styles.selectPlanInnerContainer}>
                            <Text style={styles.textStyle}>Select nutrition plan</Text>
                            <Icon.AntDesign name="right" size={20} color={"gray"} />
                        </RNBounceable>
                    </View>
                    <View style={styles.noNutritionContainer}>

                        <RNBounceable style={styles.noNutritionInnerContainer}>
                            <View>
                                <Text style={styles.textStyle}>No Nutrition Plan</Text>
                                <Text style={styles.logText}>Log your own nutrition.</Text>
                            </View>
                            {
                                checked ?
                                    <RNBounceable onPress={() => this.setState({ checked: !checked })}>
                                        <Icon.MaterialCommunityIcons name="checkbox-marked" size={25} color={"black"} />
                                    </RNBounceable>
                                    :
                                    <RNBounceable onPress={() => this.setState({ checked: !checked })}>
                                        <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={25} color={"black"} />
                                    </RNBounceable>
                            }

                        </RNBounceable>
                    </View>
                    <View style={styles.noNutritionContainer}>

                        <RNBounceable onPress={() => this.props.navigation.navigate('Integrations')} style={styles.steupFitnessInnerContainer}>
                            <View style={styles.rowContainer}>
                                <Icon.Entypo name="emoji-flirt" size={50} />
                                <View style={{ marginHorizontal: "5%" }}>
                                    <Text style={styles.textStyle}>Setup MyFitnessPal</Text>
                                </View>
                            </View>
                            <Icon.AntDesign name="right" size={20} color={"gray"} />
                        </RNBounceable>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button.SlimButton title="Next" onPress={() => { }} />
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