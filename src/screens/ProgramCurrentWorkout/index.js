import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity, Alert, StatusBar, FlatList, Image, ScrollView, RefreshControl, Dimensions
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Container, Icon, Button, Input, Sets, MenuModal, UnfinishedModal, ExerciseModal, Loader, UploadingModal, MessageTextInput } from "../../components";
import { renderSeperator } from '../../lib/utils/global'

import THEME from '../../assets/styles/theme.style'
import styles from './style';
import { LOGO, route } from '../../lib/utils/constants';
import { ProgramServices, WorkoutsServices } from '../../services';
const screenWidth = Dimensions.get('window').width;
class ProgramCurrentWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            side: "",
            back: "",
            loading: true,
            selectedSec: [{}],
            selectedMin: [{}],
            searchModal: false,
            distance: [{
                id: 1,
                label: "Km",
                value: "Km"
            },
            {
                id: 2,
                label: "Miles",
                value: "Miles"
            }],
            second: [{
                id: 1,
                label: "00 sec",
                value: "00 sec"
            },
            {
                id: 2,
                label: "05 sec",
                value: "05 sec"
            },
            {
                id: 3,
                label: "10 sec",
                value: "10 sec"
            },
            {
                id: 4,
                label: "15 sec",
                value: "15 sec"
            },
            {
                id: 5,
                label: "20 sec",
                value: "20 sec"
            },
            {
                id: 6,
                label: "25 sec",
                value: "25 sec"
            },
            {
                id: 7,
                label: "30 sec",
                value: "30 sec"
            },
            {
                id: 8,
                label: "35 sec",
                value: "35 sec"
            },
            {
                id: 9,
                label: "40 sec",
                value: "40 sec"
            },
            {
                id: 10,
                label: "45 sec",
                value: "45 sec"
            },
            {
                id: 11,
                label: "50 sec",
                value: "50 sec"
            },
            {
                id: 12,
                label: "55 sec",
                value: "55 sec"
            }],
            minutes: [{
                id: 1,
                label: "00 min",
                value: "00 min"
            },
            {
                id: 2,
                label: "01 min",
                value: "01 min"
            },
            {
                id: 3,
                label: "02 min",
                value: "02 min"
            },
            {
                id: 4,
                label: "03 min",
                value: "03 min"
            },
            {
                id: 5,
                label: "04 min",
                value: "04 min"
            },
            {
                id: 6,
                label: "05 min",
                value: "05 min"
            },
            {
                id: 7,
                label: "10 min",
                value: "10 min"
            },
            {
                id: 8,
                label: "15 min",
                value: "15 min"
            },
            {
                id: 9,
                label: "20 min",
                value: "20 min"
            },
            {
                id: 10,
                label: "25 min",
                value: "25 min"
            },
            {
                id: 11,
                label: "30 min",
                value: "30 min"
            },
            {
                id: 12,
                label: "35 min",
                value: "35 min"
            }
                ,
            {
                id: 13,
                label: "40 min",
                value: "40 min"
            },
            {
                id: 14,
                label: "45 min",
                value: "45 min"
            },
            {
                id: 15,
                label: "50 min",
                value: "50 min"
            },
            {
                id: 16,
                label: "55 min",
                value: "55 min"
            }],
            noteModal: false,
            note: "",
            item: {},
            recentWorkouts: [],
            exerciseModal: false,
            image: LOGO,
            pauseTimer: false,
            startTimer: false,
            resetTimer: false,
            title: '',
            uploading: false,
            myTime: "",
            progress: 0,
            totalProgress: 0,
        }
    }

    componentDidMount = () => {
        this.setState({ loading: true, })
        const { programWeekDayId, workoutId } = this.props.route.params;
        const { token, userId } = this.props.user.userData;
        ProgramServices.getDailyWorkOutExerciseByProgramWeekDay(programWeekDayId, workoutId, token, userId)
            .then((res) => {
                this.setState({ workout: res.data })
                WorkoutsServices.getRecentWorkouts(token, userId)
                    .then((response) => {
                        let recentArray = [...response.data]
                        recentArray.map((item, index) => { recentArray[index] = { ...recentArray[index], selected: false, } })
                        this.setState({ recentWorkouts: recentArray, loading: false, searchModal: false, uploading: false })
                    })
                    .catch((err) => console.log(err.response))
            })
            .catch((err) => console.log(err.response))
    }

    handleAlert = () => {
        this.props.authActions.menuDotModal(!this.props.user.menuDotModal);
        this.setState({ unfinishModal: true })
    }

    handleAddSet = (item) => {
        this.setState({ loading: true })
        const { token, userId } = this.props.user.userData;
        ProgramServices.addSet(item.usersProgramWorkoutExerciseId, item.usersProgramWeekId, item.usersProgramWeekDayId, token, userId)
            .then((res) => {
                if (res.data.responseCode == "000") {
                    this.componentDidMount();
                }
            })
            .catch((err) => console.log(err.response))
    }

    handleSetComplete = (setId) => {
        const { token, userId } = this.props.user.userData;
        ProgramServices.setCompleted(setId, token, userId)
            .then((res) => { })
            .catch((err) => console.log(err.response))
    }

    handleSetUnComplete = (setId) => {
        const { token, userId } = this.props.user.userData;
        ProgramServices.setUnCompleted(setId, token, userId)
            .then((res) => { })
            .catch((err) => console.log(err.response))
    }

    handleAllSetsComplete = (setId) => {
        const { token, userId } = this.props.user.userData;
        ProgramServices.allSetCompleted(setId, token, userId)
            .then((res) => { })
            .catch((err) => console.log(err.response))
    }

    handleCompletetheWhole = () => {
        const { programWeekDayId } = this.props.route.params;
        const { token, userId } = this.props.user.userData;
        ProgramServices.completeTheWholeDayWorkout(programWeekDayId, token, userId)
            .then((res) => { this.props.navigation.replace('Home') })
            .catch((err) => { Alert.alert(err.response.data.responseMessage); console.log(err.response.data) })
    }

    _renderItem = (item, index) => {
        return (
            item?.groups ?
                <View style={{ ...styles.flatListContainer, borderLeftWidth: 2 }}>
                    <View style={styles.flatListRowContainer}>
                        <Text style={{ ...styles.flatListTitleStyle, width: screenWidth * 0.5 }}>{'Gaint Set'}</Text>
                        <RNBounceable onPress={() => { }}>
                            <Icon.Foundation name="info" size={20} color={THEME.COLOR_LIGHT_GRAY} />
                        </RNBounceable>
                    </View>
                    {item.groups.map((element, i) => {
                        return (
                            <>
                                <View style={styles.flatListRowContainer}>
                                    <RNBounceable onPress={() => { this.props.navigation.navigate(route.EXERCISE, { heading: element.exerciseName }) }} style={styles.flatListRow1}>
                                        <Image source={item.imagePath ? { uri: element.imagePath } : require('../../assets/images/logo.png')} style={styles.imageStyle} resizeMode="contain" />
                                        <View style={styles.gapWidth}></View>
                                        <Text style={{ ...styles.flatListTitleStyle, width: screenWidth * 0.5 }}>{element.exerciseName}</Text>
                                    </RNBounceable>
                                    <RNBounceable onPress={() => this.setState({ groupSet: true, element: { ...this.state.element, ...element }, elementIndex: i, image: element.imagePath, title: element.exerciseName, exerciseModal: true, }, () => console.log(element))}>
                                        <Icon.Ionicons name="ellipsis-horizontal" size={30} color={THEME.COLOR_LIGHT_GRAY} />
                                    </RNBounceable>
                                </View>
                                {
                                    element.note ?
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Icon.Octicons name="primitive-dot" size={30} color={THEME.COLOR_GREY} />
                                            <Text style={{ color: 'blue' }}> {element.note}</Text>
                                        </View>
                                        :
                                        null
                                }

                                <View>
                                    <Sets item={element.sets} onSetCompleted={(setId) => { this.handleSetComplete(setId) }} onSetUnCompleted={(setId) => { this.handleSetUnComplete(setId) }} allSetsCompleted={() => { this.handleAllSetsComplete(element.usersProgramWorkoutExerciseId ? element.usersProgramWorkoutExerciseId : element.usersWorkoutExerciseId) }} />
                                </View>
                                <View style={styles.buttonStyle}>
                                    <Button.OutlineButton title="Add Set" onPress={() => { this.handleAddSet(element) }} />
                                </View>
                            </>
                        )
                    })
                    }
                </View>

                :
                <View style={styles.flatListContainer}>
                    <View style={styles.flatListRowContainer}>
                        <RNBounceable onPress={() => { this.props.navigation.navigate(route.EXERCISE, { heading: item.exerciseName }) }} style={styles.flatListRow1}>
                            <Image source={item.imagePath ? { uri: item.imagePath } : require('../../assets/images/logo.png')} style={styles.imageStyle} resizeMode="contain" />
                            <View style={styles.gapWidth}></View>
                            <Text style={{ ...styles.flatListTitleStyle, width: screenWidth * 0.5 }}>{item.exerciseName}</Text>
                        </RNBounceable>
                        <RNBounceable onPress={() => this.setState({ item: item, index: index, image: item.imagePath, title: item.exerciseName, exerciseModal: true, })}>
                            <Icon.Ionicons name="ellipsis-horizontal" size={30} color={THEME.COLOR_LIGHT_GRAY} />
                        </RNBounceable>
                    </View>
                    {
                        item.note ?
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon.Octicons name="primitive-dot" size={30} color={THEME.COLOR_GREY} />
                                <Text style={{ color: 'blue' }}> {item.note}</Text>
                            </View>
                            :
                            null
                    }

                    <View>
                        <Sets item={item.sets} onSetCompleted={(setId) => { this.handleSetComplete(setId) }} onSetUnCompleted={(setId) => { this.handleSetUnComplete(setId) }} allSetsCompleted={() => { this.handleAllSetsComplete(item.usersProgramWorkoutExerciseId ? item.usersProgramWorkoutExerciseId : item.usersWorkoutExerciseId) }} />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button.OutlineButton title="Add Set" onPress={() => { this.handleAddSet(item) }} />
                    </View>
                </View>
        )
    }

    _renderItem4 = (item, index) => {
        return (

            <View style={{ ...styles.flatListRow, justifyContent: "space-between", marginHorizontal: "5%" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={item.imagePath ? { uri: item.imagePath } : LOGO} style={styles.imageStyle} resizeMode="cover" />
                    <View style={styles.gapWidth}></View>
                    <Text style={{ textTransform: "capitalize" }}>{item.exerciseName}</Text>
                </View>
                <RNBounceable onPress={() => this.handleOnPressRecentExercise(item, index)}>
                    <Icon.MaterialIcons name={item.selected ? "check-box" : "check-box-outline-blank"} size={20} color={THEME.COLOR_BLACK} />
                </RNBounceable>
            </View>
        )
    }


    handleOnPressRecentExercise = (item, index) => {
        let array = [...this.state.recentWorkouts];
        array.map((item, i) => {
            array[i] = { ...array[i], selected: false }
        })
        array[index] = { ...array[index], selected: true };

        this.setState({ item: item, recentWorkouts: array, exerciseId: item.workoutExerciseId, workoutId: item.workoutId })
    }

    handleAddExercise = () => {
        console.log(this.state.item)
        const { token, userId } = this.props.user.userData;
        const { exerciseId, workoutId, item } = this.state;
        this.setState({ uploading: true })
        ProgramServices.addExercise(exerciseId, item.workoutId, token, userId)
            .then((res) => { this.componentDidMount() })
            .catch((err) => { console.log(err.response); if (err.response.status == 403) { this.componentDidMount(); alert(err.response.data.responseMessage); this.componentDidMount() } })
    }


    handleAddNote = () => {
        console.log(this.state.item)
        ProgramServices.addNotesToExercise(this.state.item?.usersProgramWorkoutExerciseId, this.state.note, this.props.user.userData.token, this.props.user.userData.userId,)
            .then((res) => {
                console.log(res.data);
                let array = [...this.state.workout];
                array[this.state.index] = { ...array[this.state.index], note: this.state.note }
                this.setState({ workout: array, noteModal: !this.state.noteModal, note: "", })
            })
            .catch(error => { this.setState({ noteModal: !this.state.noteModal, note: "", }); console.log(error.response.data) })

    }

    handleRemoveExercise = () => {
        ProgramServices.removeExerciseFromWorkout(this.state.item?.usersProgramWorkoutExerciseId, this.props.user.userData.token, this.props.user.userData.userId,)
            .then((res) => {
                console.log(res.data);
                this.setState({ exerciseModal: !this.state.exerciseModal, })
            })
            .catch(error => { this.setState({ exerciseModal: !this.state.exerciseModal, note: "", }); console.log(error) })
    }

    breakGaintSet = () => {

    }


    render() {
        const { currentPage, searchModal, distance, workout, exerciseModal, image, title, loading, recentWorkouts
            , uploading } = this.state;
        return (
            <>
                <UploadingModal visible={uploading} />
                <Container
                    props={this.props}
                    component={this.state}
                    selectedMinF={(value) => this.setState({ selectedMin: value })}
                    selectedSecF={(value) => this.setState({ selectedSec: value })}>
                    <StatusBar backgroundColor={this.props.user.menuModal ? THEME.PRIMARY_BACKGROUND_COLOR : "#181818"} barStyle={"light-content"} />
                    <View style={styles.container}>
                        <ScrollView contentContainerStyle={{ paddingBottom: "10%" }} refreshControl={
                            <RefreshControl refreshing={loading} onRefresh={() => { this.setState({ loading: true }, () => this.componentDidMount()) }} />
                        }>
                            {
                                loading ?
                                    <Loader />
                                    :
                                    <>
                                        <FlatList
                                            data={workout}
                                            ItemSeparatorComponent={(renderSeperator)}
                                            contentContainerStyle={{ paddingVertical: "5%" }}
                                            renderItem={({ index, item }) => this._renderItem(item, index)} />
                                        <View style={styles.contentContainer}>
                                            <TouchableOpacity
                                                onPress={() => this.setState({ searchModal: true })}
                                                style={styles.addExerciseContainer}>
                                                <Text style={styles.textStyle}>Add Exercise</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => this.handleCompletetheWhole()}
                                                style={styles.addExerciseContainer1}>
                                                <Text style={styles.textStyle3}>Finished</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </>}
                        </ScrollView>
                    </View>

                </Container>
                <Modal style={styles.modalContainer} isVisible={searchModal} onBackdropPress={() => this.setState({ searchModal: false })} >
                    <View style={{ bottom: "5%" }}>
                        <Text style={styles.searchText}>Search Exercise</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                            flexDirection: "row",
                            paddingTop: "5%"
                        }} contentContainerStyle={{ paddingLeft: "5%", paddingRight: "50%" }} >
                            {/* <View style={styles.headingContainer}> */}
                            <RNBounceable
                                onPress={() => this.setState({ currentPage: 0 })}
                                style={[styles.rowContainer, { backgroundColor: currentPage == 0 ? "white" : "transparent" }]}>
                                <Icon.MaterialCommunityIcons name="refresh" size={20} color={currentPage == 0 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 0 ? 'black' : 'white' }]}>Alertnatives</Text>
                            </RNBounceable>
                            <RNBounceable
                                onPress={() => this.setState({ currentPage: 1 })}
                                style={[styles.rowContainer, { backgroundColor: currentPage == 1 ? "white" : "transparent" }]}>
                                <Icon.Feather name="search" size={20} color={currentPage == 1 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 1 ? 'black' : 'white' }]}>Search</Text>
                            </RNBounceable>
                            <RNBounceable
                                onPress={() => this.setState({ currentPage: 2 })}
                                style={[styles.rowContainer, { backgroundColor: currentPage == 2 ? "white" : "transparent" }]}>
                                <Icon.MaterialCommunityIcons name="weight-lifter" size={20} color={currentPage == 2 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 2 ? 'black' : 'white' }]}>Body Part</Text>
                            </RNBounceable>
                            <RNBounceable
                                onPress={() => this.setState({ currentPage: 3 })}
                                style={[styles.rowContainer, { backgroundColor: currentPage == 3 ? "white" : "transparent" }]}>
                                <Icon.Entypo name="back-in-time" size={20} color={currentPage == 3 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 3 ? 'black' : 'white' }]}>Recent</Text>
                            </RNBounceable>
                            <RNBounceable
                                onPress={() => this.setState({ currentPage: 4 })}
                                style={[styles.rowContainer, { backgroundColor: currentPage == 4 ? "white" : "transparent" }]}>
                                <Icon.MaterialCommunityIcons name="star" size={20} color={currentPage == 4 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 4 ? 'black' : 'white' }]}>Frequent</Text>
                            </RNBounceable>
                            <RNBounceable
                                onPress={() => this.setState({ currentPage: 5 })}
                                style={[styles.rowContainer, { backgroundColor: currentPage == 5 ? "white" : "transparent" }]}>
                                <Icon.MaterialIcons name="mode-edit" size={20} color={currentPage == 5 ? 'black' : 'white'} />
                                <Text style={[styles.tabStyle, { color: currentPage == 5 ? 'black' : 'white' }]}>Custom</Text>
                            </RNBounceable>
                            {/* </View> */}
                        </ScrollView>

                    </View>
                    <View style={styles.modalLowerContainer}>
                        {
                            currentPage == 0 ?
                                <View style={{ flex: 1 }}>
                                    <View style={{ alignItems: "center", flex: 0.7 }}>
                                        <View style={styles.iconContainer}>
                                            <Icon.FontAwesome5 name="running" size={30} color={"white"} />
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle3}>No Alternative Exercise</Text>
                                        </View>
                                        <View style={styles.generalMargin}>
                                            <Text style={styles.textStyle1}>This exercise doesn't have any alternatives.</Text>
                                        </View>
                                    </View>
                                    <View style={styles.lowerViewContainer}>
                                        <View style={styles.inputContainer}>
                                            {/* <Input placeholder="Search" leftIcon={<View style={styles.generalMarginLeft}><Icon.EvilIcons name="search" size={20} /></View>} /> */}
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <Button.BrownButton title="Save" onPress={() => { }} />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }
                        {
                            currentPage == 1 ?
                                <View style={{ flex: 1 }}>
                                    <View style={{ alignItems: "center", flex: 0.7 }}>
                                        <View style={styles.iconContainer}>
                                            <Icon.FontAwesome5 name="running" size={30} color={"white"} />
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle3}>No Results</Text>
                                        </View>
                                        <View style={styles.generalMargin}>
                                            <Text style={styles.textStyle1}>We can't find any exercise with these parameters</Text>
                                        </View>
                                    </View>
                                    <View style={styles.lowerViewContainer}>
                                        <View style={styles.inputContainer}>
                                            <Input placeholder="Search" leftIcon={<View style={styles.generalMarginLeft}><Icon.EvilIcons name="search" size={20} /></View>} />
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <Button.BrownButton title="Save" onPress={() => { }} />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }
                        {
                            currentPage == 2 ?
                                <View style={{ flex: 1 }}>
                                    <View style={styles.lowerViewContainer}>
                                        <View style={styles.inputContainer}>
                                            <DropDownPicker
                                                items={distance}
                                                arrowColor={THEME.COLOR_BLACK}
                                                activeLabelStyle={styles.activeLabelStyle}
                                                activeItemStyle={styles.activeItemStyle}
                                                itemStyle={styles.itemStyle}
                                                labelStyle={styles.labelStyle}
                                                placeholder="Select Value"
                                                onClose={() => this.setState({ dropdownOpen5: false })}
                                                onOpen={() => this.setState({ dropdownOpen5: true })}
                                                containerStyle={{ height: 40, marginBottom: this.state.dropdownOpen5 ? 100 : 10 }}
                                                defaultValue={this.state.selectedDistance ? this.state.selectedDistance.label : ""}
                                                onChangeItem={(item) => { this.setState({ selectedDistance: item, item: item.value, index: item.value }) }} />
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <Button.BrownButton title="Save" onPress={() => { }} />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }
                        {
                            currentPage == 3 ?
                                <View style={{ flex: 1 }}>
                                    <View style={{ flex: 0.8 }}>
                                        <FlatList
                                            data={recentWorkouts}
                                            ItemSeparatorComponent={(renderSeperator)}
                                            contentContainerStyle={{ paddingVertical: "5%" }}
                                            renderItem={({ index, item }) => this._renderItem4(item, index)} />

                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <View style={styles.lowerViewContainer}>
                                            <View style={styles.inputContainer}>

                                            </View>
                                            <View style={styles.buttonContainer}>
                                                <Button.BrownButton loading={uploading} title="Save" onPress={() => { this.handleAddExercise() }} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }
                        {
                            currentPage == 4 ?
                                <View style={{ flex: 1 }}>
                                    <FlatList
                                        data={workout}
                                        ItemSeparatorComponent={(renderSeperator)}
                                        contentContainerStyle={{ paddingVertical: "5%" }}
                                        renderItem={({ index, item }) => this._renderItem4(item, index)} />
                                    {/* <View style={{ alignItems: "center", flex: 0.7 }}>
                                        <View style={styles.iconContainer}>
                                            <Icon.FontAwesome5 name="running" size={30} color={"white"} />
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle3}>No Recent Exercises</Text>
                                        </View>
                                        <View style={styles.generalMargin}>
                                            <Text style={styles.textStyle1}>Looks like you haven't used any exercises yet!</Text>
                                        </View>
                                    </View> */}
                                    <View style={styles.lowerViewContainer}>
                                        <View style={styles.inputContainer}>

                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <Button.BrownButton title="Save" onPress={() => { }} />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }
                        {
                            currentPage == 5 ?
                                <View style={{ flex: 1 }}>
                                    <View style={{ alignItems: "center", flex: 0.7 }}>
                                        <View style={styles.iconContainer}>
                                            <Icon.FontAwesome5 name="running" size={30} color={"white"} />
                                        </View>
                                        <View style={styles.marginTop}>
                                            <Text style={styles.textStyle3}>No Custom Exercises</Text>
                                        </View>
                                        <View style={styles.generalMargin}>
                                            <Text style={styles.textStyle1}>You haven't created any exercise.</Text>
                                        </View>
                                    </View>
                                    <View style={styles.lowerViewContainer}>
                                        <View style={styles.inputContainer}>

                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <Button.BrownButton title="Save" onPress={() => { }} />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }
                    </View>
                </Modal>
                <Modal style={styles.modalContainer} isVisible={this.state.createSetModal}
                    onBackdropPress={() => this.setState({ createSetModal: false })} >
                    <View style={{ bottom: "5%" }}>
                        <Text style={styles.searchText}>Gaint Set</Text>
                    </View>
                    <View style={styles.modalLowerContainer}>

                    </View>
                </Modal>
                <Modal isVisible={this.state.noteModal}>
                    <View style={styles.notemodalContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon.MaterialIcons name="content-paste" size={20} />
                                <Text style={styles.textStyle}>Add Note</Text>
                            </View>
                            <View style={{ width: 10 }} />
                            <TouchableOpacity onPress={() => this.setState({ noteModal: !this.state.noteModal, note: "" })}>
                                <Icon.AntDesign name="close" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <MessageTextInput value={this.state.note} onChangeText={(val) => this.setState({ note: val })} label="Exercise Note" />
                        </View>
                        <View style={{ ...styles.buttonContainer, alignItems: "center" }}>
                            <Button.LoginButton disabled={this.state.note ? false : true} title="Send" onPress={() => this.handleAddNote()} />
                        </View>
                    </View>
                </Modal>
                <ExerciseModal
                    isVisible={exerciseModal}
                    image={image}
                    title={title}
                    onPressRemoveExercise={() => this.handleRemoveExercise()}
                    onPressCreateSet={() => { if (!this.state.groupSet) { this.setState({ exerciseModal: false, groupSet: false, }, () => this.breakGaintSet()) } else this.setState({ exerciseModal: false, createSetModal: true }, () => this.getGroupExerciseSets()) }}
                    onPressAddNote={() => this.setState({ exerciseModal: false, noteModal: true })}
                    onPressHistory={() => this.setState({ exerciseModal: false, }, () => { console.log(this.state.item); this.props.navigation.navigate(route.WORKOUTHISTORY, { data: this.state.item }) })}
                    onPressSwapExercise={() => this.setState({ exerciseModal: false, searchModal: true, swapExercise: true })}
                    hide={() => this.setState({ exerciseModal: false })} />
                <MenuModal
                    isVisible={this.props.user.menuDotModal}
                    hide={() => this.props.authActions.menuDotModal(!this.props.user.menuDotModal)}
                    reOrder={() => { }}
                    quitSession={() => this.handleAlert()} />
                <UnfinishedModal
                    isVisible={this.state.unfinishModal}
                    hide={() => this.setState({ unfinishModal: false })}
                    reOrder={() => { }}
                    quitSession={() => this.setState({ unfinishModal: false }, () => {
                        // this.props.authActions.menuDotModal(!this.props.user.menuDotModal)
                        Alert.alert(
                            `Are you sure?`,
                            'Please confirm that you want to quit this session - Any data logged during the session will be cleared ',
                            [
                                {
                                    text: 'CANCEL'
                                },
                                {
                                    text: 'QUIT SESSION',
                                    onPress: () => { this.props.navigation.replace('Home') }
                                }
                            ]
                        )
                    })} />

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return { user: state.authReducer || {} };
};

const mapDispatchToProps = dispatch => {
    return { authActions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramCurrentWorkout);