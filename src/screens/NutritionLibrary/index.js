import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { authActions } from '../../redux/actions/auth';
import { Container, FilterModal, Icon, Loader } from '../../components';
import { Input } from '../../components/Input/Input.component';

import styles from './style';
import { renderSeperator } from '../../lib/utils/global';
import { route } from '../../lib/utils/constants';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { NutritionsServices } from '../../services';

class NutritionLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterModal: false,
            laoding: true,
            nutrition: []
        }
    }

    componentDidMount = async () => {
        const { userData } = this.props.user;
        console.log(userData)
        NutritionsServices.getMealPlans(userData.token, userData.userId)
            .then((response) => {
                this.setState({ nutrition: response.data, laoding: false })
            })
            .catch((error) => console.log(error))
    }

    _renderItems = ({ index, item }) => {
        return (
            <RNBounceable onPressOut={() => { this.props.navigation.navigate(route.NUTRITION_DETAIL, { data: item }) }} style={styles.itemContainer} onPress={() => { }}>
                <View style={styles.boxView}>
                    <Text></Text>
                </View>
                <View style={styles.itemTypeContainer}>
                    <Text numberOfLines={3} style={{ fontWeight: "bold", }}>{item.mealPlanName}</Text>
                </View>
            </RNBounceable>
        )
    }

    render() {
        const { nutrition, reportModal, issue, laoding, filterModal } = this.state;
        return (
            <Container props={this.props}>
                {
                    laoding ?
                        <Loader />
                        :
                        <View style={styles.container}>
                            <View style={{ marginTop: "10%" }}>
                                <Input placeholder="Search" leftIcon={<View style={{ marginLeft: "5%" }}><Icon.EvilIcons name="search" size={20} /></View>} />
                                <ScrollView style={{ paddingBottom: 100 }}>
                                    <View style={styles.rowContainer} >
                                        <Text style={styles.textStyle}>A to Z</Text>
                                        <RNBounceable onPress={() => this.setState({ filterModal: true })} style={styles.row}>
                                            <Icon.FontAwesome name="filter" size={20} />
                                        </RNBounceable>
                                    </View>
                                    <FlatList
                                        data={nutrition}
                                        keyExtractor={item => item}
                                        style={{ marginBottom: 100, paddingBottom: 20 }}
                                        ItemSeparatorComponent={(renderSeperator)}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ index, item }) => this._renderItems({ index, item })}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                }

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

export default connect(mapStateToProps, mapDispatchToProps)(NutritionLibrary)
