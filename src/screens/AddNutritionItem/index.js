// import React, { Component } from 'react';
// import { View, Text, FlatList, ScrollView, Dimensions } from 'react-native';
// import RNBounceable from '@freakycoder/react-native-bounceable';
// import { connect } from 'react-redux'
// import { bindActionCreators } from "redux";

// import { authActions } from '../../redux/actions/auth';
// import { Container, FilterModal, Icon } from '../../components';

// import styles from './style';
// import { renderSeperator } from '../../lib/utils/global';
// import { route } from '../../lib/utils/constants';

// const { width, height } = Dimensions.get('window');
// class AddNutritionItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filterModal: false,
//             currentPage: 0,
//             notification: [
//                 {
//                     user_name: 'T',
//                     type: 'Ended program Female Fat Loss Female Fat Loss',
//                     activity: 'Female Fat Loss',
//                  id:0,
//                 },
//                 {
//                     user_name: 'T',
//                     type: 'Ended program Female Fat Loss Female Fat Loss',
//                     activity: 'Female Fat Loss',
//                  id:0,
//                 },
//                 {
//                     user_name: 'T',
//                     type: 'Ended program Female Fat Loss Female Fat Loss',
//                     activity: 'Female Fat Loss',
//                  id:0,
//                 },
//                 {
//                     user_name: 'T',
//                     type: 'Ended program Female Fat Loss Female Fat Loss',
//                     activity: 'Female Fat Loss',
//                  id:0,
//                 },
//                 {
//                     user_name: 'T',
//                     type: 'Ended program Female Fat Loss Female Fat Loss',
//                     activity: 'Female Fat Loss',
//                  id:0,
//                 },
//                 {
//                     user_name: 'T',
//                     type: 'Ended program Female Fat',
//                     activity: 'Female Fat Loss',
//                  id:0,
//                 },
//                 {
//                     user_name: 'T',
//                     type: 'Ended program Female Fat Loss Female Fat Loss',
//                     activity: 'Female Fat Loss',
//                  id:0,
//                 },
//                 {
//                     user_name: 'T',
//                     type: 'Ended program Female Fat Loss Female Fat Loss',
//                     activity: 'Female Fat Loss',
//                  id:0,
//                 },
//             ],
//             selected: [],
//         }
//     }

//     setSliderPage = (event: any) => {
//         const { currentPage } = this.state;
//         const x = event.nativeEvent.contentOffset;
//         const indexOfNextScreen = Math.floor(x.x / Math.floor((width)));
//         if (indexOfNextScreen !== currentPage) {
//             this.setState({
//                 currentPage: indexOfNextScreen,
//             });
//         }
//     };

//     _renderItems = ({ index, item }) => {
//         return (
//             <View>
//                 <RNBounceable onPressIn={() => { this.props.navigation.navigate(route.NUTRITION_DETAIL, { heading: item.type }) }} style={styles.itemContainer} onPress={() => { }}>
//                     <View style={styles.boxView}>
//                         <Text></Text>
//                     </View>
//                     <View style={styles.itemTypeContainer}>
//                         <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.type}</Text>
//                     </View>
//                 </RNBounceable>
//             </View>

//         )
//     }

