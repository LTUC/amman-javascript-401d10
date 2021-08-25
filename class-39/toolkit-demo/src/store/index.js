import { configureStore, combineReducers } from '@reduxjs/toolkit';

import pokemonReducer from './pokemon';
const reducers = combineReducers({ pokemon: pokemonReducer });

export default configureStore({ reducer: reducers });
