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
                                <Text style={{ fontSize: 12, color: "lightgray", marginTop: 5, fontWeight: "bold" }}>Log your own nutrition.</Text>
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

                        <RNBounceable onPress={()=>this.props.navigation.navigate('Integrations')} style={styles.steupFitnessInnerContainer}>
                            <View style={styles.rowContainer}>
                                <Icon.Entypo name="emoji-flirt" size={50} />
                                <View style={{ marginHorizontal: "5%" }}>
                                    <Text style={styles.textStyle}>Setup MyFitnessPal</Text>
                                </View>
                            </View>
                            <Icon.AntDesign name="right" size={20} color={"gray"} />
                        </RNBounceable>
                    </View>
                    <View style={{ marginTop: "10%" }}>
                        <SlimButton title="Next" />
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