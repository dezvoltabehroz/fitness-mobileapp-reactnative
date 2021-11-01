import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"; import RNBounceable from '@freakycoder/react-native-bounceable';
import { Container, FilterModal, Icon, Loader } from '../../components';

import { authActions } from '../../redux/actions/auth';
import { Input } from '../../components/Input/Input.component';

import styles from './style';
import { route } from '../../lib/utils/constants';
import { ProgramServices } from '../../services';
import { SearchBar } from 'react-native-elements';

class ProgramLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterModal: false,
            loading: false,
            value:"",
            program: [
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
                {
                    user_name: 'T',
                    type: 'Ended program Female Fat Loss Female Fat Loss',
                    activity: 'Female Fat Loss',
                    time: new Date(),
                },
            ]
        }
        this.arrayHolder = [];
    }
    componentDidMount = () => {
        this.setState({ loading: true })
        const { userData } = this.props.user;

        ProgramServices.getAllPrograms(userData.token, userData.userId)
            .then((res) => {
                if (res.data.responseMessage) {
                    this.setState({ program: [], loading: false })
                } else {
                    this.arrayHolder = res.data
                    this.setState({ program: res.data, loading: false })
                }
            })
            .catch((err) => { this.setState({ program: [], loading: false }); console.log(err) })
    }

    handleStartProgram = (item) => {
        const { token, userId } = this.props.user.userData;
        ProgramServices.startProgram(item.programId, item.usersProgramId, token, userId)
            .then((res) => { this.props.navigation.navigate(route.PROGRAM_DETAIL, { heading: item.programName, data: item }) })
            .catch((err) => console.log(err.response.data))
    }


    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable style={styles.itemContainer} onPress={() => { if (item.isStarted) { this.props.navigation.navigate(route.PROGRAM_DETAIL, { heading: item.programName, data: item }) } else { this.handleStartProgram(item) } }}>
                <View style={styles.boxView}>
                    <Text></Text>
                </View>
                <View style={{ flex: 0.8, marginHorizontal: "5%" }}>
                    <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.programName}</Text>
                </View>
            </RNBounceable>
        )
    }

    renderSeparator = () => {
        return (<View style={styles.gapHeight}></View>)
    }

    searchFilterFunction = (text) => {
        this.setState({ value: text });
        const newData = this.arrayHolder.filter(item => {
            const textData = text.toUpperCase();
            const itemData = `${item?.programName.toUpperCase()} ${item?.programName.toUpperCase()}`;
            return itemData.indexOf(textData) > -1;
        });
        if (newData.length != 0) {
            this.setState({ program: newData, IsTemplatesFound: false });
        }
        else {
            this.setState({ IsTemplatesFound: true });
        }
    }



    render() {
        const { program, reportModal, issue, filterModal, loading,value } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <View style={{ marginTop: "10%" }}>
                        <SearchBar
                            containerStyle={{ backgroundColor: "transparent", borderTopWidth: 0, borderBottomWidth: 0, }}
                            inputContainerStyle={{ backgroundColor: "white", elevation: 2, borderWidth: 0.5, borderColor: "lightgray" }}
                            onChangeText={(text) => this.searchFilterFunction(text)}
                            value={value}
                            placeholder="Search"
                            leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                        <ScrollView style={{ paddingBottom: 100 }}>
                            <View style={styles.rowContainer} >
                                <Text style={styles.textStyle}>A to Z</Text>
                                <RNBounceable onPress={() => this.setState({ filterModal: true })} style={styles.row}>
                                    <Icon.FontAwesome name="filter" size={20} />
                                </RNBounceable>
                            </View>
                            {
                                loading ?
                                    <Loader />
                                    :
                                    program.length == 0 ?
                                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={styles.viewStyle} >No record exists!</Text>
                                        </View>
                                        :
                                        <FlatList
                                            data={program}
                                            keyExtractor={item => item}
                                            style={{ marginBottom: 100, paddingBottom: 20 }}
                                            ItemSeparatorComponent={this.renderSeparator}
                                            showsVerticalScrollIndicator={false}
                                            renderItem={({ index, item }) => this._renderItems({ index, item })}
                                        />
                            }
                        </ScrollView>
                    </View>
                </View>
                <FilterModal isVisible={filterModal} hide={() => this.setState({ filterModal: false })} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgramLibrary)
