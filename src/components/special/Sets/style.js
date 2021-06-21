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
        alignItems: "center"
    },
    second: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center"
    },
    third: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center"
    },
    thirdShadow: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center",
        padding: "2.5%",
        elevation: 1,
        borderRadius: 5
    },
    fourth: {
        flex: 0.25,
        flexDirection: "column",
        alignItems: "center"
    },
    fifth: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center",
    },
    fifthShadow: {
        flex: 0.225,
        flexDirection: "column",
        alignItems: "center",
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
        textAlign: "center"
    }
})