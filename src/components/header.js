import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.name}</Text>
    </View>
    )};

const styles = {
    viewStyle: {
        backgroundColor: '#a8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 6 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
}
export default Header;
