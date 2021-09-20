import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    buttonContainer: {
        justifyContent: "center",
        marginTop: "5%",
        marginHorizontal: "20%"
        // alignItems: "center"
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
    generalMargin3: {
        marginTop: '10%'
    },
    notiText: {
        fontSize: 12,
        color: THEME.PRIMARY_BACKGROUND_COLOR,
        fontWeight: "bold",
        marginBottom: 5
    },
    marginRight: {
        marginRight: "5%"
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
    },
    itemContainer: {
        backgroundColor: THEME.COLOR_WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal: "5%",
        marginVertical: "5%",
        borderRadius: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: '5%'
    },
    rowStyle: {
        marginTop: "5%",
        paddingVertical: "5%",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowStyle1: {
        marginTop: "2.5%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    columnStyle: { flex: 0.3, flexDirection: 'column', alignItems: "center" },
    titleStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    titleStyle1: {
        fontSize: 18,
        fontWeight: "bold"
    },
    headingStyle: {
        fontSize: 20,
        fontWeight: "bold"
    }
})