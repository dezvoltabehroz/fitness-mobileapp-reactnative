import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Container, FilterModal, Icon, Loader } from '../../components';
import { Input } from '../../components/Input/Input.component';

import styles from './style';
import { WorkoutsServices } from '../../services';
import { LOGO, TOKEN } from '../../lib/utils/constants';

class WorkoutLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterModal: false,
            workout: [],
            loading: true
        }
    }

    componentDidMount = () => {
        const { userData } = this.props.user;
        WorkoutsServices.getAllWorkouts(userData.token, TOKEN, userData.userId)
            .then((res) => { this.setState({ workout: res.data, loading: false }) })
            .catch((err) => { this.setState({ workout: [], loading: false }); console.log(err) })
    }

    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable onPress={() => { this.props.navigation.navigate('WorkoutDetails', { heading: item.type }) }} style={styles.itemContainer} onPress={() => { }}>
                <Image style={styles.boxView} source={item.imagePath != "" ? { uri: item.imagePath } : LOGO} />
                <View style={styles.itemTypeContainer}>
                    <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.workoutName}</Text>
                </View>
            </RNBounceable>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    render() {
        const { workout, reportModal, loading, filterModal } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    {
                        loading ?
                            <Loader />
                            :
                            workout.length == 0 ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Text style={styles.viewStyle} >No workout is found</Text>
                                </View>
                                :
                                <View style={{ marginTop: "10%" }}>
                                    <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                                    <ScrollView style={{ paddingBottom: 100 }}>
                                        <View style={styles.rowContainer} >
                                            <Text style={styles.textStyle}>A to Z</Text>
                                            <RNBounceable onPress={() => this.setState({ filterModal: true })} style={styles.row}>
                                                {/* <Text style={styles.viewStyle} >View all</Text> */}
                                                <Icon.FontAwesome name="filter" size={20} />
                                            </RNBounceable>
                                        </View>
                                        <FlatList
                                            data={workout}
                                            keyExtractor={item => item}
                                            style={{ marginBottom: 100, paddingBottom: 20 }}
                                            ItemSeparatorComponent={this.renderSeparator}
                                            showsVerticalScrollIndicator={false}
                                            renderItem={({ index, item }) => this._renderItems({ index, item })}
                                        />
                                    </ScrollView>
                                </View>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutLibrary)
