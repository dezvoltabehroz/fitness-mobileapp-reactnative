import React, { Component } from "react";
import { Alert, FlatList, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import RNBounceable from "@freakycoder/react-native-bounceable";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import { Button, Container } from '../../components';
import { Input } from "../../components/Input/Input.component";
import { Icon } from "../../components";
import { authActions } from '../../redux/actions/auth';

import styles from './style';
import { ProgramServices, WorkoutsServices } from "../../services";

class Measurement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMeasurementType: {
                id: 1,
                label: "Weight & Circumferences",
                value: "Weight & Circumferences"
            },
            showDatePicker: false,
            date: moment(),
            measurementType: [{
                id: 1,
                label: "Weight & Circumferences",
                value: "Weight & Circumferences"
            },
            {
                id: 2,
                label: "Body Fat Measurement",
                value: "Body Fat Measurement"
            },
            {
                id: 3,
                label: "Vital Stats",
                value: "Vital Stats"
            }],
            previousMeasurement: [],
            btnLoading: false
        }
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        const { userData } = this.props.user
        WorkoutsServices.getOldMeasurements(userData.token, userData.userId)
            .then((res) => {
                this.setState({ previousMeasurement: res.data, loading: false, });
            })
            .catch((err) => {
                this.setState({ loading: false });
                console.log(err.response.data)
            })
    }

    hideDatePicker = () => {
        this.setState({ showDatePicker: !showDatePicker });
    };

    handleConfirm = (selectedDate) => {
        var date = moment(selectedDate).format('YYYY-MM-DD')
        this.setState({ date: date });
        this.hideDatePicker();
    };

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.headingStyle}>{moment(item.dateTaken).format('Do MMM, YYYY')}</Text>
                <View style={styles.rowStyle}>
                    <View style={styles.columnStyle}>

                    </View>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle1}>{'Left'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle1}>{'Right'}</Text>
                    </View>
                </View>
                <View style={styles.rowStyle1}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{'Weight (kg)'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.weight}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{' '}</Text>
                    </View>
                </View>
                <View style={styles.rowStyle1}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{'Neck (cm)'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.neckLeft}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.neckRight}</Text>
                    </View>
                </View>
                <View style={styles.rowStyle1}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{'Chest (cm)'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.chestLeft}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.chestRight}</Text>
                    </View>
                </View>
                <View style={styles.rowStyle1}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{'Arm (cm)'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.armLeft}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.armRight}</Text>
                    </View>
                </View>
                <View style={styles.rowStyle1}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{'Waist (cm)'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.waistLeft}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.waistRight}</Text>
                    </View>
                </View>
                <View style={styles.rowStyle1}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{'Hips (cm)'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.hipsLeft}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.hipsRight}</Text>
                    </View>
                </View>
                <View style={styles.rowStyle1}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{'Thigh (cm)'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.thighLeft}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.thighRight}</Text>
                    </View>
                </View>
                <View style={styles.rowStyle1}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.titleStyle}>{'Calft (cm)'}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.calfLeft}</Text>
                    </View>
                    <View style={styles.columnStyle}>
                        <Text>{item.calfRight}</Text>
                    </View>
                </View>
            </View>
        )
    }

    handleUpdateWeight1 = () => {
        this.setState({ btnLoading: true });
        const { neckLeft, neckRight, chestLeft, armLeft, armRight, waistLeft, waistRight, hipsLeft, hipsRight, thighLeft, thighRight, calfLeft, calfRight } = this.state;
        if (neckLeft && neckRight && chestLeft && armLeft && armRight && waistLeft && waistRight && hipsLeft && hipsRight && thighLeft && thighRight && calfLeft && calfRight) {
            let data = {
                "userId": parseInt(this.props.user.userData.userId),
                "dateTaken": moment().format('YYYY-MM-DD'),
                "weight": parseInt(this.state.weight),
                "neckLeft": this.state.neckLeft ? parseInt(this.state.neckLeft) : 0,
                "neckRight": this.state.neckRight ? parseInt(this.state.neckRight) : 0,
                "chestLeft": this.state.chestLeft ? parseInt(this.state.chestLeft) : 0,
                "chestRight": this.state.chestRight ? parseInt(this.state.chestRight) : 0,
                "armLeft": this.state.armLeft ? parseInt(this.state.armLeft) : 0,
                "armRight": this.state.armRight ? parseInt(this.state.armRight) : 0,
                "waistLeft": this.state.waistLeft ? parseInt(this.state.waistLeft) : 0,
                "waistRight": this.state.waistRight ? parseInt(this.state.waistRight) : 0,
                "hipsLeft": this.state.hipsLeft ? parseInt(this.state.hipsLeft) : 0,
                "hipsRight": this.state.hipsRight ? parseInt(this.state.hipsRight) : 0,
                "thighLeft": this.state.thighLeft ? parseInt(this.state.thighLeft) : 0,
                "thighRight": this.state.thighRight ? parseInt(this.state.thighRight) : 0,
                "calfLeft": this.state.calfLeft ? parseInt(this.state.calfLeft) : 0,
                "calfRight": this.state.calfRight ? parseInt(this.state.calfRight) : 0
            }
            console.log("data : ", data)
            ProgramServices.updateUserMeasurements(data, this.props.user.userData.token, this.props.user.userData.userId)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ btnLoading: false, }, () => this.props.navigation.goBack())
                })
                .catch((err) => { Alert.alert(err.response.data.responseMessage); console.log(err.response) })
        }
        else {
            Alert.alert('Please fill all the fields')
        }
    }

    handleUpdateWeight2 = () => {
        this.setState({ btnLoading: true });
        const { chestLeftFat,
            chestRightFat,
            tricepLeftFat,
            tricepRightFat,
            bicepLeftFat,
            bicepRightFat,
            subscapularLeftFat,
            subscapularRightFat,
            midaxillaryLeftFat,
            midaxillaryRightFat,
            abdominalLeftFat,
            abdominalRightFat,
            suparailicLeftFat,
            suparailicRightFat,
            thighRightFat,
            thighLeftFat,
            bodyFatLeftTotal,
            bodyFatRightTotal,
            bodyFatTotal, } = this.state;
        if (chestLeftFat &&
            chestRightFat &&
            tricepLeftFat &&
            tricepRightFat &&
            bicepLeftFat &&
            bicepRightFat &&
            subscapularLeftFat &&
            subscapularRightFat &&
            midaxillaryLeftFat &&
            midaxillaryRightFat &&
            abdominalLeftFat &&
            abdominalRightFat &&
            suparailicLeftFat &&
            suparailicRightFat &&
            thighRightFat &&
            thighLeftFat &&
            bodyFatLeftTotal &&
            bodyFatRightTotal &&
            bodyFatTotal) {
            let data = {
                "userId": parseInt(this.props.user.userData.userId),
                "dateTaken": moment().format('YYYY-MM-DD'),
                "weight": parseInt(this.state.weight),
                "tricepLeft": this.state.neckLeft ? parseInt(this.state.neckLeft) : 0,
                "tricepRight": this.state.neckRight ? parseInt(this.state.neckRight) : 0,
                "chestLeft": this.state.chestLeft ? parseInt(this.state.chestLeft) : 0,
                "chestRight": this.state.chestRight ? parseInt(this.state.chestRight) : 0,
                "bicepLeft": this.state.armLeft ? parseInt(this.state.armLeft) : 0,
                "bicepRight": this.state.armRight ? parseInt(this.state.armRight) : 0,
                "subscapularLeft": this.state.waistLeft ? parseInt(this.state.waistLeft) : 0,
                "subscapularRight": this.state.waistRight ? parseInt(this.state.waistRight) : 0,
                "midaxillayLeft": this.state.hipsLeft ? parseInt(this.state.hipsLeft) : 0,
                "midaxillayRight": this.state.hipsRight ? parseInt(this.state.hipsRight) : 0,
                "thighLeft": this.state.thighLeft ? parseInt(this.state.thighLeft) : 0,
                "thighRight": this.state.thighRight ? parseInt(this.state.thighRight) : 0,
                "abdominalLeft": this.state.calfLeft ? parseInt(this.state.calfLeft) : 0,
                "abdominalRight": this.state.calfRight ? parseInt(this.state.calfRight) : 0,
                "suprailiacLeft": this.state.thighLeft ? parseInt(this.state.thighLeft) : 0,
                "suprailiacRight": this.state.thighRight ? parseInt(this.state.thighRight) : 0,
                "bodyFatLeft": this.state.calfLeft ? parseInt(this.state.calfLeft) : 0,
                "bodyFatRight": this.state.calfRight ? parseInt(this.state.calfRight) : 0
            }
            console.log("data : ", data)
            ProgramServices.updateUserBodyFats(data, this.props.user.userData.token, this.props.user.userData.userId)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ btnLoading: false, }, () => this.props.navigation.goBack())
                })
                .catch((err) => { Alert.alert(err.response.data.responseMessage); console.log(err.response) })
        } else {
            Alert.alert('Please fill all the fields')
        }
    }



    handleUpdateWeight3 = () => {
        this.setState({ btnLoading: true });
        const { massVital, waterVital, heightVital, hrVital, systolicVital, diatolicVital, bodyFatVital } = this.state;
        if (massVital && waterVital && heightVital && hrVital && systolicVital && diatolicVital && bodyFatVital) {
            let data = {

                "userId": parseInt(this.props.user.userData.userId),
                "dateTaken": moment().format('YYYY-MM-DD'),
                "dateTaken": "string",
                "muscleMass": this.state.massVital ? parseInt(this.state.massVital) : 0,
                "water": this.state.waterVital ? parseInt(this.state.waterVital) : 0,
                "height": this.state.heightVital ? parseInt(this.state.heightVital) : 0,
                "restingHeartRate": this.state.hrVital ? parseInt(this.state.hrVital) : 0,
                "bloodPressureSystolic": this.state.systolicVital ? parseInt(this.state.systolicVital) : 0,
                "bloodPressureDiastolic": this.state.diatolicVital ? parseInt(this.state.diatolicVital) : 0,
                "bodyType": this.state.bodyFatVital ? parseInt(this.state.bodyFatVital) : 0,
                "trainingFrequency": "string",

            }
            console.log("data : ", data)
            ProgramServices.updateUserVitalStats(data, this.props.user.userData.token, this.props.user.userData.userId)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ btnLoading: false, }, () => this.props.navigation.goBack())
                })
                .catch((err) => { Alert.alert(err.response.data.responseMessage); console.log(err.response) })
        }
        else {
            Alert.alert('Please fill all the fields')
        }

    }

    render() {
        const { measurementType, date, showDatePicker, weight, neckLeft, neckRight, armRight, armLeft, chestLeft, chestRight,
            waistLeft, waistRight, hipsLeft, hipsRight, thighLeft, thighRight, calfLeft, calfRight,
            massVital,
            waterVital,
            heightVital,
            hrVital,
            systolicVital,
            diatolicVital,
            bodyFatVital,
            chestLeftFat,
            chestRightFat,
            tricepLeftFat,
            tricepRightFat,
            bicepLeftFat,
            bicepRightFat,
            subscapularLeftFat,
            subscapularRightFat,
            midaxillaryLeftFat,
            midaxillaryRightFat,
            abdominalLeftFat,
            abdominalRightFat,
            suparailicLeftFat,
            suparailicRightFat,
            thighRightFat,
            thighLeftFat,
            bodyFatLeftTotal,
            bodyFatRightTotal,
            bodyFatTotal,
        } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container} >
                    <ScrollView contentContainerStyle={{ paddingTop: "5%", paddingBottom: "20%" }}>


                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Body weights</Text>
                            <DropDownPicker
                                items={measurementType}
                                arrowColor="#000000"
                                activeLabelStyle={{
                                    color: "white",
                                    fontWeight: "bold"
                                }}
                                labelStyle={{
                                    color: "black",
                                    // fontWeight: "bold"
                                }}
                                activeItemStyle={{
                                    backgroundColor: '#544b4c',
                                }}
                                dropDownStyle={{
                                    paddingHorizontal: 0
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                    paddingHorizontal: "5%",
                                }}
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen2: false })}
                                onOpen={() => this.setState({ dropdownOpen2: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen2 ? '31%' : 0 }}
                                defaultValue={this.state.selectedMeasurementType ? this.state.selectedMeasurementType.label : ""}
                                onChangeItem={(item) => {
                                    console.log(item)
                                    this.setState({
                                        selectedMeasurementType: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Date measurements taken*</Text>
                            <RNBounceable onPress={() => this.setState({ showDatePicker: !showDatePicker })} style={styles.dateContainer}>
                                <Icon.Ionicons name="calendar-sharp" size={20} />
                                <Text style={styles.dateTextStyle} >{moment(date).format('Do MMM, YYYY')} </Text>
                            </RNBounceable>
                        </View>
                        {
                            this.state.selectedMeasurementType.label == 'Weight & Circumferences' ?
                                <>
                                    <View style={styles.generalMargin1}>
                                        <Input label="New Weight (kg)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ weight: text })} value={weight} placeholder="New Weight (kg)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>kg</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Neck Left (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ neckLeft: text })} placeholder="Neck Left (cm)" value={neckLeft} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Neck Right (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ neckRight: text })} placeholder="Neck Right (cm)" value={neckRight} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Chest Left (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ chestLeft: text })} placeholder="Chest Left (cm)" value={chestLeft} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Chest Right (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ chestRight: text })} placeholder="Chest Right (cm)" value={chestRight} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Arms Left (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ armLeft: text })} placeholder="Arms Left (cm)" value={armLeft} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Arms Right (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ armRight: text })} placeholder="Arms Right (cm)" value={armRight} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Waist Left (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ waistLeft: text })} placeholder="Waist Left (cm)" value={waistLeft} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Waist Right (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ waistRight: text })} placeholder="Waist Right (cm)" value={waistRight} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Hips Left (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ hipsLeft: text })} placeholder="Hips Left (cm)" value={hipsLeft} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Hips Right (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ hipsRight: text })} placeholder="Hips Right (cm)" value={hipsRight} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Thigh left (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ thighLeft: text })} placeholder="Thigh left (cm)" value={thighLeft} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Thigh Right (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ thighRight: text })} placeholder="Thigh Right (cm)" value={thighRight} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Calf Left (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ calfLeft: text })} placeholder="Calf Left (cm)" value={calfLeft} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Calf Right (cm)" keyboardType={"number-pad"} onChangeText={(text) => this.setState({ calfRight: text })} placeholder="Calf Right (cm)" value={calfRight} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button.BrownButton loading={this.state.btnLoading} title="Save" onPress={() => { this.handleUpdateWeight1() }} />
                                    </View>

                                </>
                                :
                                null
                        }
                        {
                            this.state.selectedMeasurementType.label == 'Body Fat Measurement' ?
                                <>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Chest Left (cm)" placeholder="Chest Left (cm)" keyboardType={"number-pad"} value={chestLeftFat} onChangeText={(chestLeftFat) => this.setState({ chestLeftFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Chest Right (cm)" placeholder="Chest Right (cm)" keyboardType={"number-pad"} value={chestRightFat} onChangeText={(chestRightFat) => this.setState({ chestRightFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Tricep Left (cm)" placeholder="Tricep Left (cm)" keyboardType={"number-pad"} value={tricepLeftFat} onChangeText={(tricepLeftFat) => this.setState({ tricepLeftFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Tricep Right (cm)" placeholder="Tricep Right (cm)" keyboardType={"number-pad"} value={tricepRightFat} onChangeText={(tricepRightFat) => this.setState({ tricepRightFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Bicep Left (cm)" placeholder="Bicep Left (cm)" keyboardType={"number-pad"} value={bicepLeftFat} onChangeText={(bicepLeftFat) => this.setState({ bicepLeftFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Bicep Right (cm)" placeholder="Bicep Right (cm)" keyboardType={"number-pad"} value={bicepRightFat} onChangeText={(bicepRightFat) => this.setState({ bicepRightFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Subscapular Left (cm)" placeholder="Subscapular Left (cm)" keyboardType={"number-pad"} value={subscapularLeftFat} onChangeText={(subscapularLeftFat) => this.setState({ subscapularLeftFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Subscapular Right (cm)" placeholder="Subscapular Right (cm)" keyboardType={"number-pad"} value={subscapularRightFat} onChangeText={(subscapularRightFat) => this.setState({ subscapularRightFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Midaxillary Left (cm)" placeholder="Midaxillary Left (cm)" keyboardType={"number-pad"} value={midaxillaryLeftFat} onChangeText={(midaxillaryLeftFat) => this.setState({ midaxillaryLeftFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Midaxillary Right (cm)" placeholder="Midaxillary Right (cm)" keyboardType={"number-pad"} value={midaxillaryRightFat} onChangeText={(midaxillaryRightFat) => this.setState({ midaxillaryRightFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Abdominal Left (cm)" placeholder="Abdominal Left (cm)" keyboardType={"number-pad"} value={abdominalLeftFat} onChangeText={(abdominalLeftFat) => this.setState({ abdominalLeftFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Abdominal Right (cm)" placeholder="Abdominal Right (cm)" keyboardType={"number-pad"} value={abdominalRightFat} onChangeText={(abdominalRightFat) => this.setState({ abdominalRightFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Suprailiac Left (cm)" placeholder="Suprailiac Left (cm)" keyboardType={"number-pad"} value={suparailicLeftFat} onChangeText={(suparailicLeftFat) => this.setState({ suparailicLeftFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Suprailiac Right (cm)" placeholder="Suprailiac Right (cm)" keyboardType={"number-pad"} value={suparailicRightFat} onChangeText={(suparailicRightFat) => this.setState({ suparailicRightFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Thigh left (cm)" placeholder="Thigh left (cm)" keyboardType={"number-pad"} value={thighLeftFat} onChangeText={(thighLeftFat) => this.setState({ thighLeftFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Thigh Right (cm)" placeholder="Thigh Right (cm)" keyboardType={"number-pad"} value={thighRightFat} onChangeText={(thighRightFat) => this.setState({ thighRightFat })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Body Fat % Left" placeholder="Body Fat % Left" keyboardType={"number-pad"} value={bodyFatLeftTotal} onChangeText={(bodyFatLeftTotal) => this.setState({ bodyFatLeftTotal })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                        <Input label="Body Fat % Right" placeholder="Body Fat % Right" keyboardType={"number-pad"} value={bodyFatRightTotal} onChangeText={(bodyFatRightTotal) => this.setState({ bodyFatRightTotal })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Body Fat % Total" placeholder="Body Fat % Total" keyboardType={"number-pad"} value={bodyFatTotal} onChangeText={(bodyFatTotal) => this.setState({ bodyFatTotal })} rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button.BrownButton title="Save" onPress={() => { this.handleUpdateWeight2() }} />
                                    </View>

                                </>
                                :
                                null
                        }
                        {
                            this.state.selectedMeasurementType.label == 'Vital Stats' ?
                                <>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Muscle Mass (kg)" keyboardType={"number-pad"} value={massVital} onChangeText={(massVital) => this.setState({ massVital })} placeholder="Muscle Mass (kg)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>kg</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Water (%)" keyboardType={"number-pad"} value={waterVital} onChangeText={(waterVital) => this.setState({ waterVital })} placeholder="Water (%)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Height (cm)" keyboardType={"number-pad"} value={heightVital} onChangeText={(heightVital) => this.setState({ heightVital })} placeholder="Height (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Resting HR" keyboardType={"number-pad"} value={hrVital} onChangeText={(hrVital) => this.setState({ hrVital })} placeholder="Resting HR" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>BPM</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="BP Systolic" keyboardType={"number-pad"} value={systolicVital} onChangeText={(systolicVital) => this.setState({ systolicVital })} placeholder="BP Systolic" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>mmHg</Text></View>} />
                                        <Input label="BP Diatolic" keyboardType={"number-pad"} value={diatolicVital} onChangeText={(diatolicVital) => this.setState({ diatolicVital })} placeholder="BP Diatolic" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>mmHg</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Body Fat % Total" keyboardType={"number-pad"} value={bodyFatVital} onChangeText={(bodyFatVital) => this.setState({ bodyFatVital })} placeholder="Body Fat % Total" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button.BrownButton title="Save" onPress={() => { this.handleUpdateWeight3() }} />
                                    </View>

                                </>
                                :
                                null
                        }
                        <View style={styles.generalMargin3} >
                            <Text style={styles.headingTextStyle}>Previous Measurement</Text>
                        </View>
                        <FlatList data={this.state.previousMeasurement} renderItem={this.renderItem} />

                    </ScrollView>
                </View>
                <DateTimePickerModal
                    isVisible={showDatePicker}
                    onConfirm={(date) => this.handleConfirm(date)}
                    onCancel={() => this.hideDatePicker}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Measurement);