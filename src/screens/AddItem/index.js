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
import { screen } from '../../lib/utils/constants';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        const { unitMeasurement } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollContentContainer} >
                        <View style={styles.generalMargin}>
                            <Text style={styles.headingTextStyle}>General</Text>
                        </View>
                        <Input label="Name" placeholder="Name of your food / drink item" />
                        <Input label={screen.unitMeasurement_Serving_Size} placeholder={screen.unitMeasurement_Serving_Size} />
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
                                defaultValue={this.state.selectedUnitMeasurement ? this.state.selectedUnitMeasurement.label : ""}
                                onChangeItem={(item) => { this.setState({ selectedUnitMeasurement: item, item: item.value, index: item.value, }) }}
                            />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.headingTextStyle}>Nutrients</Text>
                        </View>
                        <Input label={screen.unitMeasurement_Colories} placeholder={screen.unitMeasurement_Colories} />
                        <Input label={screen.unitMeasurement_Protein} placeholder="Protein (g)" />
                        <Input label={screen.unitMeasurement_Carbohydrates} placeholder="Total Carbohydrates (g)" />
                        <Input label={screen.unitMeasurement_Sugars} placeholder="Sugars (g)" />
                        <Input label={screen.unitMeasurement_Fat} placeholder="Total Fat (g)" />
                        <Input label={screen.unitMeasurement_SaturatedFat} placeholder="Saturated Fat (g)" />
                        <Input label={screen.unitMeasurement_Polyunsaturated} placeholder="Polyunsaturated (g)" />
                        <Input label={screen.unitMeasurement_Monounsaturated} placeholder="Monounsaturated (g)" />
                        <Input label={screen.unitMeasurement_Cholestrol} placeholder="Cholestrol (mg)" />
                        <Input label={screen.unitMeasurement_Sodium} placeholder="Sodium (mg)" />
                        <Input label={screen.unitMeasurement_Potassium} placeholder="Potassium (mg)" />
                        <Input label={screen.unitMeasurement_DietaryFiber} placeholder="Dietary Fiber (g)" />
                        <Input label={screen.unitMeasurement_VitaminA} placeholder="Vitamin A (%)" />
                        <Input label={screen.unitMeasurement_VitaminC} placeholder="Vitamin C (%)" />
                        <Input label={screen.unitMeasurement_Calcium} placeholder="Calcium (%)" />
                        <Input label={screen.unitMeasurement_Iron} placeholder="Iron (%)" />
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