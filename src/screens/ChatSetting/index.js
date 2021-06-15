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
            val: false
        }

    }




    render() {
        const { data, val, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>

                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>Mute Chat</Text>
                        <ToggleSwitch
                            isOn={val}
                            onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                            offColor="#e2e2e2"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => this.setState({ val: isOn })}
                        />
                    </View>

                    <View style={{ padding: "5%", flexDirection: "column", borderBottomWidth: 0.5, borderColor: "#c0c0c0" }}>
                        <Text>You can mute this conversation if you no longer wish to recieve notifications when there are new messages.</Text>
                        <RNBounceable onPress={() => this.props.navigation.navigate('Media')} style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "5%", paddingTop: "5%" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon.MaterialIcons name="photo-library" size={25} color={"gray"} />
                                <Text style={{ marginLeft: 10, fontSize: 16, }}>Media</Text>
                            </View>
                            <Icon.AntDesign name="right" size={25} color={"gray"} />
                        </RNBounceable>
                    </View>
                    {/* <View>
                        <SlimButton title="Start" onPress={() => { }} />
                    </View> */}
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