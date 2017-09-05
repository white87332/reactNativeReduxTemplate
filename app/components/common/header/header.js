import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export default class Header extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text>header999</Text>
            </View>
        );
    }
}
