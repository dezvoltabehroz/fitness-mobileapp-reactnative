import { TouchableOpacity } from 'react-native';

const NavigationHeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => props.navigation.goBack()}>
            <Icon.AntDesign name="left" size={25} color="lightgray" />
        </TouchableOpacity>
    );
};

export default NavigationHeaderButton;
