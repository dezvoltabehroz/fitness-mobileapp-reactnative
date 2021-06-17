import axiosInstance from './Interceptor';
import {apiHeaderConfiguration} from '../lib/utils/global'
import {TOKEN} from '../lib/utils/constants'

const Api = {
    viewWalletDetails: function (userData) {
        return axiosInstance.post('wallet/viewBankDetail', {
            id: userData.id
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    addBankDetail: function (userData) {
        return axiosInstance.post('wallet/addBankDetail', {
            id: userData.id,
            acc_name: userData.acc_name,
            acc_num: userData.acc_num,
            routing_num: userData.routing_num,
            swift_code: userData.swift_code,
            bank_address: userData.bank_address,
            local_address: userData.local_address,
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    addPaymentDetail: function (userData) {
        return axiosInstance.post('wallet/addPaymentDetail', {
            id: userData.id,
            full_name: userData.full_name,
            address_1: userData.address_1,
            address_2: userData.address_2,
            postal_code: userData.postal_code,
            city: userData.city,
            state: userData.state,
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    getBalance: function (userData) {
        return axiosInstance.post('wallet/barberBalance', {
            id: userData.id
        }, apiHeaderConfiguration(userData.token, TOKEN))
    },
    barberWithDrawRequest: function (userData) {
        return axiosInstance.post('wallet/barberWithDrawRequest', {
            id: userData.id,
            amount: userData.amount,
            type: userData.type
        }, apiHeaderConfiguration(userData.token, TOKEN))
    }

};

export default Api;