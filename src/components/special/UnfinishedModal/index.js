import RNBounceable from '@freakycoder/react-native-bounceable';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Icon as IconS } from 'native-base';
import Modal from 'react-native-modal'

import { Button, Icon } from '../../';

import THEME from '../../../assets/styles/theme.style';
class UnfinishedModal extends Component {

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
        const { isVisible, hide, quitSession } = this.props;
        const { filter, fileFilter } = this.state;
        return (
            <Modal isVisible={isVisible}
                animationInTiming={1000}
                animationOutTiming={1000}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.iconContainer}>
                            <Icon.MaterialIcons name="mode-edit" size={50} />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={[styles.headingStyle]}>{"You have an unfinished workout"}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={[styles.headingTextStyle]}>{"Finish what you started 2 minutes ago or start a new session now."}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button.BrownButton title="Continue" onPress={() => hide()} />
                    </View>
                    <RNBounceable onPress={() => hide()} style={{ justifyContent: "center", paddingVertical: "5%", alignItems: "center" }}>
                        <Text style={[styles.textStyle]}>{"Start a Session"}</Text>
                    </RNBounceable>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 25,
        padding: "5%"
        // alignItems: "center"

    },
    iconContainer: {
        height: 100, width: 100,
        borderRadius: 50,
        backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR,
        justifyContent: "center",
        alignItems: "center"
    },
    headingStyle: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center"
    },
    headingTextStyle: {
        fontSize: 16,
        color: 'lightgray',
        textAlign: "center"
    },
    textStyle: {
        textAlign: "center",
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%"
    }
})

export default UnfinishedModal;