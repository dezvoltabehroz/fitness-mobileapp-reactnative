import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: THEME.COLOR_WHITE,
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
        marginHorizontal: '10%',
        justifyContent: "center",
        alignItems: "center"
    },
    saveButton: {
        height: 54,
        marginTop: '5%',
        justifyContent: "center",
        backgroundColor: '#544b4c',
        paddingHorizontal: "10%",
        borderRadius: 30
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    }
})