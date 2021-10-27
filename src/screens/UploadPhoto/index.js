import React, { Component } from 'react'
import {
    View, Text, Image, Platform, Alert
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { StatusBar } from 'react-native';
import moment from 'moment';
import { launchImageLibrary } from 'react-native-image-picker';
import { authActions } from '../../redux/actions/auth';
import { Container, Icon, Button, UploadingModal } from "../../components";
import { Input } from '../../components/Input/Input.component';

import styles from './style';
import { ProgramServices } from '../../services';
import { getLocalData, LOCAL_STORAGE_KEYS } from '../../lib/utils/localstorage';


class ProgressPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: "",
            side: "",
            back: "",
            uploading: false
        }
    }

    chooseFile = async () => {
        const { userData } = this.props.user
        var options = {
            title: "Pick photo from storage",
            noData: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
            } else {
                // let source = response;
                // this.setState({
                //     front: source.assets[0].uri,
                // });
                this.setState({ uploading: true });
                let source = response;
                console.log(response)
                let formData = new FormData();
                formData.append('files', {
                    uri: response.assets[0].uri,
                    name: `${new Date().getTime().toString()}.jpg`,
                    filename: new Date().getTime().toString() + '.jpg',
                    type: 'image/jpg'
                });
                console.log("formData : ", formData)

                ProgramServices.uploadProgressPhoto(formData, userData.token, userData.userId)
                    .then((responseData) => {
                        console.log(responseData.data)
                        this.setState({ front: responseData.data.filepath, frontName: responseData.data.filename, uploading: false, });
                        // ProgramServices.uploadProgressPhotoAssignUser(responseData.data.filename, userData.token, userData.userId)
                        //     .then((res) => {
                        //         this.setState({ front: Platform.OS === 'android' ? response.assets[0].uri : response.uri, uploading: false, });
                        //     })
                        //     .catch((err) => {
                        //         this.setState({ uploading: false });
                        //         console.log(err.response)
                        //     })
                    })
                    .catch((err) => {
                        this.setState({ uploading: false });
                        console.log(err.response)
                    })
            }
        });
    }

    chooseFile1 = () => {
        const { userData } = this.props.user
        var options = {
            title: "Pick photo from storage",
            noData: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
            } else {
                // let source = response;
                // this.setState({
                //     front: source.assets[0].uri,
                // });
                this.setState({ uploading: true });
                let source = response;
                console.log(response)
                let formData = new FormData();
                formData.append('files', {
                    uri: response.assets[0].uri,
                    name: `${new Date().getTime().toString()}.jpg`,
                    filename: new Date().getTime().toString() + '.jpg',
                    type: 'image/jpg'
                });
                console.log("formData : ", formData)

                ProgramServices.uploadProgressPhoto(formData, userData.token, userData.userId)
                    .then((responseData) => {
                        this.setState({ side: responseData.data.filepath, sideName: responseData.data.filename, uploading: false, });

                    })
                    .catch((err) => {
                        this.setState({ uploading: false });
                        console.log(err.response)
                    })
            }
        });
    }

    chooseFile2 = () => {
        const { userData } = this.props.user
        var options = {
            title: "Pick photo from storage",
            noData: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        var options = {
            title: "Pick photo from storage",
            noData: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
            } else {
                // let source = response;
                // this.setState({
                //     front: source.assets[0].uri,
                // });
                this.setState({ uploading: true });
                let source = response;
                console.log(response)
                let formData = new FormData();
                formData.append('files', {
                    uri: response.assets[0].uri,
                    name: `${new Date().getTime().toString()}.jpg`,
                    filename: new Date().getTime().toString() + '.jpg',
                    type: 'image/jpg'
                });
                console.log("formData : ", formData)

                ProgramServices.uploadProgressPhoto(formData, userData.token, userData.userId)
                    .then((responseData) => {
                        this.setState({ back: responseData.data.filepath, backName: responseData.data.filename, uploading: false, });
                    })
                    .catch((err) => {
                        this.setState({ uploading: false });
                        console.log(err.response)
                    })
            }
        });
    }

    handleSaveFunction = () => {
        const { userData } = this.props.user;

        if (this.state.front && this.state.back && this.state.side) {
            this.setState({ btnLoading: true })
            let path = `FrontPhoto='${this.state.frontName}'&BackPhoto='${this.state.backName}'&SidePhoto='${this.state.sideName}'`;
            ProgramServices.uploadProgressPhotoAssignUser(path, userData.token, userData.userId)
                .then((res) => {
                    console.log(res)
                    this.setState({ btnLoading: false })
                    this.props.navigation.replace('Home')
                })
                .catch((err) => console.log(err.response))
        } else {
            Alert.alert('Please select all photos')
        }

    }


    render() {
        const { data, selectedValue, dropdown, front, side, back } = this.state;
        return (
            <Container props={this.props}>
                <StatusBar backgroundColor="white" barStyle={"dark-content"} />
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Input label="Date" editable={false} value={moment().format('Do MMM YYYY')} />
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={styles.iconContainer}>
                                    {
                                        front ?
                                            <Image source={{ uri: front }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                                            :
                                            <Icon.Feather onPress={() => this.chooseFile()} name="upload" size={20} color={'gray'} />
                                    }

                                </View>
                                <Text style={styles.textStyle}>Front</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={styles.iconContainer}>
                                    {
                                        side ?
                                            <Image source={{ uri: side }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                                            : <Icon.Feather onPress={() => this.chooseFile1()} name="upload" size={20} color={'gray'} />}
                                </View>

                                <Text style={styles.textStyle}>Side</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.row}>
                                <View style={styles.iconContainer}>
                                    {
                                        back ?
                                            <Image source={{ uri: back }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                                            : <Icon.Feather onPress={() => this.chooseFile2()} name="upload" size={20} color={'gray'} />
                                    }
                                </View>
                                <Text style={styles.textStyle}>Back</Text>
                            </View>
                            <Icon.Entypo name="dots-three-horizontal" size={15} color={'gray'} />
                        </View>
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={styles.buttonContainer}>
                            <Button.BrownButton title={"Save"} onPress={() => this.handleSaveFunction()} />
                        </View>
                    </View>
                </View>
                <UploadingModal visible={this.state.uploading} />
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