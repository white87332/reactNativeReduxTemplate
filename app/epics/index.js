import { combineEpics } from 'redux-observable';
import postEpic from './postEpic';

const epics = combineEpics(
    ...postEpic
);

export default epics;
