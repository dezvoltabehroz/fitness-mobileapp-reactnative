import { StyleSheet } from 'react-native';
import THEME from '../../assets/styles/theme.style'
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "5%",
        backgroundColor: THEME.COLOR_WHITE
    },
    headingStyle: {
        marginVertical: 10,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 30
    },
    headingText: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    headingTextStyle: {
        marginVertical: 10,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 20
    },
    iconContainer: {
        marginVertical: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    rowContainer: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rowStyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    latestCircleContainer: {
        marginVertical: "10%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center"
    },
    colorText: {
        color: THEME.PRIMARY_BACKGROUND_COLOR,
        fontWeight: "bold"
    },
    simpleText: {
        color: THEME.COLOR_WHITE,
        fontWeight: "bold"
    },
    colorStyle: {
        backgroundColor: THEME.BUTTON_COLOR,
        borderRadius: 50,
        padding: "5%"
    },
    simpleStyle: {
        backgroundColor: "transparent"
    },
    progressPhotoConatiner: {
        borderRadius: 10,
        elevation: 1,
        padding: "5%"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        height: 100,
        width: 80
    }
})