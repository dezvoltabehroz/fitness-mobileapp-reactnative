import { StyleSheet, Dimensions } from 'react-native';
import THEME from '../../assets/styles/theme.style';

const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    btnPrimary: {
        height: 54,
        width: '100%',
        elevation: 2,
        borderRadius: 0.0000000000001,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.BUTTON_COLOR
    },
    btnPrimaryText: {
        fontSize: THEME.FONT_SIZE_MEDIUM,
        color: THEME.COLOR_BLACK,
    },
    btnBrownPrimary: {
        height: 54,
        paddingHorizontal: "5%",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544b4c',
    },
    btnBrownText: {
        textAlign: "center",
        paddingHorizontal: "5%",
        fontSize: THEME.FONT_SIZE_MEDIUM,
        color: THEME.COLOR_WHITE,
    },
    btnLoginPrimary: {
        height: 54,
        width: 120,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.BUTTON_COLOR
    },
    btnLoginText: {
        marginRight: 5,
        fontSize: THEME.FONT_SIZE_MEDIUM,
        color: THEME.COLOR_BLACK,
    },
    btnSlimPrimary: {
        height: 45,
        paddingHorizontal: "10%",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544b4c',
    },
    btnSlimText: {
        marginRight: 5,
        fontSize: THEME.FONT_SIZE_MEDIUM,
        color: THEME.COLOR_WHITE,
    },
    btnOutlinePrimary: {
        height: 54,
        width: 120,
        borderColor: THEME.PRIMARY_BACKGROUND_COLOR,
        borderWidth: 2,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent"
    },
    btnOutlineText: {
        marginRight: 5,
        fontSize: THEME.FONT_SIZE_MEDIUM,
        color: THEME.PRIMARY_BACKGROUND_COLOR,
    },
});