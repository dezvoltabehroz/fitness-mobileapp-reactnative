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
    inputBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'white',
        borderRadius: 25,
        paddingTop: Platform.OS === "android" ? 0 : 3,
        paddingBottom: Platform.OS === "android" ? 0 : 3,
        overflow: "hidden",
        marginRight: 5,
        marginLeft: 5,
        paddingRight: 10,
        paddingLeft: 10
        // paddingVertical: '5%',
        // minHeight: 47,
    },
    commentInput: {
        color: 'black',
        fontSize: 14,
        lineHeight: 18,
        flex: 1,
        paddingTop: 12,
        paddingBottom: 10,

        // maxHeight: 150,
    },
    balloon: {
        alignSelf: 'baseline',
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 18,
        maxWidth: '80%',
        minWidth: '20%',
        marginRight: 13,
    },
    item: {
        letterSpacing: 0.5,
        lineHeight: 20,
        padding: 10,
        fontSize: 14,
        // color: ,
        flex: 1
    },
    seperatorStyle: {
        height: 15
    },
    attachment: {
        // flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'white',
        borderRadius: 30,
        // marginRight: 10,
        // marginLeft: 10,
        // paddingTop: 10,
        // marginBottom: 15,
    }
})
