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
    upperContainer: {
        alignItems: "center", flex: 0.7
    },
    headingStyle: {
        paddingHorizontal: 5,
        fontSize: 35,
        fontWeight: "bold"
    },
    textStyle: {
        color: "#C0C0C0",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    iconContainer: {
        marginTop: "15%",
        borderRadius: 35, height: 70,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#544b4c'
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

})