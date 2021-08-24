import { createStore, applyMiddleware } from 'redux';
import digimonReducer from './reducers/digimon-reducer';
import thunk from 'redux-thunk';

export default createStore(digimonReducer, applyMiddleware(thunk));
