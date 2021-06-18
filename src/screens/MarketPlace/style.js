import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: THEME.COLOR_WHITE,
        // justifyContent: "center",
        // alignItems: "center"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: "10%",
        marginHorizontal: "2.5%",
        justifyContent: "space-between"
    },
    headingTextStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    textStyle: {
        color: "#FFFFFF",
        textAlign: "center",
        marginLeft: "10%",
        fontSize: 18,
        fontWeight: "bold",
        // width: screenWidth * 0.65
    },
    textStyle1: {
        textAlign: "center",
        // fontSize: 16,
        color: "#FFFFFF",

        // width: screenWidth * 0.65
    },
    textStyle2: {
        // textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#C0C0C0",
    },
    generalMargin: {
        marginHorizontal: "7.5%",
        marginVertical: "5%"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    marginHorizontal: {
        marginHorizontal: "15%"
    }
})