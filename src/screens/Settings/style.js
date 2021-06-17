import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR,
    },
    upperContainer: {
        flexDirection: "row",
        paddingVertical: "10%",
        alignItems: "center",
        paddingHorizontal: "5%",
        justifyContent: "space-between",
    },
    columnStyle: {
        flexDirection: 'column',
        overflow: 'hidden',
        justifyContent: "center",
        marginLeft: "5%",
        paddingTop: "5%",
    },
    headingStyle: {
        paddingHorizontal: 5,
        fontSize: 35,
        fontWeight: "bold"
    },
    titleStyle: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold"
    },
    emailStyle: {
        textAlign: "center",
        fontSize: 18,
    },
    upperContentContainer: {
        paddingVertical: "10%",
        borderTopLeftRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e2e2e2"
    },
    lowerContentContainer: {
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    activities_container: {
        margin: 15,
    },
    text_panel_heading: {
        fontSize: 18,
        paddingLeft: "5%",
        width: screenWidth * 0.8,
        fontWeight: "bold"
    },
    textStyle: {
        fontSize: 18,
        paddingLeft: "5%",
        width: screenWidth * 0.65,
        fontWeight: "bold"
    },
    loginButton: {
        height: 54,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "25%",
        backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR,
        // padding: "5%",
        paddingHorizontal: "10%",
        borderRadius: 30
    },
    loginButtonText: {
        // color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        // "Poppins-Medium"
    },
    text_panel_heading_1: {
        fontSize: 18,
        paddingLeft: "8%",
        width: screenWidth * 0.825,
        fontWeight: "bold"
    },
    plus_sign_panel_heading: {
        flex: 1,
        height: 30,
        resizeMode: 'contain',
        width: plusWidth,
    },
    country_container: {
        alignItems: "center",
        flexDirection: 'row',
        textAlign: 'left',
    },
    country_container_1: {
        alignItems: "center",
        flexDirection: 'row',
        textAlign: 'left',
    },
    rowContainer: { flexDirection: "row", alignItems: "center", },
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 25,
        padding: "5%"
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})