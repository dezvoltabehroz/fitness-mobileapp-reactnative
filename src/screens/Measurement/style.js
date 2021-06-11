import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    generalMargin: {
        marginHorizontal: "5%",
        marginVertical: '2.5%'
    },
    generalMargin1: {
        marginHorizontal: "2.5%",
        marginVertical: '2.5%'
    },
    generalMargin2: {
        marginHorizontal: "2.5%",
        marginTop: '2.5%'
    },
    generalMargin3:{
        marginTop: '10%'
    },
    notiText: {
        fontSize: 12,
        color: THEME.PRIMARY_BACKGROUND_COLOR,
        fontWeight: "bold",
        marginBottom: 5
    },
    dateContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: THEME.COLOR_WHITE,
        padding: 10,
        borderRadius: 5
    },
    dateTextStyle: {
        marginLeft: 15,
        fontWeight: "bold"
    },
    rowContainer: {
        flexDirection: "row",
        width: '48%',
        justifyContent: "space-between",
        alignItems: "center"
    },
    headingTextStyle: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    }
})