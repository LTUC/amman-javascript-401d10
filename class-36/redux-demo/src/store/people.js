const initialState = {
  people: [],
  count: 0,
};

const peopleReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PERSON':
      const people = [...state.people, payload];
      const count = state.count + 1;
      return { people, count };
    case 'REMOVE_PERSON':
      return {
        people: state.people.filter((p) => p !== payload),
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const addPerson = (name) => {
  return {
    type: 'ADD_PERSON',
    payload: name,
  };
};

export const removePerson = (name) => {
  return {
    type: 'REMOVE_PERSON',
    payload: name,
  };
};

export default peopleReducer;
