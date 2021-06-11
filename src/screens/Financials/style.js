import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR,
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
    grayText: {
        color: "#C0C0C0",
        fontSize: 16,
        fontWeight: "bold",
    },
    grayTextStyle: {
        color: "#C0C0C0",
        fontSize: 20,
        fontWeight: "bold",
    },
    textStyle: {
        color: "#181818",
        fontSize: 20,
        fontWeight: "bold",
    },
    boxContainer: {
        marginTop: "5%",
        borderRadius: 5,
        height: 170,
        width: screenWidth * 0.9,
        justifyContent: "center",
        alignItems: "center",
    },
    boxContainer1: {
        marginTop: "5%",
        borderRadius: 5,
        height: 70,
        paddingLeft: "5%",
        width: screenWidth * 0.9,
        justifyContent: "center",
        backgroundColor:'#544b4c'
    },
    iconContainer: {
        marginTop: "15%",
        borderRadius: 35, height: 70, width: 70,
        justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
    },
    textStyle1: {
        fontSize: 16,
    },
    headingStyle: {
        paddingHorizontal: 5,
        fontSize: 16,
    },
    headingTextStyle: {
        paddingHorizontal: 5,
        fontSize: 35,
        fontWeight: "bold"
    },
    firstContainer: {
        width: screenWidth,
        backgroundColor: THEME.COLOR_WHITE,
    },
    secondContainer: {
        width: screenWidth,
        backgroundColor: THEME.COLOR_WHITE,
    },
    boxView: {
        borderRadius: 10, height: 70, width: 70,
        justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
    },
    row: {
        marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    itemTextStyle: {
        flex: 0.8,
        fontWeight: "bold",
        paddingRight: 5
    },
    upperContentContainer: {
        flexDirection: "row",
        margin: "5%",
        justifyContent: "flex-start",
        width: screenWidth * 0.7
    },
    firstUpperContainer: {
        flexDirection: "row",
        margin: "5%",

        borderWidth: 2,
        borderRadius: 60,
        overflow: "hidden",
        justifyContent: "space-between",
        width: screenWidth * 0.9
    },
    tabStyle: {
        alignItems: "center",
        justifyContent: "center",
        height: 25,
        width: screenWidth * 0.45
    },
    tabStyle1: {
        alignItems: "center",
        justifyContent: "center",
        height: 25,
        width: screenWidth * 0.3
    },
    tabTextStyle: {
        textAlign: "center",
    },
    lowerContentContainer: {
        flex: 1,
        // paddingVertical: "10%",
        borderTopLeftRadius: 25,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "lightgray",
    },
})