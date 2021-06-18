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
        marginTop: "10%",
        flexDirection: "row",
        alignItems: "center",
        margin: "5%",
        justifyContent: "space-between"
    },
    headingTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    generalMargin: {
        margin: "5%",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    labelStyle: { color: "black", fontWeight: "900" },
    contentContainer: { padding: "5%", flexDirection: "column", borderBottomWidth: 0.5, borderColor: "#c0c0c0" },
    titleStyle: { marginLeft: 10, fontSize: 16, },
    itemContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: "5%", paddingTop: "5%" }
})