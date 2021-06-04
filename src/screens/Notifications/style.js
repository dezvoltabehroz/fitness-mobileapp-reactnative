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
    headingStyle: {
        paddingHorizontal: 5,
        fontSize: 35,
        fontWeight: "bold"
    },
    upperContentContainer: {
        paddingVertical: "10%",
        borderTopLeftRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e2e2e2"
    },
    lowerContentContainer: {
        flex: 1,
        // paddingVertical: "10%",
        borderTopLeftRadius: 25,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    gapHeight: {
        height: 20
    }
})