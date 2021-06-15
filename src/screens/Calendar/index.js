import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Dimensions, Image } from 'react-native';
import { Container, FilterModal, Icon } from '../../components';
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';
import RNBounceable from '@freakycoder/react-native-bounceable';
import moment from 'moment';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Modal from 'react-native-modal';

class Calendar extends Component {
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
            <>
                <Container props={this.props}>
                    <View style={styles.container}>
                        <View style={styles.upperContainer}>
                            <Text style={styles.headingStyle}>{"Calendar"}</Text>
                        </View>
                        <View style={styles.lowerContentContainer}>
                            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

                            </ScrollView>

                        </View>

                    </View>

                </Container>
                <Modal isVisible={this.props.user.calenderModal}
                    onBackdropPress={() => this.props.authActions.calenderModal(!this.props.user.calenderModal)}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    style={{ justifyContent: 'flex-end', margin: 0 }} >
                    <View style={styles.modalLowerContainer}>
                        <View style={{ marginTop: "5%" }}>
                            <Text style={styles.headingTextStyle}>Company Calendar</Text>
                        </View>
                        <RNBounceable onPress={() => this.props.authActions.calenderModal(!this.props.user.calenderModal)} style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.backContainer}>
                                    <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={20} color={"white"} />
                                </View>
                                <Text style={[styles.headingTextStyle, { marginLeft: 10 }]}>Clear All</Text>
                            </View>
                            <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={25} color={"lightgray"} />
                        </RNBounceable>
                        <View style={{ marginTop: "5%" }}>
                            <Text style={styles.headingTextStyle}>My Calendar</Text>
                        </View>
                        <RNBounceable onPress={() => this.props.authActions.calenderModal(!this.props.user.calenderModal)} style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.backContainer}>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }} >T</Text>
                                </View>
                                <Text style={[styles.headingTextStyle, { marginLeft: 10 }]}>Clear All</Text>
                            </View>
                            <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={25} color={"lightgray"} />
                        </RNBounceable>
                        <View style={{ marginTop: "5%" }}>
                            <Text style={styles.headingTextStyle}>Trainer Calendar</Text>
                        </View>
                        <RNBounceable onPress={() => this.props.authActions.calenderModal(!this.props.user.calenderModal)} style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image source={require('../../assets/images/logo.png')} style={{ height: 45, width: 40 }} />
                                <Text style={[styles.headingTextStyle, { marginLeft: 10 }]}>Clear All</Text>
                            </View>
                            <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={25} color={"lightgray"} />
                        </RNBounceable>
                    </View>
                </Modal>
                
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
