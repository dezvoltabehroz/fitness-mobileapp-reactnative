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
        padding: "2.5%",
        marginHorizontal: 10,
        justifyContent: "center",
        borderRadius: 30,
    },
    searchText: { fontSize: 35, marginHorizontal: "5%", color: "white", fontWeight: "bold" },
    contentContainer: { flex: 0.7, marginTop: "12.5%" },
    headingContainer: { flexDirection: "row", marginTop: "10%", marginHorizontal: "5%", justifyContent: "space-between", alignItems: "center" },
    modalLowerContainer: {
        flex: 0.8,
        flexDirection: "column",
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    lowerViewContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end"
    },
    inputContainer: {
        flex: 0.7,
        paddingLeft: "5%",
        paddingTop: "7.5%",
        justifyContent: "flex-end"
    },
    buttonContainer: {
        marginHorizontal: "2%",
        flex: 0.3,
    },
    headingTextStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    tabStyle: {
        paddingHorizontal: "1%",
        marginLeft: 10
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
        marginHorizontal: "10%",
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
    modalLowerContainer1: {
        // flex: 0.8,
        flexDirection: "column",
        backgroundColor: "white",
        padding: "5%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    marginTop: { marginTop: "5%" },
    generalMarginLeft: { marginLeft: "5%" },
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end',
        margin: 0,
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
    },
    addExerciseContainer: { borderWidth: 1, marginHorizontal: "20%", borderColor: "#544b4c", alignItems: "center", justifyContent: "center", borderRadius: 35, height: 54 },
    flatListContainer: {
        borderRadius: 10,
        backgroundColor: THEME.COLOR_WHITE,
        elevation: 2,
        marginHorizontal: "5%",
        padding: "2.5%"
    },
    flatListRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    flatListRow1: {
        flexDirection: "row",
        alignItems: "center", 
    },
    gapWidth: {
        width: 15
    },
    imageStyle: {
        height: 50,
        width: 70
    },
    flatListTitleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})