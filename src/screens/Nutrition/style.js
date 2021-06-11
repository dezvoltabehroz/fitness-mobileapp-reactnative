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
        // flex: 0.3,
        flexDirection: "row",
        paddingVertical: "10%",
        alignItems: "center",
        // marginHorizontal: "5%",
        justifyContent: "space-between",
        // height: 160,
    },
    headingStyle: {
        paddingHorizontal: 5,
        fontSize: 35,
        // paddingHorizontal: "7.5%",
        // width: 125,
        // height: 35,
        // justifyContent: "center",
        fontWeight: "bold"
    },
    textStyle3: {
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
    rowContainerBadges: {
        flexDirection: "row"
    },
    rowContainerSpaceBetween: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    flatlistContainer: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 25,
        marginHorizontal: screenHeight * 0.0005,
    },
    gapWidth: {
        height: 20,
        width: 20
    },
    flatListcontentContainer: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: screenWidth * .425,
        marginLeft: "5%",
        paddingTop: "10%"
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: screenWidth,
        paddingVertical: "5%",
        // paddingLeft: "5%"
    },
    badgeMargin: {
        paddingHorizontal: 10
    },
    connectDevicesContainer: {
        margin: 15,
        padding: 15,
        backgroundColor: "red",
        borderRadius: 20
    },
    lowerContainer: {
        flex: 0.5,
        marginTop: "5%",
        justifyContent: "flex-end"
    },
    firstContainer: {
        width: screenWidth,
        borderTopLeftRadius: 25,
        backgroundColor: "#f9fafe",

    },
    secondContainer: {
        width: screenWidth,
        backgroundColor: "#f9fafe",
    },
    box: {
        // marginTop: 32,
        borderRadius: 4,
        backgroundColor: "#61dafb"
    },
    rowContainer: {
        // marginTop: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "5%"
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold",
    },
})