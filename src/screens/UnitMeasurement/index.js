import React, { Component } from 'react'
import {
    View, Text, ScrollView, Alert
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { authActions } from '../../redux/actions/auth';

import { Container, Button } from "../../components";

import styles from './style';
import THEME from '../../assets/styles/theme.style'
import { AuthServices } from '../../services';
class UnitOfMeasurement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: true,
            btnLoading: false,
            selectedValue: [
                {

                }
            ],
            distance: [{
                id: 1,
                label: "Km",
                value: "Km"
            },
            {
                id: 2,
                label: "Miles",
                value: "Miles"
            }],
            weights: [{
                id: 1,
                label: "Lbs",
                value: "Lbs"
            },
            {
                id: 2,
                label: "Kg",
                value: "Kg"
            }],
            length: [{
                id: 1,
                label: "Cm",
                value: "Cm"
            },
            {
                id: 2,
                label: "Inches",
                value: "Inches"
            }],
            height: [{
                id: 1,
                label: "Meters",
                value: "Meters"
            },
            {
                id: 2,
                label: "Feet",
                value: "Feet"
            }],
            bodyweight: [{
                id: 1,
                label: "Lbs",
                value: "Lbs"
            },
            {
                id: 2,
                label: "St",
                value: "St"
            },
            {
                id: 3,
                label: "Kg",
                value: "Kg"
            }]
        }

    }


    handleSaveMeasurement = () => {
        this.setState({ btnLoading: true })
        let data = {
            "userId": this.props.user.userData.userId,
            "weightsUnit": this.state.selectedWeight.value,
            "bodyWeightsUnit": this.state.selectedBodyWeight.value,
            "lengthsUnit": this.state.selectedLength.value,
            "heightsUnit": this.state.selectedHeight.value,
            "distanceUnit": this.state.selectedDistance.value
        }
        console.log(data)
        AuthServices.updateMeasurementUnits(data, this.props.user.userData.token, this.props.user.userData.userId)
            .then((res) => {
                console.log(res.data)
                this.setState({ btnLoading: false });
                this.props.navigation.replace('Home')
            })
            .catch((err) => { Alert.alert(err.response.data.responseMessage); this.setState({ btnLoading: false }); console.log(err.response) })
    }

    render() {
        const { selectedValue, dropdown, weights, bodyweight, height, length, distance, btnLoading } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />

                <View style={styles.container}>
                    <ScrollView >
                        <View style={[styles.generalMargin, { marginTop: "10%" }]}>
                            <Text style={styles.notiText}>Weights</Text>
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
                                defaultValue={this.state.selectedWeight ? this.state.selectedWeight.label : ""}

                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedWeight: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>

                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Body weights</Text>
                            <DropDownPicker
                                items={bodyweight}
                                arrowColor={THEME.COLOR_BLACK}
                                activeLabelStyle={styles.activeLabelStyle}
                                activeItemStyle={styles.activeItemStyle}
                                itemStyle={styles.itemStyle}
                                labelStyle={styles.labelStyle}
                                placeholder="Select Value"
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen2: false })}
                                onOpen={() => this.setState({ dropdownOpen2: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen2 ? '31%' : 0 }}
                                defaultValue={this.state.selectedBodyWeight ? this.state.selectedBodyWeight.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedBodyWeight: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>

                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Length</Text>
                            <DropDownPicker
                                items={length}
                                arrowColor={THEME.COLOR_BLACK}
                                activeLabelStyle={styles.activeLabelStyle}
                                activeItemStyle={styles.activeItemStyle}
                                itemStyle={styles.itemStyle}
                                labelStyle={styles.labelStyle}
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen3: false })}
                                onOpen={() => this.setState({ dropdownOpen3: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen3 ? '21%' : 0 }}
                                defaultValue={this.state.selectedLength ? this.state.selectedLength.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedLength: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>

                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Height</Text>
                            <DropDownPicker
                                items={height}
                                arrowColor={THEME.COLOR_BLACK}
                                activeLabelStyle={styles.activeLabelStyle}
                                activeItemStyle={styles.activeItemStyle}
                                itemStyle={styles.itemStyle}
                                labelStyle={styles.labelStyle}
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen4: false })}
                                onOpen={() => this.setState({ dropdownOpen4: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen4 ? '21%' : 0 }}
                                defaultValue={this.state.selectedHeight ? this.state.selectedHeight.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedHeight: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>

                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Distance</Text>
                            <DropDownPicker
                                items={distance}
                                arrowColor={THEME.COLOR_BLACK}
                                activeLabelStyle={styles.activeLabelStyle}
                                activeItemStyle={styles.activeItemStyle}
                                itemStyle={styles.itemStyle}
                                labelStyle={styles.labelStyle}
                                placeholder="Select Value"
                                onClose={() => this.setState({ dropdownOpen5: false })}
                                onOpen={() => this.setState({ dropdownOpen5: true })}
                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen5 ? '21%' : 0 }}
                                defaultValue={this.state.selectedDistance ? this.state.selectedDistance.label : ""}
                                onChangeItem={(item) => {
                                    this.setState({
                                        selectedDistance: item, item: item.value, index: item.value,
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button.BrownButton loading={btnLoading} title="Save" onPress={() => this.handleSaveMeasurement()} />
                        </View>
                    </ScrollView>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(UnitOfMeasurement);