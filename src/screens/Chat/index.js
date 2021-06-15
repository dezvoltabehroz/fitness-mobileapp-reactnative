import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, FilterModal, Icon } from '../../components';
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';
import RNBounceable from '@freakycoder/react-native-bounceable';
import moment from 'moment';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class Media extends Component {
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
        return (
            <>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignSelf: item.align == 'right' ? 'flex-end' : 'flex-start', marginLeft: item.align == 'right' ? 0 : 10 }}>
                    {
                        item.align == 'left' ?
                            <Image source={require('../../assets/images/logo.png')} resizeMode="cover" style={{ height: 50, width: 40 }} />
                            :
                            null
                    }
                    <View
                        style={[styles.balloon, {
                            borderBottomLeftRadius: item.align == 'left' ? 0 : 20,
                            borderBottomRightRadius: item.align == 'right' ? 0 : 20,
                            marginLeft: item.align == 'left' ? 5 : 0,
                            marginRight: item.align == 'right' ? 6 : 0,
                            backgroundColor: item.align == 'left' ? 'gray' : 'lightgray',
                            alignSelf: item.align == 'right' ? 'flex-end' : 'flex-start',
                            flexDirection: 'row'
                        }]}
                    >

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

                <View style={{ flex: 1, paddingTop: '2.5%', marginBottom: 10 }}>
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
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Icon.Ionicons name='happy' size={30} style={{ color: 'lightgray' }} />
                                <Icon.Entypo name='attachment' size={30} style={{ color: 'lightgray' }} />
                                <View style={{ backgroundColor: "rgb(30,199,178)", borderRadius: 30, padding: 2.5 }}>
                                    <Icon.Ionicons name='md-paper-plane' size={30} style={{ color: 'white' }} />
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
                            // multiline={true}
                            // placeholderTextColor=""
                            // value={this.state.txtMessage}
                            onChangeText={text => {
                                this.setState({ txtMessage: text })
                            }}
                            selectionColor="#FFF"
                        />
                        <Icon.Ionicons name='md-paper-plane' size={30} style={{ color: 'gray' }} />
                    </View>
                </View>




            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Media)
