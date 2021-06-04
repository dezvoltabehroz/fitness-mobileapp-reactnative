import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, Dimensions, ScrollView
} from 'react-native'
import { Container, Icon, SlimButton } from "../../components";
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import ToggleSwitch from 'toggle-switch-react-native'
import { StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
import THEME from '../../assets/styles/theme.style'
class ProgressPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }




    render() {
        const { data, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={{ alignItems: "center", flex: 0.7 }}>
                        <View style={{
                            marginTop: "25%",
                            borderRadius: 35, height: 70, width: 70,
                            justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
                        }}>
                            <Icon.MaterialCommunityIcons name="file" size={30} color={"white"} />
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <Text style={styles.textStyle}>Nothing to see here?</Text>
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <Text style={styles.textStyle1}>No progress photos</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.3, justifyContent: "flex-end", }}>
                        <SlimButton title={"Upload"} onPress={() => this.props.navigation.navigate('UploadPhoto')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPhoto);