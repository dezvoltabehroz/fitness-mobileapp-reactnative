import React, { Component } from 'react'
import {
    View, Text, StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Container, } from "../../components";
import { authActions } from '../../redux/actions/auth';

import styles from './style';
import THEME from '../../assets/styles/theme.style'

class MarketPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
        }
    }

    render() {
        const { data, } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor={this.props.user.menuModal ? THEME.PRIMARY_BACKGROUND_COLOR : "#181818"} barStyle={"light-content"} />
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textStyle2}>Nothing added just yet!</Text>
                        </View>
                    </View>
                </View>
            </Container >
        )
    }
}
const mapStateToProps = (state) => { return { user: state.authReducer || {} }; };

const mapDispatchToProps = dispatch => { return { authActions: bindActionCreators(authActions, dispatch) }; };

export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace);