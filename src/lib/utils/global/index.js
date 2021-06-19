/**
 * Return APi configured header with bearer token for APi calls
 * @param token
 * @param type
 */
export const apiHeaderConfiguration = (token, type) => {
    switch (type) {
        case "token":
            return {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
            break;

        case "multipart":
            return {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                }
            }
            break;

        default:
            return { headers: { 'Content-Type': 'application/json' } }
            break;

    }
}

/**
 * Return a view of Blank Space
 */
import React from 'react';
import { View } from 'react-native';
export const renderSeperator = () => {
    return (
        <View style={{ height: 15 }}></View>
    )
}

/**
 * Return True if email enter is correct
 * @param email
 */
export const isEmailValid = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}