import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Icon } from '../../components';
import { ICON_COLOR } from '../../lib/utils/constants';
import { authActions } from '../../redux/actions/auth';

import styles from './style';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    text: 'Some Text Mesage',
                    align: 'left',
                },
                {
                    text: 'Some Long Text Mesage',
                    align: 'right',
                },
                {
                    text: 'Some Text Mesage',
                    align: 'left',
                },
                {
                    text: 'Some Text Mesage',
                    align: 'left',
                },
                {
                    text: 'Some Long Text Mesage',
                    align: 'right',
                },
                {
                    text: 'Some Text Mesage',
                    align: 'left',
                },
                {
                    text: 'Some Long Text Mesage',
                    align: 'right',
                },
                {
                    text: 'Some Long Text Mesage',
                    align: 'right',
                },
            ],
            attachment: false
        }
    }

    _renderSeparator = () => {
        return (
            <View style={styles.seperatorStyle}></View>
        )
    }

    _renderItems = (item) => {
        const checkBubbleStyle = {
            borderBottomLeftRadius: item.align == 'left' ? 0 : 20,
            borderBottomRightRadius: item.align == 'right' ? 0 : 20,
            marginLeft: item.align == 'left' ? 5 : 0,
            marginRight: item.align == 'right' ? 6 : 0,
            backgroundColor: item.align == 'left' ? 'gray' : 'lightgray',
            alignSelf: item.align == 'right' ? 'flex-end' : 'flex-start',
            flexDirection: 'row'
        }
        const itemContainerCheckStyle = {
            alignSelf: item.align == 'right' ? 'flex-end' : 'flex-start',
            marginLeft: item.align == 'right' ? 0 : 10
        }

        return (
            <>
                <View style={[styles.itemContainer, itemContainerCheckStyle]}>
                    {
                        item.align == 'left' ?
                            <Image source={require('../../assets/images/logo.png')} resizeMode="cover" style={styles.imageStyle} />
                            :
                            null
                    }
                    <View style={[styles.balloon, checkBubbleStyle]}                    >
                        <View>
                            <Text style={[styles.item, { paddingBottom: 10 }]}>{item.text}</Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>
                    <FlatList
                        data={this.state.messages}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ justifyContent: "flex-end" }}
                        ItemSeparatorComponent={this._renderSeparator}
                        renderItem={({ item }) => this._renderItems(item)}
                        keyExtractor={item => item}

                    />
                </View>
                <View style={styles.attachment}>
                    {
                        this.state.attachment ?
                            <View style={styles.attachmentContainer}>
                                <Icon.Ionicons
                                    name='happy'
                                    size={30}
                                    color={ICON_COLOR} />
                                <Icon.Entypo
                                    name='attachment'
                                    size={30}
                                    color={ICON_COLOR} />
                                <View style={styles.iconContainer}>
                                    <Icon.Ionicons
                                        name='md-paper-plane'
                                        size={30}
                                        color={ICON_COLOR} />
                                </View>
                            </View>
                            :
                            null
                    }
                    <View style={[styles.inputBoxView]}>
                        <TouchableOpacity onPress={() => this.setState({ attachment: !this.state.attachment })} style={{ padding: 7.5 }}>
                            <Icon.Entypo name='plus' size={30} style={{ color: 'lightgray' }} />
                        </TouchableOpacity>
                        <Icon.Ionicons name='mic' size={30} style={{ color: 'lightgray' }} />
                        <TextInput style={styles.commentInput}
                            placeholder="  Type here..."
                            onChangeText={text => { this.setState({ txtMessage: text }) }}
                            selectionColor="#FFF"
                        />
                        <Icon.Ionicons name='md-paper-plane' size={30} color={ICON_COLOR} />
                    </View>
                </View>




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

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
