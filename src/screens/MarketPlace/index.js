import React, { Component } from 'react'
import {
    View, Text, StatusBar
} from 'react-native'
import RNBounceable from '@freakycoder/react-native-bounceable';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Container, Icon, BrownButton } from "../../components";

import styles from './style';
import THEME from '../../assets/styles/theme.style'
class MarketPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: "",
            side: "",
            back: ""
        }
    }

    render() {
        const { data, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor={this.props.user.menuModal ? THEME.PRIMARY_BACKGROUND_COLOR : "#181818"} barStyle={"light-content"} />
                <View style={styles.container}>
                    <View style={{ flex: 0.7, marginTop: "12.5%" }}>
                        <View style={{ marginHorizontal: "7.5%", marginVertical: "5%" }}>
                            <Text style={styles.headingTextStyle}>MarketPlace</Text>
                        </View>
                        <View style={styles.rowContainer} >
                            <View>
                                <Text style={styles.textStyle}>Packages</Text>
                            </View>
                            <RNBounceable onPress={() => this.props.navigation.navigate('Packages')} style={styles.row}>
                                <Text style={styles.textStyle1} >View all</Text>
                                <Icon.Entypo name="chevron-small-right" size={20} color={'white'} />
                            </RNBounceable>
                        </View>
                        <View style={{ marginHorizontal: "15%" }}>
                            <Text style={styles.textStyle2}>Nothing added just yet!</Text>
                        </View>
                        <View style={styles.rowContainer} >
                            <View>
                                <Text style={styles.textStyle}>Credit Packages</Text>
                            </View>
                            <RNBounceable onPress={() => this.props.navigation.navigate('CreditPackages')} style={styles.row}>
                                <Text style={styles.textStyle1} >View all</Text>
                                <Icon.Entypo name="chevron-small-right" size={20} color={'white'} />
                            </RNBounceable>
                        </View>
                        <View style={{ marginHorizontal: "15%" }}>
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