import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from 'react-native-modal';

import { Button, Icon } from '../..';
import { Input } from '../../Input/Input.component';
import { screen } from "../../../lib/utils/constants";

import styles from "./style";

const ForgotPassword = (props) => {
    return (
        <Modal isVisible={props.isVisible}>
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <View>
                        <Text style={styles.textStyle} >Reset Password</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.onClose()}>
                        <Icon.AntDesign name="close" size={30} color={'lightgray'} />
                    </TouchableOpacity>
                </View>
                <Input
                    label={screen.reset_password_label}
                    value={props.value}
                    onChangeText={(val) => props.onChangeText(val)} />
                <View style={styles.buttonContainer}>
                    <Button.BrownButton title={'Reset Password'} onPress={() => props.onClose()//props.onPress()
                    } />
                </View>
            </View>
        </Modal>
    )
}
export default ForgotPassword;