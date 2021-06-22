import moment from 'moment';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import ProgressCircle from 'react-native-progress-circle'

import { Icon } from '../../components';
import { authActions } from '../../redux/actions/auth';

class ProgramDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text>
                        Duration
                    </Text>
                    <View>
                        <Icon.MaterialCommunityIcons name="checkbox-marked-circle" size={50} color={"#96CC39"} />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text>Start Date</Text>
                        <Text>{moment().format('llll')}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text>Completion</Text>
                        <Text>{moment().format('llll')}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Icon.MaterialCommunityIcons name="calendar-month" size={50} color={"#96CC39"} />
                        <Text>Weeks</Text>
                    </View>


                    <View>

                    </View>
                    <Text>
                        Latest Weight
                    </Text>
                    <View>
                        <Icon.MaterialCommunityIcons name="checkbox-marked-circle" size={50} color={"#96CC39"} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text>Starting Weight</Text>
                        <Text>120.00kg</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text>Weight change</Text>
                        <Text>-120.00kg</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Icon.MaterialCommunityIcons name="calendar-month" size={50} color={"#96CC39"} />
                        <Text>Weeks</Text>
                    </View>
                    <View>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#96CC39"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <ProgressCircle
                                percent={20}
                                radius={45}
                                borderWidth={8}
                                color="#3399FF"
                                shadowColor="#999"
                                bgColor="#fff"
                            >
                                <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                            </ProgressCircle>
                        </ProgressCircle>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramDetail)