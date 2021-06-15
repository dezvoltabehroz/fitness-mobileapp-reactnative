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
        const barWidth = Dimensions.get('screen').width * 0.9;
        const progressCustomStyles = {
            backgroundColor: '#E8E8E8',
            borderRadius: 0,
            borderColor: '#E8E8E8',
            height: 30
        };
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
