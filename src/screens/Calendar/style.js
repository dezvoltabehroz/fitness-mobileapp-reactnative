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
        flexDirection: "row",
        alignItems: "center",
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
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    gapHeight: {
        height: 10
    },
    modalLowerContainer: {
        // flex: 0.8,
        flexDirection: "column",
        backgroundColor: "white",
        padding: "5%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    nameStyle: { fontSize: 16, color: "white", fontWeight: "bold" },
    imageStyle: { height: 45, width: 40 },
    modalContainerStyle: { justifyContent: 'flex-end', margin: 0 },
    itemContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "2.5%", padding: "2.5%" },
    backContainer: { marginHorizontal: "5%", justifyContent: "center", alignItems: "center", height: 45, width: 45, borderRadius: 25, backgroundColor: "#544b4c" }
})