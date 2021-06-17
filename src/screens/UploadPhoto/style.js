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
        flexDirection: "row",
        alignItems: "center",
        marginTop: "5%",
        marginHorizontal: "5%",
        justifyContent: "space-between"
    },
    headingTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textStyle: {
        // color: "#C0C0C0",
        textAlign: "center",
        marginLeft: "10%",
        fontSize: 16,
        fontWeight: "bold",
        // width: screenWidth * 0.65
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
    buttonContainer:{
        justifyContent:"center",
        alignItems:"center"
    }
})