import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, Dimensions, ScrollView
} from 'react-native'
import { Container, Icon, BrownButton } from "../../components";
import styles from './style';
import { Input } from '../../components/Input/Input.component';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import ToggleSwitch from 'toggle-switch-react-native'
import { StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
import THEME from '../../assets/styles/theme.style'
import moment from 'moment';
import RNBounceable from '@freakycoder/react-native-bounceable';
class MarketPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: "",
            side: "",
            back: ""
        }

    }

    l



    render() {
        const { data, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor={this.props.user.menuModal ? THEME.PRIMARY_BACKGROUND_COLOR : "#181818"} barStyle={"light-content"} />
                <View style={styles.container}>
                    <View style={{ flex: 0.7, marginTop: "12.5%" }}>
                        <View style={{ marginHorizontal: "15%", alignItems: "center" }}>
                            <Text style={styles.textStyle2}>Nothing added just yet!</Text>
                        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace);