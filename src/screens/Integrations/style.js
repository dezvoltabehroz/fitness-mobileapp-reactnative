import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLOR_WHITE,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "5%",
        marginHorizontal: "5%",
        justifyContent: "space-between"
    },
    labelStyle: { color: "black", fontWeight: "900" },
    headingTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textStyle: {
        marginLeft: "5%",
        fontSize: 16,
        fontWeight: "600",
        // width: screenWidth * 0.65
    },
    generalMargin: {
        marginTop: "5%",
        marginHorizontal: "5%",
        // margin: "5%",
        // marginVertical: "5%"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
})