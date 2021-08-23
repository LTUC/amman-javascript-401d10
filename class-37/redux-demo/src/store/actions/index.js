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
