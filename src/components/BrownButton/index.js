import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => this.props.onPress()} style={styles.buttonStyle}>
                    <View >
                        <Text style={styles.buttonText}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: '10%',

        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle: {
        height: 54,
        marginTop: '5%',
        justifyContent: "center",
        backgroundColor: '#544b4c',
        // padding: "5%",
        width: 80,
        paddingHorizontal: "10%",
        borderRadius: 30
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    }
})

export default Button;
