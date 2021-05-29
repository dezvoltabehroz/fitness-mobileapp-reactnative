import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, LayoutAnimation,
    UIManager, TouchableOpacity, ScrollView, Animated, RefreshControl, Linking, Easing, Dimensions
} from 'react-native'
import { Container, MessageTextInput } from "../../components";
import { Input } from '../../components/Input/Input.component';
import styles from './style';
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { FlatList } from 'react-native';
import Modal from 'react-native-modal';
import moment from "moment"
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

class MyProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }



    render() {
        const { } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <ScrollView>
                        <Input label="First Name" placeholder="First Name"  />
                        <Input label="Last Name" placeholder="Last Name" />
                        <Input label="Address 1" placeholder="Address 1" />
                        <Input label="Address 2" placeholder="Address 2" />
                        <Input label="Town/City" placeholder="Town/City" />
                        <Input label="County/State" placeholder="County/State" />
                        <Input label="Post Code/Zip Code" placeholder="Post Code/Zip Code" />
                        <MessageTextInput label="Goal" placeholder="Goal" />
                    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);