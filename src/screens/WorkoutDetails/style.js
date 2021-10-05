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
        color: "#181818",
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
    buttonContainer: { alignItems: "center", justifyContent: "center" },
    buttonStyle: { position: "absolute", bottom: 40, },
    marginTop: {
        marginTop: "5%"
    },
    generalMargin:{ marginTop: "5%", marginHorizontal: "5%" },
    itemContainer:{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: "5%", elevation: 2, padding: "5%", borderRadius: 10, marginBottom: 10 },
    flatListContainer: {
        borderRadius: 10,
        backgroundColor: THEME.COLOR_WHITE,
        elevation: 2,
        marginHorizontal: "5%",
        padding: "2.5%"
    },
    flatListRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    flatListRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    gapWidth: {
        width: 5
    },
    imageStyle: {
        height: 50,
        width: 70
    },
    flatListTitleStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
})