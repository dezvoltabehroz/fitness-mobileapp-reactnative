import React, { Component } from 'react'
import {
    View, Text, StatusBar
} from 'react-native'
import RNBounceable from '@freakycoder/react-native-bounceable';
import { bindActionCreators } from "redux";
import ToggleSwitch from 'toggle-switch-react-native'
import { connect } from 'react-redux';
import { Container, Icon } from "../../components";
import { authActions } from '../../redux/actions/auth';
import THEME from '../../assets/styles/theme.style'
import styles from './style';

class StartWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: false
        }

    }




    render() {
        const { data, val, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>

                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>Mute Chat</Text>
                        <ToggleSwitch
                            isOn={val}
                            onColor={THEME.PRIMARY_BACKGROUND_COLOR}
                            offColor={THEME.COLOR_LIGHT_GRAY}
                            label=""
                            labelStyle={styles.labelStyle}
                            size="medium"
                            onToggle={isOn => this.setState({ val: isOn })}
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text>You can mute this conversation if you no longer wish to recieve notifications when there are new messages.</Text>
                        <RNBounceable
                            onPress={() => this.props.navigation.navigate('Media')}
                            style={styles.itemContainer}>
                            <View style={styles.row}>
                                <Icon.MaterialIcons name="photo-library" size={25} color={"gray"} />
                                <Text style={styles.titleStyle}>Media</Text>
                            </View>
                            <Icon.AntDesign name="right" size={25} color={"gray"} />
                        </RNBounceable>
                    </View>
                </View>
            </Container >
        )
    }
}
const mapStateToProps = (state) => {

    return {
        user: state.authReducer || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartWorkout);