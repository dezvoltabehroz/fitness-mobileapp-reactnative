import React, { Component } from 'react'
import {
    View, Text, StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Button, Container, Icon, } from "../../components";

import { authActions } from '../../redux/actions/auth';

import styles from './style';

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
                        <View style={styles.boxView}>
                            <Icon.MaterialCommunityIcons name="file" size={30} color={"white"} />
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.textStyle}>Nothing to see here?</Text>
                        </View>
                        <View style={styles.generalMargin}>
                            <Text style={styles.textStyle1}>No progress photos</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.3, justifyContent: "flex-end", }}>
                        <Button.SlimButton title={"Upload"} onPress={() => this.props.navigation.navigate('UploadPhoto')} />
                    </View>
                </View>
            </Container >
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