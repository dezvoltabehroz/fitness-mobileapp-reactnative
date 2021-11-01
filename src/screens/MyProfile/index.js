import moment from 'moment';
import React, { Component } from 'react'
import {
    View,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { Container, MessageTextInput, Button } from "../../components";
import { Input } from '../../components/Input/Input.component';
import { authActions } from '../../redux/actions/auth';
import { AuthServices } from '../../services';

import styles from './style';

class MyProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btnLoading: false,
            firstName: this.props.route.params.data.firstName,
            lastName: this.props.route.params.data.lastName,
            address1: this.props.route.params.data.userAddress,
            city: this.props.route.params.data.userCity,
            state: this.props.route.params.data.userState,
            postalCode: this.props.route.params.data.userPostalCode,
            country: this.props.route.params.data.userCountry,
            goal: this.props.route.params.data.notes
        }
    }

    handleUpdateProfile = () => {
        this.setState({ btnLoading: true })
        const { firstName, lastName, address1, city, state, postalCode, country, goal } = this.state;
        // let data = {
        //     "userId": parseInt(this.props.route.params.data.userId),
        //     "roleId": parseInt(this.props.route.params.data.roleId),
        //     "genderId": parseInt(this.props.route.params.data.genderId),
        //     "firstName": firstName ? firstName : "",
        //     "lastName": lastName ? lastName : "",
        //     "email": this.props.route.params.data.email,
        //     "phone": this.props.route.params.data.phone,
        //     "birthDate": this.props.route.params.data.birthDate,
        //     "userWeight": this.props.route.params.data.userWeight,
        //     "notes": goal ? goal : "",
        //     "userAddress": address1 ? address1 : "",
        //     "userCity": city ? city : "",
        //     "userState": state ? state : "",
        //     "userPostalCode": postalCode ? postalCode : "",
        //     "userCountry": country ? country : "",
        //     "profilePic": this.props.route.params.data.profilePic
        // }
        let data = {
            "userId": parseInt(this.props.route.params.data.userId),
            "roleId": parseInt(this.props.route.params.data.roleId),
            "genderId": parseInt(this.props.route.params.data.genderId),
            "firstName": firstName ? firstName : "",
            "lastName": lastName ? lastName : "",
            "email": this.props.route.params.data.email,
            "phone": this.props.route.params.data.phone,
            "birthDate": moment(this.props.route.params.data.birthDate).format('YYYY-MM-DD'),
            "userWeight": this.props.route.params.data.userWeight,
            "notes": goal ? goal : "",
            "userAddress": address1 ? address1 : "",
            "userCity": city ? city : "",
            "userState": state ? state : "",
            "userPostalCode": postalCode ? postalCode : "",
            "userCountry": country ? country : "",
            "profilePic": "string"
        }
        console.log(this.props.route.params.data)
        console.log("data : ", data)
        AuthServices.updateProfileInfo(data, this.props.user.userData.userId, this.props.user.userData.token)
            .then((res) => {
                console.log(res);
                this.props.navigation.goBack();
                this.setState({ btnLoading: false })
            })
            .catch((err) => { this.setState({ btnLoading: false }); alert(err.response.data.responseMessage); console.log(err.response) })
    }

    render() {
        const { firstName, lastName, address1, city, state, postalCode, country, btnLoading, goal } = this.state;
        return (
            <Container props={this.props}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{ paddingBottom: "20%" }}>
                        <Input label="First Name" placeholder="First Name" value={firstName} onChangeText={(text) => this.setState({ firstName: text })} />
                        <Input label="Last Name" placeholder="Last Name" value={lastName} onChangeText={(text) => this.setState({ lastName: text })} />
                        <Input label="Address" placeholder="Address" value={address1} onChangeText={(text) => this.setState({ address1: text })} />
                        {/* <Input label="Address 2" placeholder="Address 2" value={firstName} /> */}
                        <Input label="Town/City" placeholder="Town/City" value={city} onChangeText={(text) => this.setState({ city: text })} />
                        <Input label="County/State" placeholder="County/State" value={state} onChangeText={(text) => this.setState({ state: text })} />
                        <Input label="Post Code/Zip Code" placeholder="Post Code/Zip Code" value={postalCode} onChangeText={(text) => this.setState({ postalCode: text })} />
                        <Input label="Country" placeholder="Country" value={country} onChangeText={(text) => this.setState({ country: text })} />
                        <MessageTextInput label="Goal" placeholder="Goal" value={goal} onChangeText={(text) => this.setState({ goal: text })} />
                        <View style={styles.buttonContainer}>
                            <Button.SlimButton loading={btnLoading} title=" Update Details" onPress={() => this.handleUpdateProfile()} />
                        </View>
                    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);