//     render() {
//         const { notification, currentPage, issue, filterModal } = this.state;
//         return (
//             <Container props={this.props}>
//                 <View style={styles.container}>
//                     <View style={styles.upperContentContainer}>
//                         <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
//                             <View >
//                                 <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#C0C0C0" }]}>{"Search"}</Text>
//                             </View>
//                         </RNBounceable>
//                         <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
//                             <View >
//                                 <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#C0C0C0" }]}>{"Custom"}</Text>
//                             </View>
//                         </RNBounceable>
//                         <RNBounceable onPress={() => { this.setState({ currentPage: 2 }); this.scroll.scrollTo({ x: width * 2 }); }}>
//                             <View >
//                                 <Text style={[styles.headingStyle, { color: currentPage == 2 ? "black" : "#C0C0C0" }]}>Selected({this.state.selected.length})</Text>
//                             </View>
//                         </RNBounceable>
//                     </View>
//                     <ScrollView
//                         horizontal={true}
//                         scrollEventThrottle={16}
//                         pagingEnabled={true}
//                         showsHorizontalScrollIndicator={false}
//                         ref={(node) => (this.scroll = node)}
//                         onScroll={(event) => this.setSliderPage(event)}
//                         style={{ flex: 0.8 }}>
//                         <View style={styles.firstContainer}>
//                             <View style={{ marginTop: "10%" }}>
//                             <Text style={styles.textStyle}>A to Z</Text>
//                                 <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
//                                 <ScrollView style={{ paddingBottom: 100 }}>
//                                     <View style={styles.rowContainer} >
//                                         <Text style={styles.textStyle}>A to Z</Text>
//                                         <RNBounceable onPress={() => this.setState({ filterModal: true })} style={styles.row}>
//                                             <Icon.FontAwesome name="filter" size={20} />
//                                         </RNBounceable>
//                                     </View>
//                                     <FlatList
//                                         data={notification}
//                                         keyExtractor={item => item}
//                                         style={{ marginBottom: 100, paddingBottom: 20 }}
//                                         ItemSeparatorComponent={(renderSeperator)}
//                                         showsVerticalScrollIndicator={false}
//                                         renderItem={({ index, item }) => this._renderItems({ index, item })}
//                                     />
//                                 </ScrollView>
//                             </View>
//                         </View>
//                         <View style={styles.secondContainer}>
//                             <ScrollView contentContainerStyle={{ paddingBottom: '30%' }}>
//                                 <View style={{ flex: 1, }}>

//                                 </View>
//                             </ScrollView>
//                         </View>
//                     </ScrollView>
//                 </View>
//                 <FilterModal isVisible={filterModal} hide={() => this.setState({ filterModal: false })} />
//             </Container>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return { user: state.authReducer || {} };
// };

// const mapDispatchToProps = dispatch => {
//     return { authActions: bindActionCreators(authActions, dispatch) };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddNutritionItem)
import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions, FlatList } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Icon, Button, Container, FilterModal } from "../../components";
import { Input } from '../../components/Input/Input.component';

import styles from './style';
import { renderSeperator } from '../../lib/utils/global';
const { width, height } = Dimensions.get('window');

class WorkoutDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            currentPage: 0,
            filterModal: false,
            selected: [],
            notification: [
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    id: 1
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    id: 2,
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    id: 3,
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    id: 4,
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    id: 5,
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat',
                    activity: 'Female Fat Loss',
                    id: 6,
                },
                {
                    selected: true,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    id: 7,
                },
                {
                    selected: false,
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    id: 8,
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
        let array = [...this.state.notification]
        let selectedArray = [...this.state.selected]
        if (array[index].selected) {
            array[index] = { ...array[index], selected: false };
            selectedArray = selectedArray.filter((item) => item.id != array[index].id)
        } else {
            array[index] = { ...array[index], selected: true };
            selectedArray.push(array[index])
        }
        this.setState({ notification: array, selected: selectedArray })
    }

    _renderItems = ({ index, item }) => {
        return (
            < RNBounceable onPress={() => this.handlePress(index)} style={styles.itemRowContainer}>
                <View style={{ flex: 0.1 }} >
                    <Icon.MaterialIcons name={item.selected ? 'check-box' : 'check-box-outline-blank'} size={20} color='black' />
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.row}>
                        <Text numberOfLines={3} style={styles.itemTextStyle}>{item.type}</Text>
                    </View>
                </View>
            </RNBounceable>
        )
    }

    _renderSelectedItems = ({ index, item }) => {
        return (
            < RNBounceable onPress={() => this.handlePress(index)} style={styles.itemRowContainer}>
                <View style={{ flex: 0.1 }} >
                    <Icon.MaterialIcons name={item.selected ? 'check-box' : 'check-box-outline-blank'} size={20} color='black' />
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.boxView1}>
                        <Text></Text>
                    </View>
                    <View style={styles.row}>
                        <Text numberOfLines={3} style={styles.itemTextStyle}>{item.type}</Text>
                    </View>
                </View>
            </RNBounceable>
        )
    }


    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    render() {
        const { currentPage, notification, filterModal } = this.state;
        return (
            <Container props={this.props} >
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.upperContentContainer}>
                        <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
                            <View >
                                <Text style={[styles.headingStyle, { color: currentPage == 0 ? "black" : "#C0C0C0" }]}>{"Search"}</Text>
                            </View>
                        </RNBounceable>
                        <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
                            <View >
                                <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#C0C0C0" }]}>{"Custom"}</Text>
                            </View>
                        </RNBounceable>
                        <RNBounceable onPress={() => { this.setState({ currentPage: 2 }); this.scroll.scrollTo({ x: width * 2 }); }}>
                            <View >
                                <Text style={[styles.headingStyle, { color: currentPage == 2 ? "black" : "#C0C0C0" }]}>Selected({this.state.selected.length})</Text>
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
                            <View style={{ flexDirection: "row", marginHorizontal: "2.5%" }} >
                                <View style={{ flex: 0.9, }}>
                                    <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                                </View>
                                <View style={{ flex: 0.1, alignItems: "center", marginTop: 5 }}>
                                    <Icon.MaterialCommunityIcons name="barcode-scan" size={30} />
                                </View>

                            </View>
                            <ScrollView style={{ paddingBottom: 100 }}>
                                <View style={styles.rowContainer} >
                                    <View>
                                        <Text style={styles.textStyle}>Most Recent</Text>
                                    </View>

                                    <RNBounceable onPress={() => this.setState({ filterModal: true })} >
                                        <Icon.FontAwesome name="filter" size={20} />
                                    </RNBounceable>
                                </View>
                                <FlatList
                                    data={notification}
                                    keyExtractor={item => item}
                                    style={{ marginBottom: 100, paddingBottom: 20 }}
                                    ItemSeparatorComponent={(renderSeperator)}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ index, item }) => this._renderItems({ index, item })}
                                />
                            </ScrollView>
                        </View>
                        <View style={styles.firstContainer}>
                            <View style={{ flexDirection: "row", marginHorizontal: "2.5%" }} >
                                <View style={{ flex: 0.9, }}>
                                    <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                                </View>
                                <View style={{ flex: 0.1, alignItems: "center", marginTop: 5 }}>
                                    <Icon.MaterialCommunityIcons name="barcode-scan" size={30} />
                                </View>

                            </View>
                            <View style={styles.rowContainer} >
                                <View>
                                    <Text style={styles.textStyle}>A to Z</Text>
                                </View>

                                <RNBounceable onPress={() => this.setState({ filterModal: true })} >
                                    <Icon.FontAwesome name="filter" size={20} />
                                </RNBounceable>
                            </View>
                            <View style={{ alignItems: "center", flex: 0.7 }}>
                                <View style={styles.boxView}>
                                    <Icon.MaterialIcons name="dinner-dining" size={30} color={"white"} />
                                </View>
                                <View style={styles.generalMargin}>
                                    <Text style={styles.textStyle}>Nothing to see here?</Text>
                                </View>
                                <View style={styles.generalMargin}>
                                    <Text style={{ ...styles.textStyle, ...styles.textStyle1, textAlign: "center" }}>Please use the search input or select another tab</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.firstContainer}>
                            <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                            <ScrollView style={{ paddingBottom: 100 }}>
                                <View style={styles.rowContainer} >
                                    <View>
                                        <Text style={styles.textStyle}>A to Z</Text>
                                    </View>

                                    <RNBounceable onPress={() => this.setState({ filterModal: true })} >
                                        <Icon.FontAwesome name="filter" size={20} />
                                    </RNBounceable>
                                </View>
                                <FlatList
                                    data={this.state.selected}
                                    keyExtractor={item => item}
                                    style={{ marginBottom: 100, paddingBottom: 20 }}
                                    ItemSeparatorComponent={(renderSeperator)}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ index, item }) => this._renderSelectedItems({ index, item })}
                                />
                            </ScrollView>
                        </View>
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}>
                            <Button.SlimButton title={`Add(${this.state.selected.length})`} onPress={() => { this.props.navigation.navigate('CurrentWorkout') }} />
                        </View>
                    </View>
                </View>
                <FilterModal isVisible={filterModal} hide={() => this.setState({ filterModal: false })} />
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetail);