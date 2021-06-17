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
        width: 120,
        elevation: 2,
        borderRadius: 0.0000000000001,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.BUTTON_COLOR
    },
    btnBrownPText: {
        fontSize: THEME.FONT_SIZE_MEDIUM,
        color: THEME.COLOR_WHITE,
    },
    btnLoginPrimary: {
        height: 54,
        width: 120,
        // elevation: 1,
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
});