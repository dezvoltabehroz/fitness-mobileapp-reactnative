import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import themeStyle from '../../assets/styles/theme.style';
import { dataParsing } from '../../lib/utils/global';
import { getLocalData, LOCAL_STORAGE_KEYS } from '../../lib/utils/localstorage';
import { authActions } from '../../redux/actions/auth';
import { AuthServices } from '../../services';


class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await getLocalData(LOCAL_STORAGE_KEYS.userToken);
        if (userToken) {
            let data = dataParsing(userToken);
            console.log(data);
            AuthServices.refreshToken(data.userId)
                .then((res) => {
                    console.log(res.data)
                    let userData = {
                        ...data,
                        token: res.data.token
                    }
                    this.props.authAction.setUserData(userData);
                    this.props.navigation.replace('Home');
                })
                .catch((err) => { console.log(err.response) })

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
        authAction: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
