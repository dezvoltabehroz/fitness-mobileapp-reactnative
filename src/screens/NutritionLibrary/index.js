import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Button, Container, FilterModal, Icon, Loader } from '../../components';
import { Input } from '../../components/Input/Input.component';

import styles from './style';
import { renderSeperator } from '../../lib/utils/global';
import { route } from '../../lib/utils/constants';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { NutritionsServices } from '../../services';
import { SearchBar } from 'react-native-elements';

class NutritionLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterModal: false,
            laoding: true,
            filter: "A to Z",
            nutrition: []
        }
        this.arrayHolder = [];
    }

    componentDidMount = async () => {
        const { userData } = this.props.user;
        console.log(userData)
        NutritionsServices.getMealPlans(userData.token, userData.userId, '1')
            .then((response) => {
                this.arrayHolder = response.data
                this.setState({ nutrition: response.data, laoding: false })
            })
            .catch((error) => console.log(error))
    }

    handlePress = (index) => {
        let array = [...this.state.nutrition]
        for (let i = 0; i < array.length; i++) {
            array[i] = { ...array[i], selected: false };
        }
        console.log(array)
        array[index] = { ...array[index], selected: true };
        console.log(array)
        this.setState({ nutrition: array, item: array[index] })
    }

    searchFilterFunction = (text) => {
        console.log(text)
        this.setState({ value: text });
        const newData = this.arrayHolder.filter(item => {
            const itemData = `${item?.mealPlanName.toUpperCase()} ${item?.mealPlanName.toUpperCase()} ${item?.mealPlanName.toUpperCase()} `;
            const textData = text?.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        if (newData.length != 0) {
            this.setState({ nutrition: newData, IsTemplatesFound: false });
        }
        else {
            this.setState({ IsTemplatesFound: true });
        }
    }

    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable onPress={() => { this.props.navigation.navigate(route.NUTRITION_DETAIL, { data: item }) }} style={styles.itemContainer}>
                <View style={styles.boxView}>
                    <Text></Text>
                </View>
                <View style={styles.rowStyle}>
                    <View style={{ flex: 0.9 }}>
                        <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.mealPlanName}</Text>
                    </View>

                    <TouchableOpacity onPress={() => this.handlePress(index)} style={{ flex: 0.1 }} >
                        <Icon.MaterialIcons name={item.selected ? 'check-box' : 'check-box-outline-blank'} size={20} color='black' />
                    </TouchableOpacity>
                </View>

            </RNBounceable>
        )
    }

    handleAtoZ = (filter) => {
        this.setState({ laoding: true })
        const { userData } = this.props.user;
        NutritionsServices.getMealPlans(userData.token, userData.userId, '1')
            .then((response) => {
                this.arrayHolder = response.data
                this.setState({ filter: filter, nutrition: response.data, laoding: false, filterModal: false })
            })
    }
    handleZtoA = (filter) => {
        this.setState({ laoding: true })
        const { userData } = this.props.user;
        NutritionsServices.getMealPlans(userData.token, userData.userId, '2')
            .then((response) => {
                this.arrayHolder = response.data
                this.setState({ filter: filter, nutrition: response.data, laoding: false, filterModal: false })
            })
    }
    handleMostRecent = (filter) => {
        this.setState({ laoding: true })
        const { userData } = this.props.user;
        NutritionsServices.getMealPlans(userData.token, userData.userId, '3')
            .then((response) => {
                this.arrayHolder = response.data
                this.setState({ filter: filter, nutrition: response.data, laoding: false, filterModal: false })
            })
    }
    handleOldest = (filter) => {
        this.setState({ laoding: true })
        const { userData } = this.props.user;
        NutritionsServices.getMealPlans(userData.token, userData.userId, '4')
            .then((response) => {
                this.arrayHolder = response.data
                this.setState({ filter: filter, nutrition: response.data, laoding: false, filterModal: false })
            })
    }

    render() {
        const { nutrition, reportModal, issue, laoding, filterModal, value } = this.state;
        return (
            <Container props={this.props}>
                {
                    laoding ?
                        <Loader />
                        :
                        <View style={styles.container}>
                            <View style={{ marginTop: "10%" }}>
                                <SearchBar
                                    containerStyle={{ backgroundColor: "transparent", borderTopWidth: 0, borderBottomWidth: 0, }}
                                    inputContainerStyle={{ backgroundColor: "white", elevation: 2, borderWidth: 0.5, borderColor: "lightgray" }}
                                    onChangeText={(text) => this.searchFilterFunction(text)}
                                    value={value}
                                    placeholder="Search"
                                    leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                            </View>
                            <View style={styles.rowContainer} >
                                <Text style={styles.textStyle}>{this.state.filter}</Text>
                                <RNBounceable onPress={() => this.setState({ filterModal: true })} style={styles.row}>
                                    <Icon.FontAwesome name="filter" size={20} />
                                </RNBounceable>
                            </View>
                            <FlatList
                                data={nutrition}
                                keyExtractor={item => item}
                                contentContainerStyle={{ paddingTop: "5%", paddingBottom: 140 }}
                                ItemSeparatorComponent={(renderSeperator)}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ index, item }) => this._renderItems({ index, item })}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={styles.buttonStyle}>
                                    <Button.SlimButton title={"Done"} onPress={() => { this.props.navigation.push(route.LOG_NUTRITION, { diet: this.state.item }) }} />
                                </View>
                            </View>
                        </View>
                }

                <FilterModal
                    isVisible={filterModal}
                    onClearAll={() => this.handleAtoZ('A to Z')}
                    onPressAtoZ={(filter) => this.handleAtoZ(filter)}
                    onPressZtoA={(filter) => this.handleZtoA(filter)}
                    onPressMostRecent={(filter) => this.handleMostRecent(filter)}
                    onPressOldest={(filter) => this.handleOldest(filter)}
                    hide={() => this.setState({ filterModal: false })}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(NutritionLibrary)
