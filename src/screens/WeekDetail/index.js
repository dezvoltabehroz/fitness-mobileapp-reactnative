import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import DropDownPicker from 'react-native-dropdown-picker';

import { Container, Icon } from '../../components';
import { authActions } from '../../redux/actions/auth';

import styles from './style';
import THEME from '../../assets/styles/theme.style'
import { ProgramServices } from '../../services';

class WeekDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            selectedWeek: [{ ...this.props.route.params.week[0] }],
            weeks: [],
            days: []
        }
    }

    componentDidMount = () => {
        const { userProgramId, week } = this.props?.route?.params;
        ProgramServices.getProgramWeekByUserId(userProgramId, this.props.user.userData.token, this.props.user.userData.userId)
            .then((res) => {
                console.log(res.data)
                let array = [...res.data];
                let userProgramWeekId;
                for (let index = 0; index < array.length; index++) {
                    array[index] = { ...array[index], label: "Week " + (index + 1) + "/" + array.length }
                    if (`${"Week " + (index + 1)}/4` == week[0].label) {
                        console.log(" array[index].id : ", array[index].id)
                        userProgramWeekId = array[index].id
                    }
                }
                this.getProgramWeekDays(userProgramWeekId);
                this.setState({ weeks: array })
            })
            .catch((err) => console.log(err.response))
    }

    getProgramWeekDays = (userProgramWeekId) => {
        const { userProgramId, week } = this.props?.route?.params;
        ProgramServices.getProgramWeekDaysByWeekId(userProgramId, userProgramWeekId, this.props.user.userData.token, this.props.user.userData.userId)
            .then((responseData) => {
                console.log(responseData.data)
                this.setState({ days: responseData.data, loading: false })

            })
            .catch((err) => console.log(err.response))
    }

    render() {
        const { weeks, selectedWeek, days } = this.state
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
                        {
                            weeks.length == 0 ?
                                null :
                                <DropDownPicker
                                    items={weeks}
                                    arrowColor={THEME.COLOR_BLACK}
                                    activeLabelStyle={styles.activeLabelStyle}
                                    activeItemStyle={styles.activeItemStyle}
                                    itemStyle={styles.itemStyle}
                                    labelStyle={styles.labelStyle}
                                    placeholder={this.props?.route?.params?.week[0]?.label}
                                    onClose={() => this.setState({ dropdownOpen4: false })}
                                    onOpen={() => this.setState({ dropdownOpen4: true })}
                                    containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen4 ? '21%' : 0 }}
                                    defaultValue={this.props.route.params.week.label}
                                    onChangeItem={(item) => {
                                        this.setState({
                                            loading: true,
                                            selectedWeek: item, item: item.value, index: item.value,
                                        }, this.getProgramWeekDays(item.id))
                                    }}
                                />}

                        {
                            days.map((item, index) => {
                                return (
                                    <>
                                        <View style={styles.headingContainer}>
                                            <Text style={styles.headingStyle}>{item.dayNoName}</Text>
                                        </View>
                                        <View style={item.isRestDay ? styles.blueContainer : item.isUpdateMeasurementAllowed ? styles.purpleContainer : styles.greenContainer}>
                                            <Text style={styles.textStyle}>{item.workOutAM}</Text>
                                        </View>
                                    </>
                                )

                            })
                        }
                        {/* <View style={styles.headingContainer}>
                            <Text style={styles.headingStyle}>Day 1</Text>
                        </View>
                        <View style={styles.greenContainer}>
                            <Text style={styles.textStyle}> (AM) BODY WEIGHT HIIT </Text>
                        </View>
                        <View style={styles.purpleContainer}>
                            <Text style={styles.textStyle}> Update Measurement</Text>
                        </View>
                        <View style={styles.purpleContainer}>
                            <Text style={styles.textStyle}> Update Progress Photo </Text>
                        </View>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingStyle}>Day 2</Text>
                        </View>
                        <View style={styles.greenContainer}>
                            <Text style={styles.textStyle}> (AM) BODY WEIGHT ABS </Text>
                        </View>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingStyle}>Day 3</Text>
                        </View>
                        <View style={styles.blueContainer}>
                            <Text style={styles.textStyle}> Rest day </Text>
                        </View>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingStyle}>Day 4</Text>
                        </View>
                        <View style={styles.greenContainer}>
                            <Text style={styles.textStyle}> (PM) PT SESSion </Text>
                        </View>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingStyle}>Day 5</Text>
                        </View>
                        <View style={styles.greenContainer}>
                            <Text style={styles.textStyle}> (AM) DUM/BARELL - LB HIIT </Text>
                        </View>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingStyle}>Day 6</Text>
                        </View>
                        <View style={styles.greenContainer}>
                            <Text style={styles.textStyle}> (AM) PT SESSion </Text>
                        </View>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingStyle}>Day 7</Text>
                        </View>
                        <View style={styles.blueContainer}>
                            <Text style={styles.textStyle}> Rest day </Text>
                        </View> */}
                    </ScrollView>
                </View>
            </Container>

        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekDetail)