import React, { Component } from 'react'
import {
    View, Text, ScrollView,
} from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import DropDownPicker from 'react-native-dropdown-picker';

import { Container, Button, Loader } from "../../components";
import { Input } from '../../components/Input/Input.component';
import { authActions } from '../../redux/actions/auth';

import THEME from '../../assets/styles/theme.style';
import styles from './style';
import { route, screen } from '../../lib/utils/constants';
import { NutritionsServices } from '../../services';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            update: false,
            name: "",
            id: "",
            servingSize: "",
            loading: true,
            calories: "",
            unitMeasurementId: "",
            unitMeasurementName: "",
            carbohydrates: "",
            sodium: "",
            potassium: "",
            fat: "",
            saturatedFat: "",
            protein: "",
            polyunsaturatedFat: "",
            monosaturatedFat: "",
            cholesterol: "",
            dietaryFiber: "",
            vitaminA: "",
            vitaminC: "",
            calcium: "",
            sugars: "",
            iron: "",
            selectedUnitMeasurement: [{}],
            unitMeasurement: [{
                id: 1,
                label: "Cup",
                value: "Cup"
            },
            {
                id: 2,
                label: "Centilitre",
                value: "Centilitre"
            },
            {
                id: 3,
                label: "FI",
                value: "FI"
            },
            {
                id: 4,
                label: "Gram",
                value: "Gram"
            }]
        }
    }

    componentDidMount = () => {
        if (this.props?.route?.params != undefined) {
            let { data } = this.props?.route?.params;
            this.setState({
                id: `${data?.customFoodId}`,
                name: `${data?.itemName}`,
                servingSize: `${data?.servingSize}`,
                calories: `${data?.calories}`,
                unitMeasurementId: `${data?.measurementUnitId}`,
                unitMeasurementName: `${data?.measurementUnit}`,
                carbohydrates: `${data?.carbohydrates}`,
                sodium: `${data?.sodium}`,
                potassium: `${data?.potassium}`,
                fat: `${data?.fat}`,
                saturatedFat: `${data?.saturatedFat}`,
                sugars: `${data?.sugars}`,
                protein: `${data?.protein}`,
                polyunsaturatedFat: `${data?.polyunsaturatedFat}`,
                monosaturatedFat: `${data?.monosaturatedFat}`,
                cholesterol: `${data?.cholesterol}`,
                dietaryFiber: `${data?.dietaryFiber}`,
                vitaminA: `${data?.vitaminA}`,
                vitaminC: `${data?.vitaminC}`,
                calcium: `${data?.calcium}`,
                iron: `${data?.iron}`,
                selectedUnitMeasurement: [{ id: data?.measurementUnitId, label: `${data?.measurementUnit}`, value: `${data?.measurementUnit}` }],
                loading: false
            })
        } else {
            this.setState({ loading: false })
        }
    }

    handleSaveFunction = () => {
        const { unitMeasurement, name, id, calcium, calories, polyunsaturatedFat, monosaturatedFat, vitaminC, vitaminA, servingSize, saturatedFat, sugars,
            potassium, sodium, carbohydrates, cholesterol, dietaryFiber, fat, iron, selectedUnitMeasurement, protein, update, unitMeasurementId } = this.state;
        let userData = {
            itemName: name,
            measurementUnitId: update ? parseInt(unitMeasurementId) : selectedUnitMeasurement.id,
            calcium: parseInt(calcium),
            calories: parseInt(calories),
            polyunsaturatedFat: parseInt(polyunsaturatedFat),
            monosaturatedFat: parseInt(monosaturatedFat),
            vitaminC: parseInt(vitaminC),
            vitaminA: parseInt(vitaminA),
            servingSize: parseInt(servingSize),
            saturatedFat: parseInt(saturatedFat),
            sugars: parseInt(sugars),
            potassium: parseInt(potassium),
            sodium: parseInt(sodium),
            carbohydrates: parseInt(carbohydrates),
            cholesterol: parseInt(cholesterol),
            dietaryFiber: parseInt(dietaryFiber),
            fat: parseInt(fat),
            iron: parseInt(iron),
            protein: parseInt(protein)
        }
        if (update) {
            console.log("True")
            console.log(userData)
            let data = {
                ...userData,
                customFoodId: parseInt(id)
            }
            NutritionsServices.updateCustomFood(data, this.props.user.userData.token, this.props.user.userData.userId)
                .then((res) => { this.props.navigation.goBack() })
                .catch((err) => { console.log(err.response.data) })
        } else {

            NutritionsServices.addCustomFood(userData, this.props.user.userData.token, this.props.user.userData.userId)
                .then((res) => { this.props.navigation.goBack() })
                .catch((err) => { console.log(err.response.data) })
        }

    }

    render() {
        const { unitMeasurement, name, calcium, calories, polyunsaturatedFat, monosaturatedFat, vitaminC, vitaminA, servingSize, saturatedFat, sugars, unitMeasurementId,
            unitMeasurementName, loading,
            potassium, sodium, carbohydrates, cholesterol, dietaryFiber, fat, iron, protein, update } = this.state;
        return (
            <Container props={this.props}>
                {
                 loading ?
                    <Loader />
                    :
                    this.props?.route?.params != undefined ?
                        <View style={styles.container}>
                            <ScrollView contentContainerStyle={styles.scrollContentContainer} >
                                <View style={styles.generalMargin}>
                                    <Text style={styles.headingTextStyle}>General</Text>
                                </View>
                                <Input label="Name" value={name} placeholder="Name of your food / drink item" onChangeText={(val) => this.setState({ name: val, update: true })} />
                                <Input label={screen.unitMeasurement_Serving_Size} value={servingSize} placeholder={screen.unitMeasurement_Serving_Size} onChangeText={(val) => this.setState({ servingSize: val, update: true })} />
                                <View style={styles.generalMargin}>
                                    <Text style={styles.notiText}>Unit Measurement</Text>
                                    <DropDownPicker
                                        items={unitMeasurement}
                                        arrowColor={THEME.COLOR_BLACK}
                                        activeLabelStyle={styles.activeLabelStyle}
                                        activeItemStyle={styles.activeItemStyle}
                                        itemStyle={styles.itemStyle}
                                        labelStyle={styles.labelStyle}
                                        placeholder=""
                                        onClose={() => this.setState({ dropdownOpen2: false })}
                                        onOpen={() => this.setState({ dropdownOpen2: true })}
                                        containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen2 ? '31%' : 0 }}
                                        defaultValue={this.state.selectedUnitMeasurement && this.state.selectedUnitMeasurement.label ? this.state.selectedUnitMeasurement.label:""}
                                        onChangeItem={(item) => { this.setState({ selectedUnitMeasurement: item, unitMeasurementId: item.id, item: item.value, index: item.value, update: true }) }}
                                    />
                                </View>
                                <View style={styles.generalMargin}>
                                    <Text style={styles.headingTextStyle}>Nutrients</Text>
                                </View>
                                <Input label={screen.unitMeasurement_Colories} value={calories} placeholder={screen.unitMeasurement_Colories} onChangeText={(val) => this.setState({ calories: val, update: true })} />
                                <Input label={screen.unitMeasurement_Protein} value={protein} placeholder={screen.unitMeasurement_Protein} onChangeText={(val) => this.setState({ protein: val, update: true })} />
                                <Input label={screen.unitMeasurement_Carbohydrates} value={carbohydrates} placeholder={screen.unitMeasurement_Carbohydrates} onChangeText={(val) => this.setState({ carbohydrates: val, update: true })} />
                                <Input label={screen.unitMeasurement_Sugars} value={sugars} placeholder={screen.unitMeasurement_Sugars} onChangeText={(val) => this.setState({ sugars: val, update: true })} />
                                <Input label={screen.unitMeasurement_Fat} value={fat} placeholder={screen.unitMeasurement_Fat} onChangeText={(val) => this.setState({ fat: val, update: true })} />
                                <Input label={screen.unitMeasurement_SaturatedFat} value={saturatedFat} placeholder={screen.unitMeasurement_SaturatedFat} onChangeText={(val) => this.setState({ saturatedFat: val, update: true })} />
                                <Input label={screen.unitMeasurement_Polyunsaturated} value={polyunsaturatedFat} placeholder={screen.unitMeasurement_Polyunsaturated} onChangeText={(val) => this.setState({ polyunsaturatedFat: val, update: true })} />
                                <Input label={screen.unitMeasurement_Monounsaturated} value={monosaturatedFat} placeholder={screen.unitMeasurement_Monounsaturated} onChangeText={(val) => this.setState({ monosaturatedFat: val, update: true })} />
                                <Input label={screen.unitMeasurement_Cholestrol} value={cholesterol} placeholder={screen.unitMeasurement_Cholestrol} onChangeText={(val) => this.setState({ cholesterol: val, update: true })} />
                                <Input label={screen.unitMeasurement_Sodium} value={sodium} placeholder={screen.unitMeasurement_Sodium} onChangeText={(val) => this.setState({ sodium: val, update: true })} />
                                <Input label={screen.unitMeasurement_Potassium} value={potassium} placeholder={screen.unitMeasurement_Potassium} onChangeText={(val) => this.setState({ potassium: val, update: true })} />
                                <Input label={screen.unitMeasurement_DietaryFiber} value={dietaryFiber} placeholder={screen.unitMeasurement_DietaryFiber} onChangeText={(val) => this.setState({ dietaryFiber: val, update: true })} />
                                <Input label={screen.unitMeasurement_VitaminA} value={vitaminA} placeholder={screen.unitMeasurement_VitaminA} onChangeText={(val) => this.setState({ vitaminA: val, update: true })} />
                                <Input label={screen.unitMeasurement_VitaminC} value={vitaminC} placeholder={screen.unitMeasurement_VitaminC} onChangeText={(val) => this.setState({ vitaminC: val, update: true })} />
                                <Input label={screen.unitMeasurement_Calcium} value={calcium} placeholder={screen.unitMeasurement_Calcium} onChangeText={(val) => this.setState({ calcium: val, update: true })} />
                                <Input label={screen.unitMeasurement_Iron} value={iron} placeholder={screen.unitMeasurement_Iron} onChangeText={(val) => this.setState({ iron: val, update: true })} />
                                <View style={styles.buttonContainer}>
                                    <Button.SlimButton disabled={update ? false : this.props.route.params != undefined ? true : false} title="Save" onPress={() => this.handleSaveFunction()} />
                                </View>
                            </ScrollView>
                        </View>
                        :
                        <View style={styles.container}>
                            <ScrollView contentContainerStyle={styles.scrollContentContainer} >
                                <View style={styles.generalMargin}>
                                    <Text style={styles.headingTextStyle}>General</Text>
                                </View>
                                <Input label="Name" value={name} placeholder="Name of your food / drink item" onChangeText={(val) => this.setState({ name: val })} />
                                <Input label={screen.unitMeasurement_Serving_Size} value={servingSize} placeholder={screen.unitMeasurement_Serving_Size} onChangeText={(val) => this.setState({ servingSize: val })} />
                                <View style={styles.generalMargin}>
                                    <Text style={styles.notiText}>Unit Measurement</Text>
                                    <DropDownPicker
                                        items={unitMeasurement}
                                        arrowColor={THEME.COLOR_BLACK}
                                        activeLabelStyle={styles.activeLabelStyle}
                                        activeItemStyle={styles.activeItemStyle}
                                        itemStyle={styles.itemStyle}
                                        labelStyle={styles.labelStyle}
                                        placeholder=""
                                        onClose={() => this.setState({ dropdownOpen2: false })}
                                        onOpen={() => this.setState({ dropdownOpen2: true })}
                                        containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen2 ? '31%' : 0 }}
                                        defaultValue={this.state.selectedUnitMeasurement || unitMeasurementId ? this.state.selectedUnitMeasurement.label ? this.state.selectedUnitMeasurement.label : unitMeasurementId ? unitMeasurementName : "" : ""}
                                        onChangeItem={(item) => { this.setState({ selectedUnitMeasurement: item, item: item.value, index: item.value, }) }}
                                    />
                                </View>
                                <View style={styles.generalMargin}>
                                    <Text style={styles.headingTextStyle}>Nutrients</Text>
                                </View>
                                <Input label={screen.unitMeasurement_Colories} value={calories} placeholder={screen.unitMeasurement_Colories} onChangeText={(val) => this.setState({ calories: val })} />
                                <Input label={screen.unitMeasurement_Protein} value={protein} placeholder={screen.unitMeasurement_Protein} onChangeText={(val) => this.setState({ protein: val })} />
                                <Input label={screen.unitMeasurement_Carbohydrates} value={carbohydrates} placeholder={screen.unitMeasurement_Carbohydrates} onChangeText={(val) => this.setState({ carbohydrates: val })} />
                                <Input label={screen.unitMeasurement_Sugars} value={sugars} placeholder={screen.unitMeasurement_Sugars} onChangeText={(val) => this.setState({ sugars: val })} />
                                <Input label={screen.unitMeasurement_Fat} value={fat} placeholder={screen.unitMeasurement_Fat} onChangeText={(val) => this.setState({ fat: val })} />
                                <Input label={screen.unitMeasurement_SaturatedFat} value={saturatedFat} placeholder={screen.unitMeasurement_SaturatedFat} onChangeText={(val) => this.setState({ saturatedFat: val })} />
                                <Input label={screen.unitMeasurement_Polyunsaturated} value={polyunsaturatedFat} placeholder={screen.unitMeasurement_Polyunsaturated} onChangeText={(val) => this.setState({ polyunsaturatedFat: val })} />
                                <Input label={screen.unitMeasurement_Monounsaturated} value={monosaturatedFat} placeholder={screen.unitMeasurement_Monounsaturated} onChangeText={(val) => this.setState({ monosaturatedFat: val })} />
                                <Input label={screen.unitMeasurement_Cholestrol} value={cholesterol} placeholder={screen.unitMeasurement_Cholestrol} onChangeText={(val) => this.setState({ cholesterol: val })} />
                                <Input label={screen.unitMeasurement_Sodium} value={sodium} placeholder={screen.unitMeasurement_Sodium} onChangeText={(val) => this.setState({ sodium: val })} />
                                <Input label={screen.unitMeasurement_Potassium} value={potassium} placeholder={screen.unitMeasurement_Potassium} onChangeText={(val) => this.setState({ potassium: val })} />
                                <Input label={screen.unitMeasurement_DietaryFiber} value={dietaryFiber} placeholder={screen.unitMeasurement_DietaryFiber} onChangeText={(val) => this.setState({ dietaryFiber: val })} />
                                <Input label={screen.unitMeasurement_VitaminA} value={vitaminA} placeholder={screen.unitMeasurement_VitaminA} onChangeText={(val) => this.setState({ vitaminA: val })} />
                                <Input label={screen.unitMeasurement_VitaminC} value={vitaminC} placeholder={screen.unitMeasurement_VitaminC} onChangeText={(val) => this.setState({ vitaminC: val })} />
                                <Input label={screen.unitMeasurement_Calcium} value={calcium} placeholder={screen.unitMeasurement_Calcium} onChangeText={(val) => this.setState({ calcium: val })} />
                                <Input label={screen.unitMeasurement_Iron} value={iron} placeholder={screen.unitMeasurement_Iron} onChangeText={(val) => this.setState({ iron: val })} />
                                <View style={styles.buttonContainer}>
                                    <Button.SlimButton title="Save" onPress={() => this.handleSaveFunction()} />
                                </View>
                            </ScrollView>
                        </View>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);