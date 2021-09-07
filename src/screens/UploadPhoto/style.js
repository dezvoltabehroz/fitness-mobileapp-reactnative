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
    contentContainer: { flex: 0.7, marginTop: "12.5%", marginHorizontal: "5%" },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginTop: "5%",
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
        alignItems: "center",
      
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    iconContainer: { height: 70, width: 70, backgroundColor: 'white', justifyContent: "center", alignItems: "center", borderRadius: 5, elevation: 5 },
    lowerContainer: { flex: 0.3, justifyContent: "flex-end", }
})