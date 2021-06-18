import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const plusWidth = screenWidth * .3;
export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: THEME.COLOR_WHITE,
        // justifyContent: "center",
        // alignItems: "center"
    },
    textStyle2:{
        // textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#C0C0C0",
    },
    contentContainer:{ flex: 0.7, marginTop: "12.5%" },
    textContainer:{ marginHorizontal: "15%", alignItems: "center" }
})