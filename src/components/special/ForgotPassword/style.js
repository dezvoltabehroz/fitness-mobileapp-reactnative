import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: '5%'
    },
    rowContainer: {
        flexDirection: "row",
        marginVertical: "5%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})