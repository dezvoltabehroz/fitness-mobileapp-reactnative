import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Dimensions } from 'react-native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';
import { Icon, Container, Button } from "../../components";

import styles from './style';


const { width, height } = Dimensions.get('window');

class WorkoutTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            currentPage: 0,
            templates: [
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: true,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
            ]
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

    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable onPressIn={() => this.handlePress(index)} style={styles.itemContainer} onPress={() => { }}>
                <View style={styles.boxView}>
                    <Text></Text>
                </View>
                <View style={styles.row}>
                    <Text numberOfLines={3} style={styles.itemTextStyle}>{item.type}</Text>
                    <View style={{ flex: 0.1 }} >
                        <Icon.MaterialIcons name={item.selected ? 'check-box' : 'check-box-outline-blank'} size={20} color='black' />
                    </View>
                </View>
            </RNBounceable>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    render() {
        const { currentPage, } = this.state;
        return (
            <Container props={this.props} >
                <View style={styles.container}>
                    <View style={styles.upperContentContainer}>
                        <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
                            <View >
                                <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#544b4c" }]}>{"Assigned"}</Text>
                            </View>
                        </RNBounceable>
                        <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
                            <View >
                                <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#544b4c" }]}>{"Created"}</Text>
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
                        style={{ flex: 0.8 }} >
                        <View style={styles.firstContainer}>
                            <View style={styles.marginHorizontal}>
                                <Input inputStyle={{ height: 40 }} placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                            </View>
                            <FlatList
                                data={this.state.templates}
                                keyExtractor={item => item}
                                contentContainerStyle={{ paddingTop: "5%", paddingBottom: 120 }}
                                ItemSeparatorComponent={this.renderSeparator}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ index, item }) => this._renderItems({ index, item })}

                            />
                            <View style={styles.buttonContainer}>
                                <View style={styles.buttonStyle}>
                                    <Button.SlimButton title={"Done"} onPress={() => { this.props.navigation.navigate('StartWorkout') }} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.secondContainer}>
                            <View style={{ flex: 1, }}>
                                <View style={styles.marginHorizontal}>
                                    <Input inputStyle={{ height: 40 }} placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                                </View>

                                <View style={{ alignItems: "center", flex: 0.7 }}>
                                    <View style={styles.iconContainer}>
                                        <Icon.FontAwesome5 name="fire-alt" size={30} color={"white"} />
                                    </View>
                                    <View style={styles.marginTop}>
                                        <Text style={styles.textStyle}>Nothing to see here?</Text>
                                    </View>
                                    <View style={styles.marginTop}>
                                        <Text style={styles.textStyle1}>Nothing added just yet!</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={styles.buttonContainer}>
                                <View style={styles.buttonStyle}>
                                    <Button.SlimButton title={"Done"} onPress={() => { this.props.navigation.navigate('StartWorkout') }} />
                                </View>
                            </View>

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

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutTemplate);