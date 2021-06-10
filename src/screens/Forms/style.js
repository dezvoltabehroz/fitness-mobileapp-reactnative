import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR,
    },
    upperContainer: {
        flexDirection: "row",
        paddingVertical: "10%",
        alignItems: "center",
        paddingHorizontal: "5%",
        justifyContent: "space-between",
    },
    headingStyle: {
        paddingHorizontal: 5,
        fontSize: 35,
        fontWeight: "bold"
    },
    upperContentContainer: {
        paddingVertical: "10%",
        borderTopLeftRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e2e2e2"
    },
    lowerContentContainer: {
        flex: 1,
        paddingTop: "10%",
        borderTopLeftRadius: 25,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    rowContainer: {
        marginVertical: "2.5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "5%"
    },
    headingTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    texStyle: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
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
    generalMargin: {
        marginTop: "5%",
        marginHorizontal: "5%",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    gapHeight: {
        height: 10
    }
})