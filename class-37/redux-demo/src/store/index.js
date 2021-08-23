import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import people from './reducers/people';
import count from './reducers/count';

const reducers = combineReducers({ people, count });

export default createStore(reducers, composeWithDevTools());
