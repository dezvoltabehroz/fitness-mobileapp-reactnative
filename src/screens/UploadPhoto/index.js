import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator, Dimensions, ScrollView
} from 'react-native'
import { Container, Icon, BrownButton } from "../../components";
import styles from './style';
import { Input } from '../../components/Input/Input.component';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import ToggleSwitch from 'toggle-switch-react-native'
import { StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
import THEME from '../../assets/styles/theme.style'
import moment from 'moment';
class ProgressPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: "",
            side: "",
            back: ""
        }

    }

    l



    render() {
        const { data, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={{ flex: 0.7, marginTop: "12.5%", marginHorizontal: "5%" }}>
                        <Input label="Date" editable={false} value={moment().format('Do MMM YYYY')} />
                        {/* <View style={{
                            marginTop: "20%",
                            borderRadius: 35, height: 70, width: 70,
                            justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
                        }}>
                            <Icon.MaterialCommunityIcons name="file" size={30} color={"white"} />
                        </View> */}
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={{ borderRadius: 5, elevation: 1, padding: "12.5%" }}>
                                    <Icon.Feather name="upload" size={20} color={'gray'} />
                                </View>
                                <Text style={styles.textStyle}>Front</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={{ borderRadius: 5, elevation: 1, padding: "12.5%" }}>
                                    <Icon.Feather name="upload" size={20} color={'gray'} />
                                </View>

                                <Text style={styles.textStyle}>Side</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={{ borderRadius: 5, elevation: 1, padding: "12.5%" }}>
                                    <Icon.Feather name="upload" size={20} color={'gray'} />
                                </View>
                                <Text style={styles.textStyle}>Back</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>

                    </View>

                    <View style={{ flex: 0.3, justifyContent: "flex-end", }}>
                        <BrownButton title={"Save"} onPress={() => this.props.navigation.replace('Home')} />
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