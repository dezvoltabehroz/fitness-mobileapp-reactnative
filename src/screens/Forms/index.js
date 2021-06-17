import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, FilterModal, Icon } from '../../components';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import RNBounceable from '@freakycoder/react-native-bounceable';

import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';

import styles from './style';


class Forms extends Component {
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
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{"Forms"}</Text>
                    </View>
                    <View style={styles.lowerContentContainer}>
                        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                            <View style={{ marginHorizontal: "5%" }}>
                                <Input inputStyle={{ height: 40 }} placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                            </View>
                            <View style={styles.rowContainer} >
                                <Text style={styles.texStyle}>A to Z</Text>
                                <RNBounceable onPress={() => { this.setState({ filterModal: true }) }} style={styles.row}>
                                    <Icon.Feather name="filter" size={20} />
                                </RNBounceable>
                            </View>
                            <View style={{ alignItems: "center", flex: 0.7 }}>
                                <View style={styles.iconContainer}>
                                    <Icon.FontAwesome name="wpforms" size={30} color={"white"} />
                                </View>
                                <View style={{ marginTop: "5%" }}>
                                    <Text style={styles.textStyle}>Nothing to see here?</Text>
                                </View>
                                <View style={{ marginTop: "5%" }}>
                                    <Text style={styles.textStyle1}>No forms assigned yet</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <FilterModal isVisible={filterModal} hide={() => this.setState({ filterModal: false })} />
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Forms)
