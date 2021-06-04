import { StyleSheet } from 'react-native';
import THEME from '../../assets/styles/theme.style';

export default StyleSheet.create({
    inputContainerStyle: {
        height: 45,
        borderBottomWidth: 0,
        marginVertical: 3,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        elevation: 2,
        // marginHorizontal: 15
    },
    labelStyle: {
        fontSize: 12,
        color: "#e0b92e",
        fontFamily:'notoserif',
        height: 25
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: THEME.PRIMARY_TEXT_COLOR,
        fontSize: 14,

    },
    P_D_SinputContainerStyle: {
        paddingLeft: 0,
        marginHorizontal: 0,
        height: 27,
        borderBottomWidth: 0,
        marginVertical: 0,
        backgroundColor: '#ffffff',
    },
    P_D_SinputStyle: {
        flex: 1,
        marginLeft: 0,
        color: THEME.PRIMARY_TEXT_COLOR,
        fontSize: 16,
    }
}
);
