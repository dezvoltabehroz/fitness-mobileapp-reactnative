import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: "5%",
        justifyContent:"center",
        borderRadius: 30,
    },
    headingTextStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    tabStyle: {
        paddingHorizontal: "1%",
    },
    textStyle: {
        color: "#544b4c",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    textStyle2: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: THEME.PRIMARY_BACKGROUND_COLOR,
    },
    generalMargin: {
        marginTop: "5%",
        marginHorizontal: "5%",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    textStyle3: {
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
})