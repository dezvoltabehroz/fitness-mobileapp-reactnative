import moment from 'moment';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import ProgressCircle from 'react-native-progress-circle'
import RNBounceable from '@freakycoder/react-native-bounceable';

import { Container, Icon } from '../../components';
import { authActions } from '../../redux/actions/auth';
import { LOGO } from '../../lib/utils/constants';
import { renderSeperator } from '../../lib/utils/global';

import THEME from '../../assets/styles/theme.style'
import styles from './style';

class ProgramDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: true,
            nutrition: false,
            weeks: [
                {
                    days: [{
                        worked: true,
                        date: '2021-06-23'
                    },
                    {
                        worked: true,
                        date: '2021-06-24'
                    },
                    {
                        worked: true,
                        date: '2021-06-25'
                    },
                    {
                        worked: true,
                        date: '2021-06-26'
                    },
                    {
                        worked: false,
                        date: '2021-06-27'
                    },
                    {
                        worked: true,
                        date: '2021-06-28'
                    },
                    {
                        worked: false,
                        date: '2021-06-29'
                    }]
                },
                {
                    days: [{
                        worked: true,
                        date: '2021-06-30'
                    },
                    {
                        worked: true,
                        date: '2021-07-01'
                    },
                    {
                        worked: false,
                        date: '2021-07-02'
                    },
                    {
                        worked: true,
                        date: '2021-07-03'
                    },
                    {
                        worked: true,
                        date: '2021-07-04'
                    },
                    {
                        worked: false,
                        date: '2021-07-05'
                    },
                    {
                        worked: true,
                        date: '2021-07-06'
                    }]
                },
                {
                    days: [{
                        worked: true,
                        date: '2021-07-07'
                    },
                    {
                        worked: false,
                        date: '2021-07-08'
                    },
                    {
                        worked: true,
                        date: '2021-07-09'
                    },
                    {
                        worked: false,
                        date: '2021-07-10'
                    },
                    {
                        worked: true,
                        date: '2021-07-11'
                    },
                    {
                        worked: true,
                        date: '2021-07-12'
                    },
                    {
                        worked: false,
                        date: '2021-07-13'
                    }]
                },
                {
                    days: [{
                        worked: true,
                        date: '2021-07-14'
                    },
                    {
                        worked: false,
                        date: '2021-07-15'
                    },
                    {
                        worked: true,
                        date: '2021-07-16'
                    },
                    {
                        worked: false,
                        date: '2021-07-17'
                    },
                    {
                        worked: true,
                        date: '2021-07-18'
                    },
                    {
                        worked: true,
                        date: '2021-07-19'
                    },
                    {
                        worked: false,
                        date: '2021-07-20'
                    }]
                }]
        }
    }

    _renderItem = (item, index) => {
        return (
            <RNBounceable style={styles.rowContainer}>
                <View style={styles.rowStyle}>
                    <View style={{ marginHorizontal: "3%" }}>
                        <Text>{index + 1}</Text>
                    </View>
                    <View style={[styles.rowStyle, { justifyContent: "space-between" }]}>
                        {
                            item.days.map((element, i) => {
                                return (
                                    <View style={{ marginHorizontal: "3%" }}>
                                        { element.date == moment().format('YYYY-MM-DD') ?
                                            <Icon.MaterialIcons name="radio-button-checked" size={25} color={THEME.BUTTON_COLOR} />
                                            :
                                            <View >
                                                {
                                                    element.worked ?
                                                        <Icon.MaterialCommunityIcons name="checkbox-blank-circle" size={20} color={THEME.BUTTON_COLOR} />
                                                        :
                                                        <Icon.MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="lightgray" />
                                                }
                                            </View>}
                                    </View>
                                )

                            })
                        }
                    </View>
                </View>
                <View>
                    <Icon.Entypo name="chevron-right" size={20} />
                </View>
            </RNBounceable >
        )
    }

    render() {
        const { workouts, nutrition, weeks } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: "10%", paddingBottom: 120 }} >


                        <Text style={styles.headingStyle}>Duration </Text>
                        <View style={styles.iconContainer}>
                            <Icon.MaterialCommunityIcons name="checkbox-marked-circle" size={100} color={"#96CC39"} />
                        </View>

                        <View style={styles.rowContainer}>
                            <Text>Start Date</Text>
                            <Text>{moment().format('Do MMM YY')}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>Completion</Text>
                            <Text>{moment().format('Do MMM YY')}</Text>
                        </View>
                        <View style={styles.rowStyle}>
                            <Icon.MaterialCommunityIcons name="calendar-month" size={35} />
                            <Text style={styles.headingTextStyle}>Weeks</Text>
                        </View>


                        <View>

                            <FlatList
                                data={weeks}
                                ItemSeparatorComponent={renderSeperator}
                                renderItem={({ index, item }) => this._renderItem(item, index)}
                            />

                        </View>
                        <Text style={styles.headingStyle}>Latest Weight </Text>
                        <View style={styles.latestCircleContainer}>
                            <ProgressCircle
                                percent={0}
                                radius={70}
                                borderWidth={8}
                                color="#3399FF"
                                shadowColor="lightgray"
                                bgColor="#fff"
                            >
                                <Text style={{ fontSize: 30 }}>{'0.00kg'}</Text>
                            </ProgressCircle>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>Starting Weight</Text>
                            <Text>120.00kg</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text>Weight change</Text>
                            <Text>-120.00kg</Text>
                        </View>
                        <Text style={styles.headingStyle}>Tracker (Workouts)</Text>
                        <View style={styles.latestCircleContainer}>
                            {
                                workouts ?
                                    <ProgressCircle
                                        percent={30}
                                        radius={80}
                                        borderWidth={8}
                                        color="#96CC39"
                                        shadowColor="#fff"
                                        bgColor="#fff"    >
                                        <ProgressCircle
                                            percent={20}
                                            radius={75}
                                            borderWidth={8}
                                            color="#3399FF"
                                            shadowColor="#fff"
                                            bgColor="#fff">
                                            <Text>{'Completed: 3/20'}</Text>
                                            <Text>{'Missed: 2/20'}</Text>
                                        </ProgressCircle>
                                    </ProgressCircle>
                                    :
                                    <View style={{ marginVertical: 60 }}>
                                        <Text>{'Completed: 0/0'}</Text>
                                        <Text>{'No nurition plans were assinged'}</Text>
                                    </View>
                            }
                        </View>
                        <View style={styles.buttonContainer}>
                            <RNBounceable style={nutrition ? styles.simpleStyle : styles.colorStyle} onPress={() => this.setState({ nutrition: false, workouts: true })}>
                                <Text style={nutrition ? styles.colorText : styles.simpleText}>Workouts</Text>
                            </RNBounceable>
                            <RNBounceable style={workouts ? styles.simpleStyle : styles.colorStyle} onPress={() => this.setState({ workouts: false, nutrition: true })}>
                                <Text style={workouts ? styles.colorText : styles.simpleText}>Nutrition </Text>
                            </RNBounceable>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.headingStyle}>Progress Photos</Text>
                            <View style={styles.rowStyle}>
                                <Text>View all</Text>
                                <Icon.Entypo name="chevron-right" size={20} />
                            </View>
                        </View>

                        <View style={styles.progressPhotoConatiner}>
                            <View style={styles.rowContainer}>
                                <Text style={styles.headingText}>{moment().format('Do MMM YYYY')}</Text>
                                <View style={styles.rowStyle}>
                                    <Icon.Ionicons name="ellipsis-horizontal" size={20} color={'lightgray'} />
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <View style={styles.imageContainer}>
                                    <Image source={LOGO} style={styles.imageStyle} />
                                    <Text>Front</Text>
                                </View>
                                <View style={styles.imageContainer}>
                                    <Image source={LOGO} style={styles.imageStyle} />
                                    <Text>Side</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgramDetail)