import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Container, Icon } from '../../components';
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';
import RNBounceable from '@freakycoder/react-native-bounceable';
import moment from 'moment';
class ProgramLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            program: [
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
            ]
        }
    }

    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable style={{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: "5%", elevation: 2, padding: "5%", borderRadius: 10,marginBottom:10 }} onPress={() => { }}>
                <View style={{
                    borderRadius: 10, height: 70, width: 70,
                    justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
                }}>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}></Text>
                </View>
                <View style={{ flex: 0.8, marginHorizontal: "5%" }}>

                    <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.type}</Text>


                </View>
            </RNBounceable>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    render() {
        const { program, reportModal, issue } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={{ marginTop: "10%" }}>
                        <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                        <ScrollView style={{paddingBottom:100}}>
                            <View style={styles.rowContainer} >
                                <Text style={styles.textStyle}>A to Z</Text>
                                <RNBounceable onPress={() => this.props.navigation.navigate('WorkoutLibrary')} style={styles.row}>
                                    {/* <Text style={styles.viewStyle} >View all</Text> */}
                                    <Icon.FontAwesome name="filter" size={20} />
                                </RNBounceable>
                            </View>
                            <FlatList
                                data={program}
                                keyExtractor={item => item}
                                style={{ marginBottom: 100,paddingBottom:20 }}
                                ItemSeparatorComponent={this.renderSeparator}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ index, item }) => this._renderItems({ index, item })}

                            />
                        </ScrollView>

                    </View>

                </View>
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgramLibrary)
