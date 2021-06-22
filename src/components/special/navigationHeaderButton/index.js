import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Icon } from '../..';

export const NavigationHeaderLeftButton = (props) => {
    return (
        <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => props?.navigation?.goBack()}>
            <Icon.AntDesign name="left" size={25} color="lightgray" />
        </TouchableOpacity>
    );
};

const handleAlert = () => {
    Alert.alert(
        `Are you sure?`,
        'Please confirm that you want to quit this session - Any data logged during the session will be cleared ',
        [
            {
                text: 'CANCEL'
            },
            {
                text: 'QUIT SESSION',
                onPress: () => { }
            }
        ]
    )
}

export const NavigationHeaderRightButton = (props) => {
    return (
        <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => props.dot ? props.authActions.menuDotModal(!props.user.menuDotModal) : props.navigation.navigate('ChatSettings')}>
            {
                props.dot ?
                    <Icon.MaterialCommunityIcons name="dots-horizontal" size={25} color="lightgray" />
                    :
                    <Icon.AntDesign name="setting" size={25} color="lightgray" />

            }
        </TouchableOpacity>
    );
};

