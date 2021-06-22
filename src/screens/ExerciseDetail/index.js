import React, { Component } from 'react'
import { View, Text, ScrollView, Image, StatusBar, Dimensions, FlatList } from 'react-native'
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
import { LOGO } from '../../lib/utils/constants';

const { width, height } = Dimensions.get('window');

class ExerciseDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            currentPage: 0,
            macrosModal: false,
        }
    }


    render() {
        const { currentPage, breakFast, macrosModal, macros } = this.state;
        let { heading } = this.props.route.params;
        return (
            <>
                <Container props={this.props} >
                    <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
                    <View style={styles.container}>
                        <ScrollView>
                            <View style={styles.imageContainer}>
                                <Image source={LOGO} style={styles.imageStyle} resizeMode="contain" />
                            </View>
                            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                                <View >
                                    <Text style={styles.itemTextStyle}>{"Type"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textStyle1}>{"Plyometrics"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                                <View >
                                    <Text style={styles.itemTextStyle}>{"Main Muscle Worked"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textStyle1}>{"Abdominals"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                                <View >
                                    <Text style={styles.itemTextStyle}>{"Other Muscles"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textStyle1}>{"Abdominals"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                                <View >
                                    <Text style={styles.itemTextStyle}>{"Equipment"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textStyle1}>{"Body Only"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                                <View >
                                    <Text style={styles.itemTextStyle}>{"Mechanics Type"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textStyle1}>{"Isolation"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                                <View >
                                    <Text style={styles.itemTextStyle}>{"Level"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textStyle1}>{"Beginner"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                                <View >
                                    <Text style={styles.itemTextStyle}>{"Sport"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textStyle1}>{"No"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { }} style={styles.itemContainer}>
                                <View >
                                    <Text style={styles.itemTextStyle}>{"Force"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textStyle1}>{"N / A"}</Text>
                                </View>
                            </RNBounceable>
                            <View style={styles.generalMargin}>
                                <Text style={styles.descriptionHeading}>Exercise Description</Text>
                                <Text style={{ marginTop: "5%", fontSize: 16 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor dictum turpis id semper. Aenean eros enim, feugiat vitae mauris et, molestie tempus erat. Nullam eros sem, convallis et sem in, posuere vulputate libero. Fusce vel tristique urna. Aenean quis purus ex. Nulla felis velit, venenatis eget posuere vel, consectetur a augue. Donec eleifend, nisl suscipit molestie semper, tellus urna tincidunt orci, tristique blandit dui nunc sed nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vestibulum vestibulum auctor. Nulla facilisi.
                            </Text>
                            </View>
                        </ScrollView>

                    </View>
                </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseDetail);