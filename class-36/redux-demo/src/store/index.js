import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import peopleReducer from './people';
const reducers = combineReducers({ people: peopleReducer });
const store = () => {
  return createStore(reducers, composeWithDevTools());
  // return createStore(peopleReducer, composeWithDevTools());
};

export default store();
