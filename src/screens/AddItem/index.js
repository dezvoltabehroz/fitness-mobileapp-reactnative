import React, { Component } from 'react'
import {
    View, Text, ScrollView,
} from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import DropDownPicker from 'react-native-dropdown-picker';

import { Container, Button } from "../../components";
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
            servingSize: "",
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
        if (this.props.route.params != undefined) {
            this.setState({
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
                protein: `${data?.protein}`,
                polyunsaturatedFat: `${data?.polyunsaturatedFat}`,
                monosaturatedFat: `${data?.monosaturatedFat}`,
                cholesterol: `${data?.cholesterol}`,
                dietaryFiber: `${data?.dietaryFiber}`,
                vitaminA: `${data?.vitaminA}`,
                vitaminC: `${data?.vitaminC}`,
                calcium: `${data?.calcium}`,
                iron: `${data?.iron}`,
            })
        }
    }

    handleSaveFunction = () => {
        const { update } = this.state;
        if (update) {
            NutritionsServices.updateCustomFood()
                .then()
                .catch()
        } else {
            NutritionsServices.addCustomFood()
                .then()
                .catch()
        }

    }

    render() {
        const { unitMeasurement,name,calcium,calories,polyunsaturatedFat,monosaturatedFat,vitaminC,vitaminA,
        potassium,sodium,carbohydrates,cholesterol,dietaryFiber,fat,iron, } = this.state;
        const { data } = this.props.route.params;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollContentContainer} >
                        <View style={styles.generalMargin}>
                            <Text style={styles.headingTextStyle}>General</Text>
                        </View>
                        <Input label="Name" value={name} placeholder="Name of your food / drink item" />
                        <Input label={screen.unitMeasurement_Serving_Size} value={`${data?.servingSize}`} placeholder={screen.unitMeasurement_Serving_Size} />
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
                                defaultValue={this.state.selectedUnitMeasurement || data.measurementUnit ? this.state.selectedUnitMeasurement.label ? this.state.selectedUnitMeasurement.label : data.measurementUnit ? data.measurementUnit : "" : ""}
                                onChangeItem={(item) => { this.setState({ selectedUnitMeasurement: item, item: item.value, index: item.value, }) }}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.headingTextStyle}>Nutrients</Text>
                        </View>
                        <Input label={screen.unitMeasurement_Colories} value={`${data?.calories}`} placeholder={screen.unitMeasurement_Colories} />
                        <Input label={screen.unitMeasurement_Protein} value={`${data?.protein}`} placeholder={screen.unitMeasurement_Protein} />
                        <Input label={screen.unitMeasurement_Carbohydrates} value={`${data?.carbohydrates}`} placeholder={screen.unitMeasurement_Carbohydrates} />
                        <Input label={screen.unitMeasurement_Sugars} value={`${data?.sugars}`} placeholder={screen.unitMeasurement_Sugars} />
                        <Input label={screen.unitMeasurement_Fat} value={`${data?.fat}`} placeholder={screen.unitMeasurement_Fat} />
                        <Input label={screen.unitMeasurement_SaturatedFat} value={`${data?.saturatedFat}`} placeholder={screen.unitMeasurement_SaturatedFat} />
                        <Input label={screen.unitMeasurement_Polyunsaturated} value={`${data?.polyunsaturatedFat}`} placeholder={screen.unitMeasurement_Polyunsaturated} />
                        <Input label={screen.unitMeasurement_Monounsaturated} value={`${data?.monosaturatedFat}`} placeholder={screen.unitMeasurement_Monounsaturated} />
                        <Input label={screen.unitMeasurement_Cholestrol} value={`${data?.cholesterol}`} placeholder={screen.unitMeasurement_Cholestrol} />
                        <Input label={screen.unitMeasurement_Sodium} value={`${data?.sodium}`} placeholder={screen.unitMeasurement_Sodium} />
                        <Input label={screen.unitMeasurement_Potassium} value={`${data?.potassium}`} placeholder={screen.unitMeasurement_Potassium} />
                        <Input label={screen.unitMeasurement_DietaryFiber} value={`${data?.dietaryFiber}`} placeholder={screen.unitMeasurement_DietaryFiber} />
                        <Input label={screen.unitMeasurement_VitaminA} value={`${data?.vitaminA}`} placeholder={screen.unitMeasurement_VitaminA} />
                        <Input label={screen.unitMeasurement_VitaminC} value={`${data?.vitaminC}`} placeholder={screen.unitMeasurement_VitaminC} />
                        <Input label={screen.unitMeasurement_Calcium} value={`${data?.calcium}`} placeholder={screen.unitMeasurement_Calcium} />
                        <Input label={screen.unitMeasurement_Iron} value={`${data?.iron}`} placeholder={screen.unitMeasurement_Iron} />
                        <View style={styles.buttonContainer}>
                            <Button.SlimButton title="Save" onPress={() => this.props.navigation.replace('Home')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);