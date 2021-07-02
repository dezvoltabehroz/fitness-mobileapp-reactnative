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

    render() {
        const { isVisible, hide, image, title } = this.props;
        return (
            <Modal isVisible={isVisible}
                animationInTiming={1000}
                animationOutTiming={1000}
                style={{ justifyContent: 'flex-end', margin: 0 }} >
                <View style={styles.modalLowerFilterContainer}>
                  
                    <RNBounceable onPress={() => { }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon.FontAwesome5 name="edit" color="white" size={25} />
                            <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{"Rename Meal"}</Text>
                        </View>
                        <Icon.Entypo name="chevron-right" color={"#FFFF"} size={25} />
                    </RNBounceable>
                    <RNBounceable onPress={() => { }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon.Entypo name="save" color={"#FFFFFF"} size={25} />
                            <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{"Save meal as template "}</Text>
                        </View>
                        <Icon.Entypo name="chevron-right" color={"#FFFFFF"} size={25} />
                    </RNBounceable>
                    
                    <RNBounceable onPress={() => { }} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon.Ionicons name="trash-bin-sharp" color="white" size={25} />
                            <Text style={[styles.headingTextStyle, { marginLeft: 15 }]}>{"Delete Meal"}</Text>
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