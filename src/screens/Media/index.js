import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Container,Icon } from '../../components';
import { authActions } from '../../redux/actions/auth';

import styles from './style';

class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                        <View style={{ alignItems: "center", flex: 0.7 }}>
                            <View style={styles.iconContainer}>
                                <Icon.MaterialIcons name="photo-library" size={30} color={"white"} />
                            </View>
                            <View style={{ marginTop: "5%" }}>
                                <Text style={styles.textStyle}>Nothing to see here?</Text>
                            </View>
                            <View style={{ marginTop: "5%" }}>
                                <Text style={styles.textStyle1}>No media has been added to this conversation yet</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Media)
