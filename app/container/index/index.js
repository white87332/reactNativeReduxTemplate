import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from "react-native-router-flux";
import TabNavigator from 'react-native-tab-navigator';
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
        this.state = {
            selectedTab: 'home'
        };
    }

    componentDidMount()
    {
        // setTimeout(() => {
        //     Actions.posts();
        // }, 2000);
    }

    render()
    {
        return (
            <View style={styles.container}>
                <TabNavigator tabBarStyle={{ backgroundColor:'white' }} >
                      <TabNavigator.Item
                       title="主页"
                       selected={this.state.selectedTab === 'home'}
                    //    renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
                    //    renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
                       onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Text>123123123123123123123123123123123123123</Text>
                   </TabNavigator.Item>
                   <TabNavigator.Item
                       title="其他"
                       selected={this.state.selectedTab === 'other'}
                    //    renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
                    //    renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
                       onPress={() => this.setState({ selectedTab: 'other' })}>
                       <Text>456</Text>
                   </TabNavigator.Item>
               </TabNavigator>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
