import React, { Component } from 'react'
import {
    View, Text
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { StatusBar } from 'react-native';
import moment from 'moment';

import { authActions } from '../../redux/actions/auth';
import { Container, Icon, Button } from "../../components";
import { Input } from '../../components/Input/Input.component';

import styles from './style';


class ProgressPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: "",
            side: "",
            back: ""
        }
    }

    render() {
        const { data, selectedValue, dropdown } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Input label="Date" editable={false} value={moment().format('Do MMM YYYY')} />
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={styles.iconContainer}>
                                    <Icon.Feather name="upload" size={20} color={'gray'} />
                                </View>
                                <Text style={styles.textStyle}>Front</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={styles.iconContainer}>
                                    <Icon.Feather name="upload" size={20} color={'gray'} />
                                </View>

                                <Text style={styles.textStyle}>Side</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={styles.iconContainer}>
                                    <Icon.Feather name="upload" size={20} color={'gray'} />
                                </View>
                                <Text style={styles.textStyle}>Back</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={styles.buttonContainer}>
                            <Button.BrownButton title={"Save"} onPress={() => this.props.navigation.replace('Home')} />
                        </View>
                    </View>
                </View>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPhoto);