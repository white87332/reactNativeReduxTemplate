import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from "react-native-router-flux";
import PropTypes from 'prop-types';
import { styles } from './style.js';

function mapStateToProps()
{
    return {};
}

function mapDispatchToProps()
{
    return {};
}

class Index extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    componentDidMount()
    {
        setTimeout(() => {
            Actions.posts();
        }, 2000);
    }

    render()
    {
        return (
            <View style={styles.component}>
                <Text>index</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
