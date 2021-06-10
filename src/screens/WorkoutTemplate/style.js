import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLOR_WHITE,
        // paddingTop: Platform.OS == 'ios' ? "15%" : "5%"
    },
    upperContainer: {
        flex: 0.3,
        paddingTop: "5%",
        flexDirection: "row",
        // paddingVertical: "10%",
        alignItems: "center",
        marginHorizontal: "5%",
        justifyContent: "space-between",
        // height: 160,
    },
    textStyle: {
        color: "#C0C0C0",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    iconContainer: {
        marginTop: "15%",
        borderRadius: 35, height: 70, width: 70,
        justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
    },
    textStyle1: {
        color: "lightgrey",
        textAlign: "center",
        fontSize: 16,
    },
    headingStyle: {
        paddingHorizontal: 5,
        fontSize: 16,
        textDecorationLine:"underline"
    },
    firstContainer: {
        width: screenWidth,
        // borderTopLeftRadius: 25,
        backgroundColor: THEME.COLOR_WHITE,

    },
    secondContainer: {
        width: screenWidth,
        backgroundColor: THEME.COLOR_WHITE,
    },
})