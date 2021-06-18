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
                        <Input label="Serving Size" placeholder="Serving Size" />
                        <View style={styles.generalMargin}>
                            <Text style={styles.notiText}>Body weights</Text>
                            <DropDownPicker
                                items={unitMeasurement}
                                arrowColor={THEME.COLOR_BLACK}
                                activeLabelStyle={styles.activeLabelStyle}
                                activeItemStyle={styles.activeItemStyle}
                                itemStyle={styles.itemStyle}
                                labelStyle={styles.labelStyle}
                                placeholder="Select Value"
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
                        <Input label="Colories" placeholder="Colories" />
                        <Input label="Protein (g)" placeholder="Protein (g)" />
                        <Input label="Total Carbohydrates (g)" placeholder="Total Carbohydrates (g)" />
                        <Input label="Sugars (g)" placeholder="Sugars (g)" />
                        <Input label="Total Fat (g)" placeholder="Total Fat (g)" />
                        <Input label="Saturated Fat (g)" placeholder="Saturated Fat (g)" />
                        <Input label="Polyunsaturated (g)" placeholder="Polyunsaturated (g)" />
                        <Input label="Monounsaturated (g)" placeholder="Monounsaturated (g)" />
                        <Input label="Cholestrol (mg)" placeholder="Cholestrol (mg)" />
                        <Input label="Sodium (mg)" placeholder="Sodium (mg)" />
                        <Input label="Potassium (mg)" placeholder="Potassium (mg)" />
                        <Input label="Dietary Fiber (g)" placeholder="Dietary Fiber (g)" />
                        <Input label="Vitamin A (%)" placeholder="Vitamin A (%)" />
                        <Input label="Vitamin C (%)" placeholder="Vitamin C (%)" />
                        <Input label="Calcium (%)" placeholder="Calcium (%)" />
                        <Input label="Iron (%)" placeholder="Iron (%)" />
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

    return {
        user: state.authReducer || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);