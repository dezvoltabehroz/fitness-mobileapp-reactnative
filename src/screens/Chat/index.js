import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Dimensions } from 'react-native';
import { Container, FilterModal, Icon } from '../../components';
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';
import RNBounceable from '@freakycoder/react-native-bounceable';
import moment from 'moment';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 100,
            filterModal: false
        }
    }

    render() {
        const { progress, reportModal, issue, filterModal } = this.state;
       
        return (
            <View style={styles.container}>


            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Media)
