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
    recentStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    viewStyle: {
        fontSize: 12,
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
    },
    gapHeight: {
        height: 20
    },
    rowContainer: {
        marginVertical: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "5%"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    itemContainer: { flex: 1, flexDirection: "row", marginHorizontal: "5%", alignItems: "center" },
    boxView: {
        borderRadius: 10, height: 70, width: 70,
        justifyContent: "center", alignItems: "center", //backgroundColor: '#544b4c'
    },
    itemTypeContainer: { flex: 0.8, marginHorizontal: "5%" },
    fromNowText: { color: "gray", fontWeight: "bold", fontSize: 12 },
    iconContainer: { flex: 0.2, justifyContent: "flex-start", alignItems: "flex-end" },
    buttonContainer: { alignItems: "center", justifyContent: "center" },
    buttonStyle: { position: "absolute", bottom: 40, }
})