import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StatusBar, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import RNBounceable from '@freakycoder/react-native-bounceable';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

import { Container, FilterModal, Icon } from '../../components';
import { Input } from '../../components/Input/Input.component';
import { authActions } from '../../redux/actions/auth';

import styles from './style';
import themeStyle from '../../assets/styles/theme.style';

class Files extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 100,
            filterModal: false
        }
    }

    render() {
        const { progress, reportModal, issue, filterModal } = this.state;
        const barWidth = Dimensions.get('screen').width * 0.9;
        const progressCustomStyles = {
            backgroundColor: '#E8E8E8',
            borderRadius: 0,
            borderColor: '#E8E8E8',
            height: 30
        };
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor={themeStyle.PRIMARY_BACKGROUND_COLOR} barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingStyle}>{"Files"}</Text>
                    </View>
                    <View style={styles.lowerContentContainer}>
                        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                            <View style={styles.marginHorizontal}>
                                <Input inputStyle={{ height: 40 }}
                                    placeholder="Search"
                                    leftIcon={<View style={styles.marginLeft}><Icon.EvilIcons name="search" size={20} /></View>} />
                            </View>
                            <View style={styles.rowContainer} >
                                <Text style={styles.texStyle}>Usage</Text>
                                <Text style={styles.texStyle}>227.34 KB / 10GB</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <ProgressBarAnimated
                                    {...progressCustomStyles}
                                    width={barWidth}
                                    value={progress}
                                    backgroundColorOnComplete="#6CC644"
                                />
                            </View>
                            <View style={styles.rowContainer} >
                                <Text style={styles.texStyle}>A to Z</Text>
                                <RNBounceable onPress={() => { this.setState({ filterModal: true }) }} style={styles.row}>
                                    <Icon.Feather name="filter" size={20} />
                                </RNBounceable>
                            </View>
                            <View style={styles.lowerContainer}>
                                <View style={styles.iconContainer}>
                                    <Icon.MaterialCommunityIcons name="file" size={30} color={"white"} />
                                </View>
                                <View style={styles.marginTop}>
                                    <Text style={styles.textStyle}>Nothing to see here?</Text>
                                </View>
                                <View style={styles.marginTop}>
                                    <Text style={styles.textStyle1}>No files assigned yet</Text>
                                </View>
                            </View>

                        </ScrollView>

                    </View>

                </View>
                <FilterModal isVisible={filterModal} file={true} hide={() => this.setState({ filterModal: false })} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Files)
