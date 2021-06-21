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
                <View style={styles.first}><Text>{index + 1}</Text></View>
                <View style={styles.second}><Text></Text></View>
                <RNBounceable onPress={() => this.setState({ showTimePicker: true, index: index })} style={styles.thirdShadow}><Text>{item.time}</Text></RNBounceable>
                <View style={styles.fourth}><Text>{item.reps}</Text></View>
                <RNBounceable onPress={() => this.setState({ showRestTimePicker: true, index: index })} style={styles.fifthShadow}><Text>{item.rest}</Text></RNBounceable>
                <RNBounceable style={styles.sixth}>
                    {
                        item.selected ?
                            <Icon.MaterialIcons name="check-box" size={20} color={"black"} />
                            :
                            <Icon.MaterialIcons name="check-box-outline-blank" size={20} color={"lightgray"} />
                    }
                </RNBounceable>
            </View>
        )
    }

    handleSelectAll = () => {
        let { set } = this.state;
        let array = [...set]
        array.forEach((item, index) => {
            array[index] = { ...array[index], selected: true }
        })
        this.setState({ set: array })
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
                    <View style={styles.second}><Text>Bodyw...</Text></View>
                    <View style={styles.third}><Text>Time</Text></View>
                    <View style={styles.fourth}><Text style={styles.textStyle}>AMRAP</Text></View>
                    <View style={styles.fifth}><Text>Rest</Text></View>
                    <RNBounceable onPress={() => this.handleSelectAll()} style={styles.sixth}>
                        <Icon.Feather name="check" size={25} />
                    </RNBounceable>
                </View>
                <FlatList data={set} renderItem={({ index, item }) => this.renderItems(item, index)} />
            </View>

        )
    }
}
export default Sets;