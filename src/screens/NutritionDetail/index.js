import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions, FlatList } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Icon, Button, Container, MealModal, } from "../../components";

import styles from './style';
import { renderSeperator } from '../../lib/utils/global';
import { Divider } from 'react-native-elements';
import Modal from 'react-native-modal';
import { route } from '../../lib/utils/constants';
import { NutritionsServices } from '../../services';

const { width, height } = Dimensions.get('window');

class NutritionDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            currentPage: 0,
            macrosModal: false,
            breakFast: {},
            // breakFast: [
            //     {
            //         title: 'Egg',
            //         quantity: '5 g',
            //         calories: 148,
            //     },
            //     {
            //         title: 'Egg',
            //         quantity: '5 g',
            //         calories: 148,
            //     },
            //     {
            //         title: 'Egg',
            //         quantity: '5 g',
            //         calories: 148,
            //     },
            //     {
            //         title: 'Egg',
            //         quantity: '5 g',
            //         calories: 148,
            //     }
            // ],
            macros: [{
                name: "Calories",
                target: 1650,
                total: 1534,
                left: 116
            }, {
                name: "Protein (g)",
                target: 1650,
                total: 1534,
                left: 116
            },
            {
                name: "Carbohydrate (g)",
                target: 1650,
                total: 1534,
                left: 116
            },
            {
                name: "Fibre (g)",
                target: 1650,
                total: 1534,
                left: -1
            },
            {
                name: "Sugars (g)",
                target: 1650,
                total: 1534,
                left: 116
            },
            {
                name: "Fat (g)",
                target: 1650,
                total: 1534,
                left: 116
            },
            {
                name: "Sodium (mg)",
                target: 1650,
                total: 1534,
                left: 116
            }],
            mealModal: false
        }
        this.data = this.state.activityArr
    }

    componentDidMount = async () => {
        const { userData } = this.props.user;
        NutritionsServices.getAllMealPlanDetailsById(this.props.route?.params?.data?.mealPlanId, userData.token, userData.userId)
            .then((res) => {
                NutritionsServices.getAllMacros(this.props.route?.params?.data?.mealPlanId, userData.userId, userData.token)
                    .then((response) => { this.setState({ breakFast: res.data[0], macros: response.data[0], }) })
                    .catch((err) => { console.log(err) })
            })
            .catch((err) => console.log(err.response.data))
    }

    setSliderPage = (event: any) => {
        const { currentPage } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor((width)));
        if (indexOfNextScreen !== currentPage) {
            this.setState({
                currentPage: indexOfNextScreen,
            });
        }
    };

    handlePress = (index) => {
        console.log("press")
        let array = [...this.state.templates]
        for (let i = 0; i < array.length; i++) {
            array[i] = { ...array[i], selected: false };
        }
        console.log(array)
        array[index] = { ...array[index], selected: true };
        console.log(array)
        this.setState({ templates: array })
    }

    _renderItems = (item, index) => {
        return (
            <>
                <View onPress={() => { }} style={styles.itemContainer}>
                    <View >
                        <Text style={styles.textStyle}>{item.nutritionName}</Text>
                    </View>
                    {this.state.breakFast.isStarted ?
                        <RNBounceable onPress={() => this.setState({ mealModal: true })}>
                            <Icon.Ionicons name="ellipsis-horizontal" size={30} color="lightgray" />
                        </RNBounceable>
                        : null}
                </View>
                <Divider style={{ marginTop: "5%" }} ></Divider>
                <View onPress={() => { }} style={styles.itemContainer}>
                    <View >
                        <Text numberOfLines={3} style={styles.textStyle1}>{"Calories"}</Text>
                    </View>
                    <View>
                        <Text style={styles.itemTextStyle}>{item.totalCalories + " kcal"}</Text>
                    </View>
                </View>
                {
                    item.foodItems.map((element, index) => {
                        return (
                            <>

                                <RNBounceable style={styles.itemContainer}>
                                    <Text style={styles.itemTextStyle}>{element.foodName}</Text>
                                    <Text style={styles.textStyle1}>{element.calories}</Text>
                                </RNBounceable>

                                <View style={{ paddingHorizontal: "5%" }}>
                                    <Text style={styles.textStyle1}>{element.calories} ({element.quantity} per serving)</Text>
                                </View>
                            </>)
                    })
                }
            </>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    handleLogNutrition = () => {
        const { userData } = this.props.user;
        NutritionsServices.startNutrition(this.props.route?.params?.data?.mealPlanId, userData.token, userData.userId)
            .then((res) => {
                console.log(res.data)
                this.props.navigation.replace('Home')
            })
            .catch((err) => console.log(err.response.data))
    }

    render() {
        const { currentPage, breakFast, macrosModal, mealModal, macros } = this.state;
        let { navigate } = this.props.navigation;
        return (
            <>
                <Container props={this.props} >
                    <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
                    <View style={styles.container}>
                        <View style={styles.upperContentContainer}>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#C0C0C0" }]}>{"Plan"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#C0C0C0" }]}>{"Details"}</Text>
                                </View>
                            </RNBounceable>
                        </View>
                        <ScrollView
                            horizontal={true}
                            scrollEventThrottle={16}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            ref={(node) => (this.scroll = node)}
                            onScroll={(event) => this.setSliderPage(event)}
                            style={{ flex: 0.8 }}>
                            <View style={styles.firstContainer}>
                                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

                                    <View style={styles.generalMargin}>
                                        <FlatList
                                            data={breakFast?.nutritionItems}
                                            contentContainerStyle={{ elevation: 2, marginBottom: "10%" }}
                                            ItemSeparatorComponent={(renderSeperator)}
                                            renderItem={({ index, item }) => this._renderItems(item, index)} />
                                    </View>
                                    <View style={{ height: 50, backgroundColor: '#F2f2f2' }}></View>


                                    <View style={[styles.buttonContainer, styles.marginTop]}>
                                        {
                                            this.state.breakFast.isStarted ?
                                                null :
                                                <Button.BrownButton title="Log Nutrition" onPress={() => this.handleLogNutrition()} />
                                        }
                                        <View style={styles.marginTop}>
                                            <Button.OutlineButton title={"View Macros"} onPress={() => this.setState({ macrosModal: true })} />
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.secondContainer}>
                                <ScrollView contentContainerStyle={{ paddingBottom: '30%' }}>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ marginHorizontal: "5%", flex: 0.7 }}>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle2}>Plan Title</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle1}>{breakFast?.nutritionPlanName}</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle2}>Notes</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle1}>{breakFast?.notes ? breakFast?.notes : 'Nothing added just yet!'}</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle2}>Files</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle1}>{breakFast?.filePath ? breakFast?.filePath : 'Nothing added just yet!'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                </Container>
                <MealModal isVisible={mealModal} hide={() => this.setState({ mealModal: false })} />
                <Modal
                    style={styles.modalContainer}
                    isVisible={macrosModal}
                    onBackdropPress={() => this.setState({ macrosModal: false })} >
                    <View style={{ bottom: "5%" }}>
                        <Text style={styles.searchText}>{macros.mealPlanName} Macros</Text>
                    </View>
                    <View style={styles.modalLowerContainer}>
                        <ScrollView contentContainerStyle={{ paddingBottom: "10%", marginBottom: 120 }}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.row}>
                                    <View style={styles.first}>
                                        <Text></Text>
                                    </View>
                                    <View style={styles.second}>
                                        <Text>Target</Text>
                                    </View>
                                    <View style={styles.third}>
                                        <Text>Total</Text>
                                    </View>
                                    <View style={styles.fourth}>
                                        <Text>Left</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <View style={styles.first}>
                                        <Text>{"Calories"}</Text>
                                    </View>
                                    <View style={styles.second}>
                                        <Text>{macros.calories}</Text>
                                    </View>
                                    <View style={styles.third}>
                                        <Text>{macros?.totalCaloriesUsed}</Text>
                                    </View>
                                    <View style={styles.fourth}>
                                        <Text style={{ color: macros.totalCaloriesLeft < 0 ? 'red' : 'lightgreen' }}>{macros.totalCaloriesLeft}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={styles.first}>
                                        <Text>{"Protein"}</Text>
                                    </View>
                                    <View style={styles.second}>
                                        <Text>{macros.protein}</Text>
                                    </View>
                                    <View style={styles.third}>
                                        <Text>{macros.totalProteinUsed}</Text>
                                    </View>
                                    <View style={styles.fourth}>
                                        <Text style={{ color: macros.totalProteinLeft < 0 ? 'red' : 'lightgreen' }}>{parseFloat(macros.totalProteinLeft).toFixed(2)}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={styles.first}>
                                        <Text>{"Carbs"}</Text>
                                    </View>
                                    <View style={styles.second}>
                                        <Text>{macros?.carbs}</Text>
                                    </View>
                                    <View style={styles.third}>
                                        <Text>{macros?.totalCarbsUsed}</Text>
                                    </View>
                                    <View style={styles.fourth}>
                                        <Text style={{ color: macros?.totalCarbsLeft < 0 ? 'red' : 'lightgreen' }}>{macros?.totalCarbsLeft}</Text>
                                    </View>
                                </View>


                            </View>

                        </ScrollView>

                    </View>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NutritionDetail);