import React from 'react';
import { Input as ElementInput } from 'react-native-elements';
import themeStyle from '../../assets/styles/theme.style';
import inputStyles from './style';
import styles from './Input.component.style';

const MessageTextInput = (props) => {
    return (
        <ElementInput
            {...props}
             labelStyle={styles.labelStyle}
            style={{ textAlignVertical: 'top' }}
            numberOfLines={4}
            multiline={true}
            placeholderTextColor={themeStyle.PRIMARY_TEXT_COLOR}
            inputContainerStyle={inputStyles.messageInputContainerStyle}
            inputStyle={inputStyles.messageinputStyle}
        />
    );
}
export default MessageTextInput;