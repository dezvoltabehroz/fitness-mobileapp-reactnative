import moment from 'moment';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import ProgressCircle from 'react-native-progress-circle'
import RNBounceable from '@freakycoder/react-native-bounceable';

import { Container, Icon, UpdateWeightModal, Button, Loader } from '../../components';
import { authActions } from '../../redux/actions/auth';
import { LOGO, route } from '../../lib/utils/constants';
import { renderSeperator } from '../../lib/utils/global';

import THEME from '../../assets/styles/theme.style'
import styles from './style';
import { Input } from '../../components/Input/Input.component';
import DropDownPicker from 'react-native-dropdown-picker';
import { ProgramServices } from '../../services';

class ProgramDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: true,
            nutrition: false,
            updateModal: false,
            update: false,
            loading: true,
            weight: "",
            weeks: [],
            data: {},
            weights: [
                {
                    id: 1,
                    label: "Kg",
                    value: "Kg"
                },
                {
                    id: 2,
                    label: "Lbs",
                    value: "Lbs"
                }],
            totalNutritionDays: "",
            totalWorkoutDays: "",
            completedNutritionDays: "",
            completedWorkoutdays: "",
            selectedValue: {
                id: 1,
                label: "Kg",
                value: "Kg"
            },
        }
    }
    componentDidMount = () => {
        const data = this.props?.route?.params?.data;
        ProgramServices.getUserCircumference(data.programId, data.usersProgramId, this.props.user.userData.token, this.props.user.userData.userId)
            .then((res) => {
                this.setState({ data: res.data[0], loading: false })
            })
            .catch((err) => console.log(err.response))
    }

    _renderItem = (item, index) => {
        return (
            <RNBounceable onPress={() => this.props.navigation.navigate(route.WEEK_DETAIL, {
                heading: this.props.route.params.heading,
                userProgramId: this.state.data.usersProgramId,
                week: [{
                    label: "Week " + (index + 1) + "/" + this.state.data.weeks.length,
                }],
                length: this.state.data.weeks.length
            })} style={styles.rowContainer}>
                <View style={styles.rowStyle}>
                    <View style={{ marginHorizontal: "3%" }}>
                        <Text>{index + 1}</Text>
                    </View>
                    <View style={[styles.rowStyle, { justifyContent: "space-between" }]}>
                        {
                            item.days.map((element, i) => {
                                return (
                                    <View style={{ marginHorizontal: "3%" }}>
                                        {element.exerciseDate == moment().format('Do MMM, YYYY') ?
                                            <Icon.MaterialIcons name="radio-button-checked" size={25} color={THEME.BUTTON_COLOR} />
                                            :
                                            <View >
                                                {
                                                    element.isCompleted ?
                                                        <Icon.MaterialCommunityIcons name="checkbox-blank-circle" size={20} color={THEME.BUTTON_COLOR} />
                                                        :
                                                        <Icon.MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="lightgray" />
                                                }
                                            </View>}
                                    </View>
                                )

                            })
                        }
                    </View>
                </View>
                <View>
                    <Icon.Entypo name="chevron-right" size={20} />
                </View>
            </RNBounceable >
        )
    }

    render() {
        const { workouts, nutrition, loading, updateModal, update, weights, selectedValue, weight, data } = this.state;
        const { heading } = this.props.route.params;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    {
                        loading ?
                            <Loader />
                            :
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: "10%", paddingBottom: 120 }} >


                                <Text style={styles.headingStyle}>Duration </Text>
                                <View style={styles.iconContainer}>
                                    <Icon.MaterialCommunityIcons name="checkbox-marked-circle" size={100} color={"#96CC39"} />
                                </View>

                                <View style={styles.rowContainer}>
                                    <Text>Start Date</Text>
                                    <Text>{moment(data.startDate).format('Do MMM YY')}</Text>
                                </View>
                                <View style={styles.rowContainer}>
                                    <Text>Completion</Text>
                                    <Text>{moment(data.endDate).format('Do MMM YY')}</Text>
                                </View>
                                <View style={styles.rowStyle}>
                                    <Icon.MaterialCommunityIcons name="calendar-month" size={35} />
                                    <Text style={styles.headingTextStyle}>Weeks</Text>
                                </View>


                                <View style={{ marginVertical: "5%" }}>

                                    <FlatList
                                        data={data?.weeks}
                                        ItemSeparatorComponent={renderSeperator}
                                        renderItem={({ index, item }) => this._renderItem(item, index)}
                                    />

                                </View>
                                <View style={styles.rowContainer}>
                                    <View>
                                        <Text style={styles.headingStyle}>Latest Weight </Text>
                                    </View>
                                    <RNBounceable onPress={() => this.setState({ updateModal: true })}>
                                        <Icon.Ionicons name="ellipsis-horizontal" size={30} color="lightgray" />
                                    </RNBounceable>
                                </View>
                                {
                                    update ?
                                        <View >
                                            <View style={[styles.generalMargin2, styles.rowContainer1]}>
                                                <View style={{ flex: 0.5, marginBottom: '7.5%' }}>
                                                    <Input label="Kg's and grams" keyboardType={"number-pad"} placeholder="0.00" onChangeText={(Value) => this.setState({ weight: Value })} value={weight} />
                                                </View>
                                                <View style={{ flex: 0.5 }}>
                                                    <DropDownPicker
                                                        items={weights}
                                                        arrowColor={THEME.COLOR_BLACK}
                                                        activeLabelStyle={styles.activeLabelStyle}
                                                        activeItemStyle={styles.activeItemStyle}
                                                        itemStyle={styles.itemStyle}
                                                        labelStyle={styles.labelStyle}
                                                        placeholder="Select Value"
                                                        onClose={() => this.setState({ dropdownOpen1: false })}
                                                        onOpen={() => this.setState({ dropdownOpen1: true })}
                                                        globalTextStyle={{ color: "#000000", textAlign: "left", }}
                                                        containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen1 ? '21%' : 0 }}
                                                        defaultValue={selectedValue?.label}

                                                        onChangeItem={(item) => {
                                                            this.setState({
                                                                selectedValue: item, item: item.value, index: item.value,
                                                            })
                                                        }}
                                                    />
                                                </View>


                                            </View>
                                            <View style={styles.buttonContainer}>
                                                <Button.BrownButton title={"Update Weight"} onPress={() => this.setState({ update: false })} />
                                            </View>
                                        </View>
                                        :
                                        <View style={styles.latestCircleContainer}>
                                            <ProgressCircle
                                                percent={0}
                                                radius={70}
                                                borderWidth={8}
                                                color="#3399FF"
                                                shadowColor="lightgray"
                                                bgColor="#fff"
                                            >
                                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{weight != "" ? `${weight} ${selectedValue.label}` : `${data?.startingWeight - data?.weightChange}.00kg`}</Text>
                                            </ProgressCircle>
                                        </View>}
                                <View style={styles.rowContainer}>
                                    <Text>Starting Weight</Text>
                                    <Text >{data?.startingWeight}.00kg</Text>
                                </View>
                                <View style={styles.rowContainer}>
                                    <Text>Weight change</Text>
                                    <Text>{data?.weightChange}.00kg</Text>
                                </View>
                                <Text style={styles.headingStyle}>Tracker (Workouts)</Text>
                                <View style={styles.latestCircleContainer}>
                                    {
                                        workouts ?
                                            <ProgressCircle
                                                percent={data.completedWorkouts / data.totalWorkouts * 100 == 0 ? 1 : data.completedWorkouts / data.totalWorkouts * 100}
                                                radius={80}
                                                borderWidth={8}
                                                color="#96CC39"
                                                shadowColor="#fff"
                                                bgColor="#fff"    >
                                                <ProgressCircle
                                                    percent={data.totalWorkouts / data.missedWorkouts * 100}
                                                    radius={75}
                                                    borderWidth={8}
                                                    color="#3399FF"
                                                    shadowColor="#fff"
                                                    bgColor="#fff">
                                                    <Text>{`Completed: ${data.completedWorkouts}/${data.totalWorkouts}`}</Text>
                                                    <Text>{`Missed: ${data.missedWorkouts}/${data.totalWorkouts}`}</Text>
                                                </ProgressCircle>
                                            </ProgressCircle>
                                            :
                                            <View style={{ marginVertical: 60 }}>
                                                <Text>{`Completed: ${data.completedNutritions}/${data.totalNutritions}`}</Text>
                                                <Text>{'No nurition plans were assinged'}</Text>
                                            </View>
                                    }
                                </View>
                                <View style={styles.buttonContainer}>
                                    <RNBounceable style={nutrition ? styles.simpleStyle : styles.colorStyle} onPress={() => this.setState({ nutrition: false, workouts: true })}>
                                        <Text style={nutrition ? styles.colorText : styles.simpleText}>Workouts</Text>
                                    </RNBounceable>
                                    <RNBounceable style={workouts ? styles.simpleStyle : styles.colorStyle} onPress={() => this.setState({ workouts: false, nutrition: true })}>
                                        <Text style={workouts ? styles.colorText : styles.simpleText}>Nutrition </Text>
                                    </RNBounceable>
                                </View>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.headingStyle}>Progress Photos</Text>
                                    <View style={styles.rowStyle}>
                                        <Text>View all</Text>
                                        <Icon.Entypo name="chevron-right" size={20} />
                                    </View>
                                </View>

                                {
                                    data.progressPhoto.map((item, index) => {
                                        return (
                                            <View style={styles.progressPhotoConatiner}>
                                                <View style={styles.rowContainer}>
                                                    <Text style={styles.headingText}>{moment(item.date).format('Do MMM YYYY')}</Text>
                                                    <View style={styles.rowStyle}>
                                                        <Icon.Ionicons name="ellipsis-horizontal" size={20} color={'lightgray'} />
                                                    </View>
                                                </View>
                                                <View style={styles.buttonContainer}>
                                                    <View style={styles.imageContainer}>
                                                        <Image source={{ uri: item.frontPhoto }} style={styles.imageStyle} />
                                                        <Text>Front</Text>
                                                    </View>
                                                    <View style={styles.imageContainer}>
                                                        <Image source={{ uri: item.backPhoto }} style={styles.imageStyle} />
                                                        <Text>Back</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                    }

                </View>
                <UpdateWeightModal isVisible={updateModal} onUpdate={() => this.setState({ updateModal: false, update: true })} title={heading} hide={() => this.setState({ updateModal: false })} />
            </Container >
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramDetail)