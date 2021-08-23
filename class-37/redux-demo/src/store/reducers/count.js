const initialState = 0;
const countReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PERSON':
      return state + 1;
    case 'REMOVE_PERSON':
      return state - 1;
    default:
      return state;
  }
};

export default countReducer;
