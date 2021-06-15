import RNBounceable from '@freakycoder/react-native-bounceable';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Icon } from '..';
import { Icon as IconS } from 'native-base';
import Modal from 'react-native-modal'

class FilterModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: [
                {
                    name: "sort-alpha-down",
                    type: "FontAwesome5",
                    title: "A to Z",
                    selected: true
                },
                {
                    name: "sort-alpha-up",
                    type: "FontAwesome5",
                    title: "Z to A",
                    selected: false
                },
                {
                    name: "refresh",
                    type: "MaterialCommunityIcons",
                    title: "Most Recent",
                    selected: false
                },
                {
                    name: "back-in-time",
                    type: "Entypo",
                    title: "Oldest Fisrt",
                    selected: false
                },
            ],
            fileFilter: [
                {
                    title: "All Files",
                    selected: true
                },
                {
                    title: "Favourite Files Only",
                    selected: false
                },
                {
                    title: "Assigned Files Only",
                    selected: false
                }
            ]
        }
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
        const { isVisible, hide, file } = this.props;
        const { filter, fileFilter } = this.state;
        return (
            <Modal isVisible={isVisible}
                animationInTiming={1000}
                animationOutTiming={1000}
                style={{ justifyContent: 'flex-end', margin: 0 }} >
                <View style={styles.modalLowerFilterContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderRadius: 10, paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <Text style={styles.headingStyle}>Sort</Text>
                        <RNBounceable onPress={() => {
                            let array = [...this.state.filter];
                            array.map((element, i) => {
                                array[i].selected = false;
                            });
                            array[0].selected = true;
                            this.setState({ filter: array }, () => hide())
                        }}>
                            <Text style={styles.textStyle}>Clear all</Text>
                        </RNBounceable>
                    </View>
                    <FlatList data={filter} keyExtractor={(item) => item.title} renderItem={({ index, item }) => this._renderItem(index, item)} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between",  borderRadius: 10, paddingVertical: "5%", paddingHorizontal: "5%" }}>
                        <Text style={styles.headingStyle}>Files</Text>
                        <RNBounceable onPress={() => {
                            let array = [...this.state.fileFilter];
                            array.map((element, i) => {
                                array[i].selected = false;
                            });
                            array[0].selected = true;
                            this.setState({ fileFilter: array }, () => hide())
                        }}>
                            <Text style={styles.textStyle}>Clear all</Text>
                        </RNBounceable>
                    </View>
                    {
                        file ?
                            <FlatList data={fileFilter} keyExtractor={(item) => item.title} renderItem={({ index, item }) => this._renderFileItem(index, item)} />
                            :
                            null
                    }
                    <RNBounceable onPress={() => hide()} style={{ justifyContent: "center", paddingVertical: "5%",backgroundColor:"#181818", alignItems: "center" }}>
                        <Icon.Entypo name="cross" color="white" size={40} />
                    </RNBounceable>
                </View>
            </Modal>
        )
    }

}

const styles = StyleSheet.create({
    headingStyle: {
        color: "white",
        fontSize: 20,
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

export default FilterModal;