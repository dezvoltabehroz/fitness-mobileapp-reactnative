import React, { Component } from 'react'
import {
    View, Text, StatusBar, FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import Image from 'react-native-fast-image';
import { bindActionCreators } from "redux";
import { Button, Container, Icon, Loader, } from "../../components";

import { authActions } from '../../redux/actions/auth';
import { ProgramServices } from '../../services';

import styles from './style';

class ProgressPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            progressPhotos: []
        }
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        const { userData } = this.props.user
        ProgramServices.getAllProgressPhotoById(userData.token, userData.userId)
            .then((res) => {
                this.setState({ progressPhotos: res.data, loading: false, });
            })
            .catch((err) => {
                this.setState({ loading: false });
                console.log(err.response)
            })
    }

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Text style={styles.headingTextStyle}>{item.createdDate}</Text>
                    <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                </View>
                <View style={{ alignItems: "center", marginTop: "5%" }}>
                    <Image source={{ uri: item.frontPhoto }} resizeMode="contain" style={{ width: 100, height: 100, borderRadius: 5 }} />
                    <Text style={styles.headingTextStyle1}>{'Front'}</Text>
                </View>
            </View>
        )
    }

    renderSeperator = ({ item, index }) => {
        return (
            <View style={{ height: 10 }} />
        )
    }

    render() {
        const { data, selectedValue, loading } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        {
                            loading ?
                                <Loader />
                                :
                                this.state.progressPhotos.length == 0 ?
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
                                    :
                                    <FlatList contentContainerStyle={{ marginHorizontal: "5%", paddingTop: '5%', paddingBottom: "5%" }} data={this.state.progressPhotos} renderItem={this.renderItem} ItemSeparatorComponent={this.renderSeperator} />
                        }
                    </View>

                    <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
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