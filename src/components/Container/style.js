import { StyleSheet, Dimensions, Platform } from 'react-native'
import THEME from '../../assets/styles/theme.style'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR,
        paddingTop: Platform.OS == 'ios' ? "15%" : "5%"
    },
    upperContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        marginVertical: "2%",
        alignItems: "center",
        paddingHorizontal: "15%"
    },
    lowerContainer: {
        flex: 0.7,
        paddingHorizontal: "5%",
        borderTopLeftRadius: 25,
        paddingTop: "10%",
        backgroundColor: "#f9fafe",
    },
    imageStyle: {
        height: 100,
        width: 150
    },
    TextContainer: {
        paddingHorizontal: "10%",
        marginBottom: 10
    },
    loginASContainer: {
        // marginTop: '5%'
    },
    headingTextStyle: {
        fontSize: THEME.FONT_SIZE_XLARGE,
        fontWeight: "bold"
    },
    babeoTextStyle: {
        fontFamily: 'notoserif', // 'Poppins-Bold',
        fontSize: THEME.FONT_SIZE_LARGE,
        color: THEME.PRIMARY_COLOR
    },
    customerAndBarberContainer: {
        borderRadius: 5,
        marginBottom: 15,
        marginHorizontal: '10%',
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: THEME.COLOR_WHITE,
        height: 54,
    },
    CustomerContainer: {
        margin: 3,
        borderRadius: 5,
        width: "46%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'

    },
    optionContainer: {
        flexDirection: "row",
        marginHorizontal: 10
    },
    optionTextStyle: {
        fontFamily: 'notoserif', // 'Poppins-Regular',
        fontSize: 15,
        marginHorizontal: 10,
        marginTop: 5
    },
    gap: {
        width: THEME.GAP_BETWEEN_ELEMENT
    },
    barberContainer: {
        margin: 3,
        borderRadius: 5,
        width: "46%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    },
    faceBookButton: {
        height: 54,
        marginHorizontal: '10%',
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "#1281E3"
    },
    googleButton: {
        height: 54,
        marginHorizontal: '10%',
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "#EF5A2A"
    },
    iconContainer: {
        flexDirection: "column",
        marginLeft: '25%'
    },
    phoneNumberButton: {
        height: 54,
        marginHorizontal: '10%',
        justifyContent: "center",
        backgroundColor: THEME.PRIMARY_COLOR
    },
    signUpAndLoginTextStyle: {
        marginVertical: "1%",
        fontFamily: 'notoserif', // "Poppins-Regular",
        fontSize: 16,
        textAlign: "center",
        color: THEME.COLOR_WHITE
    },
    forgetPasswordTextStyle: {
        marginVertical: "5%",
        fontSize: 16,
        fontFamily: 'notoserif', // "Poppins-Regular",
        textAlign: "center",
        color: '#534c4d'
    },
    continueWithoutTextStyle: {
        marginTop: "5%",
        marginBottom: '5%',
        fontFamily: 'notoserif', // "Poppins-Regular",
        textAlign: "center",
        color: '#9FACBD',
        textDecorationLine: 'underline'
    },
    signUpAsBarberTextStyle: {
        marginTop: "5%",
        fontFamily: 'notoserif', // "Poppins-Regular",
        textAlign: "center",
        color: '#9FACBD',
        textDecorationLine: 'underline'
    },
    buttonTextStyle: {
        color: "#fff",
        fontSize: 15,
        // textAlign: "center",
        fontFamily: 'notoserif', // "Poppins-Medium"
    },
    phoneTextContainer: {
        flexDirection: "column",
        marginHorizontal: "10%",
    },
    facebookTextContainer: {
        flexDirection: "column",
        // marginHorizontal: "18%",
    },
    continueContainer: {
        alignItems: "center",
        width: "100%"
    },
    continueContainerStyle: {
        flexDirection: 'row',
        alignItems: "center",
    },
    buttonContainer: {
        marginHorizontal: '10%',
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainerStyle: {
        height: 54,
        marginBottom: '4%',
        width: screenWidth * 0.8,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_WHITE
    },
    iconStyle: {
        marginRight: '5%'
    },
    row: {
        flexDirection: "row",
        // justifyContent: 'center',
        alignItems: 'center'
    },
    onSubmitTrue: { marginTop: "1%", marginBottom: "1%" },
    loginButton: {
        height: 54,
        justifyContent: "center",
        backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR,
        // padding: "5%",
        paddingHorizontal: "10%",
        borderRadius: 30
    },
    loginButtonText: {
        // color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'notoserif', // "Poppins-Medium"
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: screenWidth,
        // paddingVertical: "5%",
        // paddingLeft: "2.5%"
    },
    flatlistContainer: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 25,
        marginHorizontal: screenHeight * 0.025,
    },
    gapHeight: {
        height: 20
    },
    modalLowerContainer: {
        // flex: 0.8,
        flexDirection: "column",
        backgroundColor: "white",
        padding: "5%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    modalLowerFilterContainer: {
        // flex: 0.8,
        flexDirection: "column",
        justifyContent: "space-around",
        // backgroundColor: "white",
        padding: "5%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    headingStyle: {
        fontSize: THEME.FONT_SIZE_LARGE,
        fontWeight: "bold"
    },
})