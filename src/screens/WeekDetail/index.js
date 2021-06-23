import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import DropDownPicker from 'react-native-dropdown-picker';

import { Container, Icon } from '../../components';
import { authActions } from '../../redux/actions/auth';

import styles from './style';
import THEME from '../../assets/styles/theme.style'

class WeekDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWeek: [{ ...this.props.route.params.week }],
            weeks: []
        }
    }

    componentDidMount = () => {
        let array = []
        for (let index = 0; index < this.props.route.params.length; index++) {
            array.push({
                id: (index + 1),
                label: "Week " + (index + 1) + "/" + this.props.route.params.length,
                value: "Week " + (index + 1) + "/" + this.props.route.params.length
            })
        }
        this.setState({ weeks: array })
    }

    render() {
        const { weeks, selectedWeek } = this.state
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
                                    placeholder={this.props.route.params.week.label}
                                    onClose={() => this.setState({ dropdownOpen4: false })}
                                    onOpen={() => this.setState({ dropdownOpen4: true })}
                                    containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen4 ? '21%' : 0 }}
                                    defaultValue={this.props.route.params.week.label}
                                    onChangeItem={(item) => {
                                        this.setState({
                                            selectedWeek: item, item: item.value, index: item.value,
                                        })
                                    }}
                                />}
                        <View style={styles.headingContainer}>
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
                        </View>
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