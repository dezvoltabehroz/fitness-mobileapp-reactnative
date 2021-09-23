import React, { Component } from 'react'
import {
    View, Text, FlatList, Dimensions
} from 'react-native'
import { route } from '../../lib/utils/constants';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { Icon, Container, Loader, } from "../../components";

import styles from './style';
import { ProgramServices } from '../../services';

class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            workout: []
        }
    }

    componentDidMount = () => {
        this.setState({ loading: true })
        const { userData } = this.props.user;

        ProgramServices.getAllPrograms(userData.token, userData.userId)
            .then((res) => {
                if (res.data.responseMessage) {
                    this.setState({ workout: [], loading: false })
                } else {
                    this.setState({ workout: res.data, loading: false })
                }
            })
            .catch((err) => { this.setState({ workout: [], loading: false }); console.log(err) })
    }

    render() {
        const { workout, reportModal, issue, loading } = this.state;
        const totalItemWidth = Dimensions.get('window').width - 140;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{"Programs"}</Text>
                    </View>

                    <View style={styles.lowerContentContainer}>
                        {
                            loading ?
                                <Loader />
                                :
                                <>
                                    <View style={styles.rowContainer} >
                                        <Text style={styles.recentStyle}>Recent</Text>
                                        <RNBounceable onPress={() => this.props.navigation.navigate('ProgramLibrary')} style={styles.row}>
                                            <Text style={styles.viewStyle} >View all</Text>
                                            <Icon.Entypo name="chevron-small-right" size={20} />
                                        </RNBounceable>
                                    </View>

                                    {workout.length == 0 ?
                                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={styles.viewStyle} >No record exists!</Text>
                                        </View>
                                        :
                                        <>
                                            <FlatList
                                                data={workout}
                                                contentContainerStyle={{ paddingBottom: 180 }}
                                                keyExtractor={item => item}
                                                renderItem={({ index, item }) => {
                                                    return (
                                                        <RNBounceable onPress={() => { this.props.navigation.navigate(route.PROGRAM_DETAIL, { heading: item.programName, data: item }) }} style={styles.contentContainer} >
                                                            <View style={styles.boxView}>
                                                                <Text></Text>
                                                            </View>
                                                            <View style={{ flex: 0.8, marginHorizontal: "5%" }}>
                                                                <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.programName}</Text>
                                                            </View>
                                                        </RNBounceable>
                                                    )
                                                }}

                                            />
                                        </>}
                                </>
                        }

                    </View>
                </View>
            </Container >
        )
    }
}
const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Programs);