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
        marginVertical: "2.5%",
        marginHorizontal: "2.5%"
    },
    notiText: {
        fontSize: 12,
        color: THEME.PRIMARY_BACKGROUND_COLOR,
        fontWeight: "bold",
        marginBottom: 5
    },
    buttonContainer: {
        marginTop: "10%",
        marginHorizontal: '10%',
        justifyContent: "center",
        alignItems: "center"
    },
    scrollContentContainer: {
        paddingTop: "5%",
        marginHorizontal: "2.5%",
        paddingBottom: 120
    },
    activeLabelStyle: {
        color: "white",
        fontWeight: "bold"
    },
    itemStyle: {
        justifyContent: 'flex-start',
        paddingHorizontal: "5%"
    },
    activeItemStyle: {
        backgroundColor: THEME.BUTTON_COLOR
    },
    labelStyle: {
        color: "black",
    }
})