import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import configureStore from '../store/configureStore';
import Index from './index/index';
import Posts from './posts/posts';

const store = configureStore();

export default class App extends Component
{
    render()
    {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="index" component={Index} initial={true} />
                        <Scene key="posts" component={Posts} />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
