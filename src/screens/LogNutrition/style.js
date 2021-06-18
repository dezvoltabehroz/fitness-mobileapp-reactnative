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
    selectPlanContainer: { marginHorizontal: "5%", marginTop: "5%", flexDirection: "column" },
    selectPlanInnerContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: "5%", borderRadius: 10, elevation: 2, paddingVertical: "8.5%", paddingHorizontal: "5%" },
    noNutritionContainer: { marginHorizontal: "5%", marginTop: 10, flexDirection: "column" },
    noNutritionInnerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 10, elevation: 2, paddingVertical: "6.5%", paddingHorizontal: "5%" },
    steupFitnessInnerContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 10, elevation: 2, paddingVertical: "5%", paddingHorizontal: "5%" },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    headingTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "600",
    },
    generalMargin: {
        margin: "5%",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    buttonContainer: { marginTop: "10%", justifyContent: "center", alignItems: "center" },
    logText:{ fontSize: 12, color: "lightgray", marginTop: 5, fontWeight: "bold" }
})