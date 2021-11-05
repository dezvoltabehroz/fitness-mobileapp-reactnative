import RNBounceable from '@freakycoder/react-native-bounceable';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from '../../';
import { Icon as IconS } from 'native-base';
import Modal from 'react-native-modal'

class ExerciseModal extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    _renderItem = (index, item) => {
        return (
            <RNBounceable onPress={() => {
                let array = [...this.state.filter];
                array.map((element, i) => {
                    array[i].selected = false;
                });
                array[index].selected = true;
                this.setState({ filter: array }, () => this.props.hide())
            }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <IconS type={item.type} name={item.name} style={{ color: "white", fontSize: 20 }} />
                    <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{item.title}</Text>
                </View>
                {
                    item.selected ?

                        <Icon.Ionicons name="ios-checkmark-circle-outline" color={"#96CC39"} size={25} />

                        : null
                }
            </RNBounceable>
        )

    }

    _renderFileItem = (index, item) => {
        return (
            <RNBounceable onPress={() => {
                let array = [...this.state.fileFilter];
                array.map((element, i) => {
                    array[i].selected = false;
                });
                array[index].selected = true;
                this.setState({ fileFilter: array }, () => this.props.hide())
            }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                <Text style={[styles.headingTextStyle]}>{item.title}</Text>
                {
                    item.selected ?

                        <Icon.Ionicons name="ios-checkmark-circle-outline" color={"#96CC39"} size={25} />

                        : null
                }
            </RNBounceable>
        )
    }

    render() {
        const { isVisible, hide, image, title, onPressHistory, onPressRemoveExercise, onPressAddNote, onPressCreateSet } = this.props;
        return (
            <Modal isVisible={isVisible}
                animationInTiming={1000}
                animationOutTiming={1000}
                style={{ justifyContent: 'flex-end', margin: 0 }} >
                <View style={styles.modalLowerFilterContainer}>
                    <View style={styles.headingContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={image ? { uri: image } : require('../../../assets/images/logo.png')} style={styles.imageStyle} resizeMode="contain" />
                        </View>
                        <Text style={[styles.headingStyle,]}>{title}</Text>
                    </View>
                    <RNBounceable onPress={() => { onPressAddNote() }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon.Ionicons name="clipboard" color="white" size={25} />
                            <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{"Add Note"}</Text>
                        </View>
                        <Icon.Entypo name="chevron-right" color={"#FFFF"} size={25} />
                    </RNBounceable>
                    <RNBounceable onPress={() => { onPressHistory(); }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon.MaterialCommunityIcons name="refresh" color={"#FFFFFF"} size={25} />
                            <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{"History"}</Text>
                        </View>
                        <Icon.Entypo name="chevron-right" color={"#FFFFFF"} size={25} />
                    </RNBounceable>
                    <RNBounceable onPress={() => { onPressCreateSet() }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon.Entypo name="plus" color="white" size={25} />
                            <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{"Create Super Set or Gaint Set"}</Text>
                        </View>
                        <Icon.Entypo name="chevron-right" color={"#FFFF"} size={25} />
                    </RNBounceable>
                    <RNBounceable onPress={() => { }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon.Fontisto name="arrow-swap" color={"#FFFFFF"} size={25} />
                            <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{"Swap Exercises"}</Text>
                        </View>
                        <Icon.Entypo name="chevron-right" color={"#FFFFFF"} size={25} />
                    </RNBounceable>
                    <RNBounceable onPress={() => { onPressRemoveExercise() }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon.Ionicons name="trash-bin-sharp" color="white" size={25} />
                            <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{"Remove Exercise"}</Text>
                        </View>
                        <Icon.Entypo name="chevron-right" color={"#FFFF"} size={25} />
                    </RNBounceable>
                    <RNBounceable onPress={() => hide()} style={{ justifyContent: "center", paddingVertical: "5%", backgroundColor: "#181818", alignItems: "center" }}>
                        <Icon.Entypo name="cross" color="white" size={40} />
                    </RNBounceable>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    headingContainer: {
        marginHorizontal: "7.5%", marginVertical: "5%"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        height: 200,
        width: 250
    },
    headingStyle: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    headingTextStyle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold"
    }
})

export default ExerciseModal;