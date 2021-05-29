import React from 'react';
import { Input as ElementInput } from 'react-native-elements';
import inputStyles from './Input.component.style';
import THEME from '../../assets/styles/theme.style';

const Input = (props) => {
    return(
        <ElementInput
            {...props}
            labelStyle={inputStyles.labelStyle}
            placeholderTextColor={THEME.PRIMARY_TEXT_COLOR}
            inputContainerStyle={inputStyles.inputContainerStyle}
            inputStyle={inputStyles.inputStyle}
        />
    );
}
const GeneralInput = (props) =>{
    return(
        <ElementInput
            {...props}
            
        />
    );
}
const Pigeon_Detail_Screen_Input = (props) => {
    return(
        <ElementInput
            {...props}
            inputContainerStyle={inputStyles.P_D_SinputContainerStyle}
            inputStyle={inputStyles.P_D_SinputStyle}  
        />
    );
}
export { Input, GeneralInput, Pigeon_Detail_Screen_Input };
