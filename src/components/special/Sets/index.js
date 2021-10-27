import RNBounceable from '@freakycoder/react-native-bounceable';
import moment from 'moment';
import React, { Component } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from '../..';

import styles from './style';

class Sets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            set: props.item,
            showRestTimePicker: false,
            showTimePicker: false,
            time: new Date()
        }
    }

    renderItems = (item, index) => {
        return (
            <View style={styles.rowTitleContainer}>
                <View style={styles.first}><Text style={styles.textStyle}>{index + 1}</Text></View>
                <View style={styles.second}><Text style={styles.headingText}>{item.weight}</Text></View>
                <RNBounceable onPress={() => this.setState({ showTimePicker: true, index: index })} style={styles.thirdShadow}><Text style={styles.textStyle}>{"00:30"}</Text></RNBounceable>
                <View style={styles.fourthShadow}><Text style={styles.textStyle}>{item.reps}</Text></View>
                <RNBounceable onPress={() => this.setState({ showRestTimePicker: true, index: index })} style={styles.fifthShadow}><Text style={styles.textStyle}>{item?.restPeriod}</Text></RNBounceable>
                {this.props.disabled ?
                    null
                    :
                    <RNBounceable onPress={() => {
                        this.handleOnCompleteSet(index)
                    }} style={styles.sixth}>
                        {
                            item.isCompleted ?
                                <Icon.MaterialIcons name="check-box" size={20} color={"black"} />
                                :
                                <Icon.MaterialIcons name="check-box-outline-blank" size={20} color={"lightgray"} />
                        }
                    </RNBounceable>}
            </View>
        )
    }

    handleOnCompleteSet = (index) => {
        let { set } = this.state;
        let array = [...set]
        array[index] = { ...array[index], isCompleted: true }
        this.setState({ set: array }, () => this.props.onSetCompleted(array[index].usersProgramWorkoutExerciseSetId ? array[index].usersProgramWorkoutExerciseSetId : array[index].usersWorkoutExerciseSetId))
    }

    handleSelectAll = () => {
        let { set } = this.state;
        let array = [...set]
        array.forEach((item, index) => {
            array[index] = { ...array[index], isCompleted: true }
        })
        this.setState({ set: array }, () => this.props.allSetsCompleted())
    }

    onChange = (selectedDate) => {
        if (this.state.showTimePicker) {
            let array = { ...array[this.state.index], time: moment(selectedDate).format('mm:ss') }
            this.setState({ set: array, time: new Date(), showTimePicker: false, showRestTimePicker: false });
        }
        else {
            let array = { ...array[this.state.index], rest: moment(selectedDate).format('mm:ss') }
            this.setState({ set: array, time: new Date(), showRestTimePicker: false, showTimePicker: false });
        }
    }

    render() {
        const { set, time, showRestTimePicker, showTimePicker } = this.state;
        return (
            <View>
                <View style={styles.rowTitleContainer}>
                    <View style={styles.first}><Text>#</Text></View>
                    <View style={styles.second}><Text style={styles.headingText}>Bodyweight</Text></View>
                    <View style={styles.third}><Text style={styles.headingText}>Time</Text></View>
                    <View style={styles.fourth}><Text style={styles.headingText}>Tempo</Text></View>
                    <View style={styles.fifth}><Text style={styles.headingText}>Rest</Text></View>
                    {this.props.disabled ?
                        null
                        : this.props.workout ?
                            <View style={styles.sixth}>
                            </View>
                            :
                            <RNBounceable onPress={() => this.handleSelectAll()} style={styles.sixth}>
                                <Icon.Feather name="check" size={25} />
                            </RNBounceable>
                    }
                </View>
                <FlatList data={set} renderItem={({ index, item }) => this.renderItems(item, index)} />
            </View>

        )
    }
}
export default Sets;