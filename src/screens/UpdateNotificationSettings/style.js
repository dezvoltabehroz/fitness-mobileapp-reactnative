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
        flexDirection: "row",
        alignItems: "center",
        // marginTop: "5%",
        margin: "5%",
        justifyContent: "space-between"
    },
    headingTextStyle: {
        fontSize: 18,
        fontWeight: "bold",

    },
    textStyle: {
        fontSize: 16,
        fontWeight: "600",
        width: screenWidth * 0.65
    },
    generalMargin: {
        margin: "5%",
        // marginVertical: "5%"
    },
    notiText: {
        fontSize: 12,
        color: THEME.PRIMARY_BACKGROUND_COLOR,
        fontWeight: "bold", 
        marginBottom: 5
    },
   
})