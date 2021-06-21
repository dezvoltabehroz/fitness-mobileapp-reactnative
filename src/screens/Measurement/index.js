import React, { Component } from "react";
import { ScrollView, Text, View } from 'react-native';
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
            }]
        }
    }

    hideDatePicker = () => {
        this.setState({ showDatePicker: !showDatePicker });
    };

    handleConfirm = (selectedDate) => {
        var date = moment(selectedDate).format('YYYY-MM-DD')
        this.setState({ date: date });
        this.hideDatePicker();
    };

    render() {
        const { measurementType, date, showDatePicker } = this.state;
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
                                        <Input label="New Weight (kg)" placeholder="New Weight (kg)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>kg</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Neck Left (cm)" placeholder="Neck Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Neck Right (cm)" placeholder="Neck Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Chest Left (cm)" placeholder="Chest Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Chest Right (cm)" placeholder="Chest Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Arms Left (cm)" placeholder="Arms Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Arms Right (cm)" placeholder="Arms Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Waist Left (cm)" placeholder="Waist Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Waist Right (cm)" placeholder="Waist Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Hips Left (cm)" placeholder="Hips Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Hips Right (cm)" placeholder="Hips Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Thigh left (cm)" placeholder="Thigh left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Thigh Right (cm)" placeholder="Thigh Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Calf Left (cm)" placeholder="Calf Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Calf Right (cm)" placeholder="Calf Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button.BrownButton title="Save" onPress={() => { }} />
                                    </View>
                                    <View style={styles.generalMargin3} >
                                        <Text style={styles.headingTextStyle}>Previous Measurement</Text>
                                    </View>
                                </>
                                :
                                null
                        }
                        {
                            this.state.selectedMeasurementType.label == 'Body Fat Measurement' ?
                                <>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Chest Left (cm)" placeholder="Chest Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Chest Right (cm)" placeholder="Chest Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Tricep Left (cm)" placeholder="Tricep Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Tricep Right (cm)" placeholder="Tricep Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Bicep Left (cm)" placeholder="Bicep Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Bicep Right (cm)" placeholder="Bicep Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Subscapular Left (cm)" placeholder="Subscapular Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Subscapular Right (cm)" placeholder="Subscapular Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Midaxillary Left (cm)" placeholder="Midaxillary Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Midaxillary Right (cm)" placeholder="Midaxillary Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Abdominal Left (cm)" placeholder="Abdominal Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Abdominal Right (cm)" placeholder="Abdominal Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Suprailiac Left (cm)" placeholder="Suprailiac Left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Suprailiac Right (cm)" placeholder="Suprailiac Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Thigh left (cm)" placeholder="Thigh left (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                        <Input label="Thigh Right (cm)" placeholder="Thigh Right (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="Body Fat % Left" placeholder="Body Fat % Left" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                        <Input label="Body Fat % Right" placeholder="Body Fat % Right" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Body Fat % Total" placeholder="Body Fat % Total" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button.BrownButton title="Save" onPress={() => { }} />
                                    </View>
                                    <View style={styles.generalMargin3} >
                                        <Text style={styles.headingTextStyle}>Previous Measurement</Text>
                                    </View>
                                </>
                                :
                                null
                        }
                        {
                            this.state.selectedMeasurementType.label == 'Vital Stats' ?
                                <>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Muscle Mass (kg)" placeholder="Muscle Mass (kg)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>kg</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Water (%)" placeholder="Water (%)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Height (cm)" placeholder="Height (cm)" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>cm</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Resting HR" placeholder="Resting HR" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>BPM</Text></View>} />
                                    </View>
                                    <View style={[styles.generalMargin2, styles.rowContainer]}>
                                        <Input label="BP Systolic" placeholder="BP Systolic" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>mmHg</Text></View>} />
                                        <Input label="BP Diatolic" placeholder="BP Diatolic" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>mmHg</Text></View>} />
                                    </View>
                                    <View style={styles.generalMargin1}>
                                        <Input label="Body Fat % Total" placeholder="Body Fat % Total" rightIcon={<View style={styles.marginRight}><Text style={styles.notiText}>%</Text></View>} />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button.BrownButton title="Save" onPress={() => { }} />
                                    </View>
                                    <View style={styles.generalMargin3} >
                                        <Text style={styles.headingTextStyle}>Previous Measurement</Text>
                                    </View>
                                </>
                                :
                                null
                        }

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