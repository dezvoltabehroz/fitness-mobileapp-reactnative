import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, Dimensions, ScrollView
} from 'react-native'
import { Container, Icon } from "../../components";
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import ToggleSwitch from 'toggle-switch-react-native'
import { StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
import THEME from '../../assets/styles/theme.style'
class Integrations extends Component {
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
                    <View style={styles.generalMargin}>
                        <Text style={styles.headingTextStyle}>Nutrition Services</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.row}>
                            <Icon.Entypo name="emoji-flirt" size={50} />
                            <Text style={styles.textStyle}>My FitnessPal</Text>
                        </View>
                        <ToggleSwitch
                            isOn={false}
                            onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                            offColor="#e2e2e2"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        />
                    </View>
                    <View style={styles.generalMargin}>
                        <Text style={styles.headingTextStyle}>Services</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.row}>
                            <Icon.Entypo name="emoji-flirt" size={50} />
                            <Text style={styles.textStyle}>Fitbit</Text>
                        </View>
                        <ToggleSwitch
                            isOn={false}
                            onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                            offColor="#e2e2e2"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.row}>
                            <Icon.Entypo name="emoji-flirt" size={50} />
                            <Text style={styles.textStyle}>Apple Health</Text>
                        </View>
                        <ToggleSwitch
                            isOn={false}
                            onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                            offColor="#e2e2e2"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Integrations);