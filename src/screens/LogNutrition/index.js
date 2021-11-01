import React, { Component } from 'react'
import {
    View, Text, StatusBar, Alert
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Container, Icon, Button } from "../../components";
import { authActions } from '../../redux/actions/auth';

import styles from './style';
import { route } from '../../lib/utils/constants';
import { NutritionsServices } from '../../services';


class StartWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            loading: false
        }

    }

    handleLogNutrition = () => {
        const { userData } = this.props.user;
        if (this.props.route?.params?.diet?.mealPlanId) {
            this.setState({ loading: true })
            NutritionsServices.startNutrition(this.props.route?.params?.diet?.mealPlanId, userData.token, userData.userId)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ loading: false })
                    this.props.navigation.replace('Home')
                })
                .catch((err) => console.log(err.response.data))
        } else if (this.state.checked) {
            this.props.navigation.replace('Home')
        } else {
            Alert.alert('Please select a nutrition plan')
        }

    }

    render() {
        const { data, selectedValue, dropdown, checked, loading } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.selectPlanContainer}>
                        <Text style={[styles.textStyle, { color: '#544b4c' }]}>Assigned Plans</Text>
                        <RNBounceable onPress={() => this.props.navigation.navigate(route.NUTRITION_LIBRARY)} style={styles.selectPlanInnerContainer}>
                            <Text style={styles.textStyle}>{this.props.route?.params?.diet ? this.props.route?.params?.diet?.mealPlanName : "Select nutrition plan"}</Text>
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
                        <Button.SlimButton loading={loading} title="Next" onPress={() => { this.handleLogNutrition() }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(StartWorkout);