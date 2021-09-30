import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../../assets/styles/theme.style';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    rowTitleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "5%"
    },
    first: {
        flex: 0.1,
        flexDirection: "column",
        marginHorizontal: "1%",
        alignItems: "center"
    },
    second: {
        flex: 0.225,
        flexDirection: "column",
        marginHorizontal: "2%",
        alignItems: "center"
    },
    secondShadow: {
        flex: 0.225,
        flexDirection: "column",
        padding: "2%",
        marginHorizontal: "2%",
        alignItems: "center"
    },
    third: {
        flex: 0.225,
        flexDirection: "column",
        marginHorizontal: "2%",
        alignItems: "center"
    },
    thirdShadow: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center",
        padding: "2.5%",
        marginHorizontal: "2.5%",
        elevation: 1,
        borderRadius: 5,
        // borderWidth: 0.5,
        // borderColor:THEME.COLOR_LIGHT_GRAY
    },
    fourth: {
        flex: 0.225,
        flexDirection: "column",
        marginHorizontal: "2%",
        alignItems: "center"
    },
    fourthShadow: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center",
        padding: "2.5%",
        // marginHorizontal: "2%",
        elevation: 1,
        borderRadius: 5,
        // borderWidth: 0.5,
        // borderColor:THEME.COLOR_LIGHT_GRAY
    },
    fifth: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center",
    },
    fifthShadow: {
        flex: 0.2,
        flexDirection: "column",
        alignItems: "center",
        marginHorizontal: "2%",
        padding: "2.5%",
        elevation: 1,
        borderRadius: 5
    },
    sixth: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center",
    },
    textStyle: {
        textAlign: "center",
        fontSize: 10
    },
    headingText: {
        textAlign: "center"
    }
})