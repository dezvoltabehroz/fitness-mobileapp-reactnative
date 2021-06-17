import React from 'react';
import { Button as BT } from 'react-native-elements';
import styles from './style';
const _GeneralButton = (props) => {

    const {
        disabled = false,
        loading = false,
        disabledStyle = { backgroundColor: "#A8A8A8" },
        buttonStyle = {},
        disabledTitleStyle = { color: 'white' },
        titleStyle = {},
        loadingStyle = {},
        icon = {},
        iconRight = false,
        onPress = () => { },
        type = "solid",
        title = "",
        raised = false,
        containerStyle = {},
    } = props;
    return (
        <BT
            buttonStyle={{ ...buttonStyle && styles.btnPrimary }}
            containerStyle={containerStyle}
            disabled={disabled}
            disabledStyle={disabledStyle}
            disabledTitleStyle={disabledTitleStyle}
            loading={loading}
            onPress={onPress}
            loadingStyle={loadingStyle}
            raised={raised}
            title={title}
            type={type}
            icon={icon}
            iconRight={iconRight}
            titleStyle={{ ...titleStyle && styles.btnPrimaryText }}
        />
    )
};

const _LoginButton = (props) => {

    const {
        disabled = false,
        loading = false,
        disabledStyle = { backgroundColor: "#A8A8A8" },
        buttonStyle = {},
        disabledTitleStyle = { color: 'white' },
        titleStyle = {},
        loadingStyle = {},
        icon = {},
        iconRight = false,
        onPress = () => { },
        type = "solid",
        title = "",
        raised = false,
        containerStyle = {},
    } = props;
    return (
        <BT
            buttonStyle={{ ...buttonStyle && styles.btnLoginPrimary }}
            containerStyle={containerStyle&&styles.btnLoginPrimary}
            disabled={disabled}
            disabledStyle={disabledStyle}
            disabledTitleStyle={disabledTitleStyle}
            loading={loading}
            onPress={onPress}
            loadingStyle={loadingStyle}
            raised={raised}
            title={title}
            type={type}
            icon={icon}
            iconRight={iconRight}
            titleStyle={{ ...titleStyle && styles.btnLoginText }}
        />
    )
};

const _OutlineButton = (props) => {

    const {
        disabled = false,
        loading = false,
        disabledStyle = { backgroundColor: "#A8A8A8" },
        buttonStyle = {},
        disabledTitleStyle = { color: 'white' },
        titleStyle = {},
        loadingStyle = {},
        icon = {},
        iconRight = false,
        onPress = () => { },
        type = "solid",
        title = "",
        raised = false,
        containerStyle = {},
    } = props;
    return (
        <BT
            buttonStyle={{ ...buttonStyle && styles.btnPrimary }}
            containerStyle={containerStyle}
            disabled={disabled}
            disabledStyle={disabledStyle}
            disabledTitleStyle={disabledTitleStyle}
            loading={loading}
            onPress={onPress}
            loadingStyle={loadingStyle}
            raised={raised}
            title={title}
            type={type}
            icon={icon}
            iconRight={iconRight}
            titleStyle={{ ...titleStyle && styles.btnPrimaryText }}
        />
    )
};
const _SlimButton = (props) => {

    const {
        disabled = false,
        loading = false,
        disabledStyle = { backgroundColor: "#A8A8A8" },
        buttonStyle = {},
        disabledTitleStyle = { color: 'white' },
        titleStyle = {},
        loadingStyle = {},
        icon = {},
        iconRight = false,
        onPress = () => { },
        type = "solid",
        title = "",
        raised = false,
        containerStyle = {},
    } = props;
    return (
        <BT
            buttonStyle={{ ...buttonStyle && styles.btnPrimary }}
            containerStyle={containerStyle}
            disabled={disabled}
            disabledStyle={disabledStyle}
            disabledTitleStyle={disabledTitleStyle}
            loading={loading}
            onPress={onPress}
            loadingStyle={loadingStyle}
            raised={raised}
            title={title}
            type={type}
            icon={icon}
            iconRight={iconRight}
            titleStyle={{ ...titleStyle && styles.btnPrimaryText }}
        />
    )
};
const _BrownButton = (props) => {

    const {
        disabled = false,
        loading = false,
        disabledStyle = { backgroundColor: "#A8A8A8" },
        buttonStyle = {},
        disabledTitleStyle = { color: 'white' },
        titleStyle = {},
        loadingStyle = {},
        icon = {},
        iconRight = false,
        onPress = () => { },
        type = "solid",
        title = "",
        raised = false,
        containerStyle = {},
    } = props;
    return (
        <BT
            buttonStyle={{ ...buttonStyle && styles.btnBrownPrimary }}
            containerStyle={containerStyle}
            disabled={disabled}
            disabledStyle={disabledStyle}
            disabledTitleStyle={disabledTitleStyle}
            loading={loading}
            onPress={onPress}
            loadingStyle={loadingStyle}
            raised={raised}
            title={title}
            type={type}
            icon={icon}
            iconRight={iconRight}
            titleStyle={{ ...titleStyle && styles.btnBrownText }}
        />
    )
};

export default {
    GeneralButton: _GeneralButton,
    LoginButton: _LoginButton,
    OutlineButton: _OutlineButton,
    SlimButton: _SlimButton,
    BrownButton: _BrownButton
};
