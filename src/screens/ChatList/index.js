import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Icon, Container } from "../../components";
import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';
import { screen } from '../../lib/utils/constants';

import styles from './style';
import themeStyle from '../../assets/styles/theme.style';

const { width, height } = Dimensions.get('window');

class ChatList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            currentPage: 0,

        }
    }

    componentDidMount = async () => {
        let userToken = await AsyncStorage.getItem('Email')
        if (userToken) {
            let data = JSON.parse(userToken);
            this.setState({ email: data.email, password: data.password })
        }
    }

    setSliderPage = (event: any) => {
        const { currentPage } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor((width)));
        if (indexOfNextScreen !== currentPage) {
            this.setState({
                currentPage: indexOfNextScreen,
            });
        }
    };

    render() {
        const { currentPage, } = this.state;
        return (
            <Container props={this.props} >
                <StatusBar backgroundColor={themeStyle.PRIMARY_BACKGROUND_COLOR} barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.headingTextStyle}>{screen.SCREEN_TITLE_CHAT}</Text>
                    </View>
                    <View style={styles.lowerContentContainer}>
                        <View style={styles.upperContentContainer}>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 0 }); this.scroll.scrollTo({ x: 0 }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, {
                                        color: currentPage == 0 ?
                                            "black" : "#C0C0C0",
                                        textDecorationLine: currentPage == 0 ?
                                            "underline" : "none"
                                    }]}>{"Inbox"}</Text>
                                </View>
                            </RNBounceable>
                            <RNBounceable onPress={() => { this.setState({ currentPage: 1 }); this.scroll.scrollTo({ x: width }); }}>
                                <View >
                                    <Text style={[styles.headingStyle, { color: currentPage == 1 ? "black" : "#C0C0C0", textDecorationLine: currentPage == 1 ? "underline" : "none" }]}>{"Archived"}</Text>
                                </View>
                            </RNBounceable>
                        </View>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onScroll={(event) => this.setSliderPage(event)}
                            ref={(node) => (this.scroll = node)}
                            style={{ flex: 0.8 }} >
                            <View style={styles.firstContainer}>
                                <View style={styles.generalMargin}>
                                    <Input inputStyle={{ height: 40 }} placeholder="Search"
                                        leftIcon={<View style={styles.generalMarginLeft}><Icon.EvilIcons name="search" size={20} /></View>} />
                                </View>
                                <RNBounceable style={styles.contentContainer} onPress={() => this.props.navigation.navigate('ChatScreen')}>
                                    <View style={styles.boxView}>
                                        <Text></Text>
                                    </View>
                                    <View style={{ flex: 0.8, marginHorizontal: "5%" }}>
                                        <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{"Trainer"}</Text>
                                    </View>
                                </RNBounceable>
                            </View>
                            <View style={styles.secondContainer}>
                                <View style={styles.generalMargin}>
                                    <Input inputStyle={{ height: 40 }} placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                                </View>
                                <View style={{ alignItems: "center", flex: 0.7 }}>
                                    <View style={styles.iconContainer}>
                                        <Icon.Ionicons name="chatbox-ellipses" size={30} color={"white"} />
                                    </View>
                                    <View style={styles.generalMargin}>
                                        <Text style={styles.grayTextStyle}>No Archives</Text>
                                    </View>
                                    <View style={styles.generalMargin}>
                                        <Text style={styles.grayText}>No archived messages were found</Text>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);