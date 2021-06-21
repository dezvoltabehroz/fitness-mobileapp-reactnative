import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions, FlatList } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Icon, Button, Container, } from "../../components";

import styles from './style';
import { renderSeperator } from '../../lib/utils/global';
import { Divider } from 'react-native-elements';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

class NutritionDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            currentPage: 0,
            macrosModal: false,
            breakFast: [
                {
                    title: 'Egg',
                    quantity: '5 g',
                    calories: 148,
                },
                {
                    title: 'Egg',
                    quantity: '5 g',
                    calories: 148,
                },
                {
                    title: 'Egg',
                    quantity: '5 g',
                    calories: 148,
                },
                {
                    title: 'Egg',
                    quantity: '5 g',
                    calories: 148,
                }
            ],
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
            }]

        }
        this.data = this.state.activityArr
    }

    componentDidMount = async () => {
        let userToken = await AsyncStorage.getItem('Email')
        if (userToken) {
            let data = JSON.parse(userToken);
            this.setState({ email: data.email, password: data.password })
        }
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
            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                <View >
                    <Text style={styles.itemTextStyle}>{item.title}</Text>
                    <Text style={styles.textStyle1}>{item.quantity}</Text>
                </View>
                <View>
                    <Text style={styles.textStyle1}>{item.calories}</Text>
                </View>
            </RNBounceable>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    render() {
        const { currentPage, breakFast, macrosModal, macros } = this.state;
        let { heading } = this.props.route.params;
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
                                        <Text style={styles.textStyle}>Break Fast</Text>
                                        <Divider style={{ marginTop: "5%" }} ></Divider>
                                        <View onPress={() => { }} style={styles.itemContainer}>
                                            <View >
                                                <Text numberOfLines={3} style={styles.textStyle1}>{"Calories"}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.itemTextStyle}>{"389 kcal"}</Text>
                                            </View>
                                        </View>
                                        <FlatList
                                            data={breakFast}
                                            contentContainerStyle={{ elevation: 2, marginBottom: "10%" }}
                                            ItemSeparatorComponent={(renderSeperator)}
                                            renderItem={({ index, item }) => this._renderItems(item, index)} />
                                    </View>

                                    <View style={{ height: 50, backgroundColor: '#F2f2f2' }}></View>

                                    <View style={styles.generalMargin}>
                                        <Text style={styles.textStyle}>Lunch</Text>
                                        <Divider style={{ marginTop: "5%" }} ></Divider>
                                        <View onPress={() => { }} style={styles.itemContainer}>
                                            <View >
                                                <Text numberOfLines={3} style={styles.textStyle1}>{"Calories"}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.itemTextStyle}>{"389 kcal"}</Text>
                                            </View>
                                        </View>
                                        <FlatList
                                            data={breakFast}
                                            contentContainerStyle={{ elevation: 2, marginBottom: "10%" }}
                                            ItemSeparatorComponent={(renderSeperator)}
                                            renderItem={({ index, item }) => this._renderItems(item, index)} />
                                    </View>
                                    <View style={{ height: 50, backgroundColor: '#F2f2f2' }}></View>

                                    <View style={styles.generalMargin}>
                                        <Text style={styles.textStyle}>Dinner</Text>
                                        <Divider style={{ marginTop: "5%" }} ></Divider>
                                        <View onPress={() => { }} style={styles.itemContainer}>
                                            <View >
                                                <Text numberOfLines={3} style={styles.textStyle1}>{"Calories"}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.itemTextStyle}>{"389 kcal"}</Text>
                                            </View>
                                        </View>
                                        <FlatList
                                            data={breakFast}
                                            contentContainerStyle={{ elevation: 2, marginBottom: "10%" }}
                                            ItemSeparatorComponent={(renderSeperator)}
                                            renderItem={({ index, item }) => this._renderItems(item, index)} />
                                    </View>
                                    <View style={{ height: 50, backgroundColor: '#F2f2f2' }}></View>

                                    <View style={styles.generalMargin}>
                                        <Text style={styles.textStyle}>Snack through out the day</Text>
                                        <Divider style={{ marginTop: "5%" }} ></Divider>
                                        <View onPress={() => { }} style={styles.itemContainer}>
                                            <View >
                                                <Text numberOfLines={3} style={styles.textStyle1}>{"Calories"}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.itemTextStyle}>{"389 kcal"}</Text>
                                            </View>
                                        </View>
                                        <FlatList
                                            data={breakFast}
                                            contentContainerStyle={{ elevation: 2, marginBottom: "10%" }}
                                            ItemSeparatorComponent={(renderSeperator)}
                                            renderItem={({ index, item }) => this._renderItems(item, index)} />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button.OutlineButton title={"View Macros"} onPress={() => this.setState({ macrosModal: true })} />
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
                                                <Text style={styles.textStyle1}>{heading}</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle2}>Notes</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle1}>Nothing added just yet!</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle2}>Files</Text>
                                            </View>
                                            <View style={styles.marginTop}>
                                                <Text style={styles.textStyle1}>Nothing added just yet!</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                </Container>
                <Modal
                    style={styles.modalContainer}
                    isVisible={macrosModal}
                    onBackdropPress={() => this.setState({ macrosModal: false })} >
                    <View style={{ bottom: "5%" }}>
                        <Text style={styles.searchText}>Nutrition Tile Macros</Text>
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
                                {macros.map((item, index) => {
                                    return (
                                        <View style={styles.row}>
                                            <View style={styles.first}>
                                                <Text>{item.name}</Text>
                                            </View>
                                            <View style={styles.second}>
                                                <Text>{item.target}</Text>
                                            </View>
                                            <View style={styles.third}>
                                                <Text>{item.total}</Text>
                                            </View>
                                            <View style={styles.fourth}>
                                                <Text style={{ color: item.left < 0 ? 'red' : 'lightgreen' }}>{item.left}</Text>
                                            </View>
                                        </View>
                                    )

                                })
                                }
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