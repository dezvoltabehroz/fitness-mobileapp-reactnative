import { HeaderHeightContext } from '@react-navigation/stack';
import { StyleSheet, Dimensions } from 'react-native';
import THEME from '../../assets/styles/theme.style';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "10%",
        paddingHorizontal: "5%"
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
    headingStyle: {
        fontSize: 18
    },
    headingContainer: {
        marginVertical: 10
    },
    greenContainer: {
        backgroundColor: "#96CC39",
        marginTop: "2.5%",
        width: screenWidth * 0.9,
        borderRadius: 5,
        padding: "5%"
    },
    purpleContainer: {
        backgroundColor: "#aea0db",
        borderRadius: 5,
        marginTop: "2.5%",
        width: screenWidth * 0.9,
        padding: "5%"
    },
    blueContainer: {
        backgroundColor: "#2b3d51",
        borderRadius: 5,
        marginTop: "2.5%",
        width: screenWidth * 0.9,
        padding: "5%"
    },
    textStyle: {
        color: "white"
    }
})