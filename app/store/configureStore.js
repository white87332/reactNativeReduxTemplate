import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const finalCreateStore = compose(
    applyMiddleware(epicMiddleware)
)(createStore);

export default function configureStore(initialState)
{
    const store = finalCreateStore(reducer, initialState);
    return store;
}
