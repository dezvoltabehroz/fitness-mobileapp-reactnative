import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import { connect } from "react-redux";
import themeStyle from '../../assets/styles/theme.style';
import { getLocalData, LOCAL_STORAGE_KEYS } from '../../lib/utils/localstorage';


class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync =  async() => {
        const userToken = await getLocalData(LOCAL_STORAGE_KEYS.userToken);
        if (userToken) {
            this.props.navigation.replace('Home');
        } else {
            this.props.navigation.replace('Login');
        }
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: themeStyle.PRIMARY_BACKGROUND_COLOR }}>
                <ActivityIndicator size={60} color={themeStyle.PRIMARY_COLOR} />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

AuthLoadingScreen.propTypes = {};

AuthLoadingScreen.defaultProps = {};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
