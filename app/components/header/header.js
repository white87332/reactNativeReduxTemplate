import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style.js';

class Header extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <View style={styles.component}>
                <Text>header999</Text>
            </View>
        );
    }
}

export default Header;
