import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, Dimensions, ScrollView, TouchableOpacity
} from 'react-native'
import { Container, BrownButton } from "../../components";
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
import THEME from '../../assets/styles/theme.style'
class UnitOfMeasurement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: true,
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




    render() {
        const { selectedValue, dropdown, weights, bodyweight, height, length, distance } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />

                <View style={styles.container}>
                    <ScrollView >
                        <View style={[styles.generalMargin, { marginTop: "10%" }]}>
                            <Text style={styles.notiText}>Weights</Text>
                            <DropDownPicker
                                items={weights}
                                arrowColor="#000000"
                                placeholder="Select Value"
                                activeLabelStyle={{
                                    color: "white",
                                    fontWeight: "bold"
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
                                arrowColor="#000000"
                                activeLabelStyle={{
                                    color: "white",
                                    fontWeight: "bold"
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
                                arrowColor="#000000"
                                placeholder="Select Value"
                                activeLabelStyle={{
                                    color: "white",
                                    fontWeight: "bold"
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
                                arrowColor="#000000"
                                placeholder="Select Value"
                                activeLabelStyle={{
                                    color: "white",
                                    fontWeight: "bold"
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
                                arrowColor="#000000"
                                placeholder="Select Value"
                                activeLabelStyle={{
                                    color: "white",
                                    fontWeight: "bold"
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
                        <BrownButton title="Save" onPress={() => this.props.navigation.replace('Home')} />
                    </ScrollView>

                </View>
            </Container >
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

export default connect(mapStateToProps, mapDispatchToProps)(UnitOfMeasurement);