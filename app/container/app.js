import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import configureStore from '../store/configureStore';
import Index from './index/index';
import Posts from './posts/posts';

const store = configureStore();

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="index" component={Index} />
                        <Scene key="posts" component={Posts} initial />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
