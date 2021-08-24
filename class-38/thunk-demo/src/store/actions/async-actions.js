// Thunk will give us the ability to return a function that will have access to dispach
export const getRemoteData = () => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log('STATE?', state);
    const raw = await fetch('https://digimon-api.vercel.app/api/digimon');
    console.log('Response', raw);
    const results = await raw.json();
    console.log('DATA', results);
    dispatch(getAction(results));
  };
};

export const getAction = (payload) => {
  return {
    type: 'GET',
    payload,
  };
};
