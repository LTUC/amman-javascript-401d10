import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [];
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    add(state, action) {
      console.log('STATE?', current(state));
      // createSlice will not mutate the state when using mutable structures
      state.push(action.payload); // {name:"test"}
    },
    remove(state, action) {
      return state.filter((p) => p.name !== action.payload);
    },
    addAll(state, action) {
      console.log(current(state));
      // return state.concat(action.payload);
      return action.payload;
    },
  },
});

export const { add, remove, addAll } = pokemonSlice.actions;
export const getAll = () => async (dispatch) => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const resData = await res.json();
  // loop throw the results and dispatch add
  console.log(resData.results);
  dispatch(addAll(resData.results));
};
export default pokemonSlice.reducer;
