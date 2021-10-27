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
        marginVertical: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "5%"
    },
    headingTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold",
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
    rowStyle: { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: "2.5%" },
    gapHeight:{
        height:10
    },
    buttonContainer: { alignItems: "center", justifyContent: "center" },
    buttonStyle: { position: "absolute", bottom: 40, },
    itemContainer:{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: "5%", elevation: 2, padding: "5%", borderRadius: 10, marginBottom: 10 },
    boxView:{
        borderRadius: 10, height: 70, width: 70,
        justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
    },
    itemTypeContainer:{ flex: 0.8, marginHorizontal: "5%" }
})