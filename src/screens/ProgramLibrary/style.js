import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLOR_WHITE,
        // justifyContent: "center",
        // alignItems: "center"
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
        // width: screenWidth * 0.65
    },
    generalMargin: {
        marginTop: "5%",
        marginHorizontal: "5%",
        // margin: "5%",
        // marginVertical: "5%"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    gapHeight:{
        height:10
    },
    boxView:{
        borderRadius: 10, height: 70, width: 70,
        justifyContent: "center", alignItems: "center", backgroundColor: '#544b4c'
    },
    itemContainer:{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: "5%", elevation: 2, padding: "5%", borderRadius: 10,marginBottom:10 }
})