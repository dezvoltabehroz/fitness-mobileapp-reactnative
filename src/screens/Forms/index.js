import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Dimensions } from 'react-native';
import { Container, Icon } from '../../components';
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';
import RNBounceable from '@freakycoder/react-native-bounceable';
import moment from 'moment';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class Files extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 100
        }
    }

    render() {
        const { progress, reportModal, issue } = this.state;
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
                                <RNBounceable onPress={() => { }} style={styles.row}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Files)
