const initialState = [];

const peopleReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PERSON':
      return [...state, payload];
    case 'REMOVE_PERSON':
      return state.filter((p) => p !== payload);
    default:
      return state;
  }
};

export default peopleReducer;
