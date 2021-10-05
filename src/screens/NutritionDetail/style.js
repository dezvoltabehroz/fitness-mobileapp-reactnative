import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLOR_WHITE,
    },
    upperContainer: {
        flex: 0.3,
        paddingTop: "5%",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: "5%",
        justifyContent: "space-between",
    },
    textStyle: {
        // color: THEME.PRIMARY_BACKGROUND_COLOR,
        fontSize: 20,
        fontWeight: "bold",
    },
    textStyle2: {
        color: THEME.PRIMARY_BACKGROUND_COLOR,
        fontSize: 20,
        fontWeight: "bold",
    },
    iconContainer: {
        marginTop: "5%",
        borderRadius: 5, height: 170, width: screenWidth * 0.9,
        justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
    },
    textStyle1: {
        color: "lightgrey",
        fontSize: 16,
    },
    headingStyle: {
        paddingHorizontal: 5,
        fontSize: 16,
        textDecorationLine: "underline"
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
    row: { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: "2.5%" },
    itemTextStyle: { flex: 0.8, fontWeight: "bold", paddingRight: 5 },
    upperContentContainer: { flexDirection: "row", margin: "5%", justifyContent: "flex-start", width: screenWidth * 0.7 },
    buttonContainer: { marginHorizontal: "20%", justifyContent: "center" },
    buttonStyle: { position: "absolute", bottom: 40, },
    marginTop: {
        marginTop: "5%"
    },
    generalMargin: { elevation: 2, marginTop: "5%", marginHorizontal: "5%" },
    itemContainer: { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", elevation: 2, paddingVertical: "2.5%", paddingHorizontal: "5%", marginBottom: 10 },
    // itemContainer2: { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", elevation: 2, marginBottom: 10 },
    modalLowerContainer: {
        flex: 0.8,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end',
        margin: 0,
    },
    searchText: { fontSize: 35, marginHorizontal: "5%", color: "white", fontWeight: "bold" },
    first: {
        flex: 0.55,
        padding: "5%",
        flexDirection: "column",
    },
    second: {
        flex: 0.15,
        alignItems: "center",
        paddingVertical: "5%", paddingHorizontal: "2.5%",
        flexDirection: "column",
    },
    third: {
        flex: 0.15,
        paddingVertical: "5%", paddingHorizontal: "2.5%",
        alignItems: "center",
        flexDirection: "column",
    },
    fourth: {
        flex: 0.15,
        paddingVertical: "5%", paddingHorizontal: "2.5%",
        alignItems: "center",
        flexDirection: "column",
    },

})