import React, { Component } from 'react'
import {
    View,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Container, MessageTextInput, Button } from "../../components";
import { Input } from '../../components/Input/Input.component';
import { authActions } from '../../redux/actions/auth';

import styles from './style';

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
                    <ScrollView contentContainerStyle={{ paddingBottom: "20%" }}>
                        <Input label="First Name" placeholder="First Name" />
                        <Input label="Last Name" placeholder="Last Name" />
                        <Input label="Address 1" placeholder="Address 1" />
                        <Input label="Address 2" placeholder="Address 2" />
                        <Input label="Town/City" placeholder="Town/City" />
                        <Input label="County/State" placeholder="County/State" />
                        <Input label="Post Code/Zip Code" placeholder="Post Code/Zip Code" />
                        <MessageTextInput label="Goal" placeholder="Goal" />
                        <View style={styles.buttonContainer}>
                            <Button.SlimButton title=" Update Details" onPress={() => this.props.navigation.replace('Home')} />
                        </View>
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