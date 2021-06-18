import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";import RNBounceable from '@freakycoder/react-native-bounceable';
import { Container, FilterModal, Icon } from '../../components';

import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';

import styles from './style';

class ProgramLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterModal: false,
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
            <RNBounceable style={styles.itemContainer} onPress={() => { }}>
                <View style={styles.boxView}>
                    <Text></Text>
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
        const { program, reportModal, issue,filterModal } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={{ marginTop: "10%" }}>
                        <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                        <ScrollView style={{ paddingBottom: 100 }}>
                            <View style={styles.rowContainer} >
                                <Text style={styles.textStyle}>A to Z</Text>
                                <RNBounceable onPress={() => this.setState({ filterModal: true })} style={styles.row}>
                                    <Icon.FontAwesome name="filter" size={20} />
                                </RNBounceable>
                            </View>
                            <FlatList
                                data={program}
                                keyExtractor={item => item}
                                style={{ marginBottom: 100, paddingBottom: 20 }}
                                ItemSeparatorComponent={this.renderSeparator}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ index, item }) => this._renderItems({ index, item })}
                            />
                        </ScrollView>
                    </View>
                </View>
                <FilterModal isVisible={filterModal} hide={() => this.setState({ filterModal: false })} />
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
