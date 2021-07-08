import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from 'react-native-modal';

import { Button, Icon } from '../..';
import { Input } from '../../Input/Input.component';
import { screen } from "../../../lib/utils/constants";

import styles from "./style";
import { isEmailValid } from "../../../lib/utils/global";
import commonStyle from "../../../assets/styles/common.style";

const ForgotPassword = (props) => {
    console.log(props.submit)
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
                <View style={{ marginTop: '5%', marginBottom: "5%" }}>

                    {props.submit && !props.value ? <Text style={commonStyle.errorText}>Please fill this field</Text>
                        :
                        props.submit && props.value && !isEmailValid(props.value) ? <Text style={commonStyle.errorText}>Email is invalid</Text>
                            : null
                    }
                </View>

                <View style={styles.buttonContainer}>
                    <Button.BrownButton loading={props.loading} title={'Reset Password'} onPress={() => props.onPress()} />
                </View>
            </View>
        </Modal>
    )
}
export default ForgotPassword;