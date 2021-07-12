import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import THEME from '../../assets/styles/theme.style';

const Loader = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="small" color={THEME.PRIMARY_BACKGROUND_COLOR} />
        </View>
    );
}
export default Loader;