import { useReducer } from 'react';
// import {initialState,personsReducer} from 'reducer.js'
const initialState = {
  names: [],
  count: 0,
};

function personsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_PERSON':
      const count = state.count + 1;
      const names = [...state.names, payload.name];
      return { count, names };
    case 'REMOVE_PERSON':
      const newCount = state.count - 1;
      const newNames = state.names.filter((n) => n !== payload.name);
      return { count: newCount, names: newNames };
    default:
      return state;
  }
}

// actions should be exported from actions.js
// import {addAction,removeAction} from 'actions.js'
function addAction(name) {
  return {
    type: 'ADD_PERSON',
    payload: { name },
  };
}

function removeAction(name) {
  return {
    type: 'REMOVE_PERSON',
    payload: { name },
  };
}

function App() {
  const [state, dispatch] = useReducer(personsReducer, initialState);
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.personName.value
    dispatch(addAction(name))
    e.target.reset()
  }
 
  return (
    <>
      <h1>Reduer Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="personName" />
        <button>Add person</button>
      </form>
      <p>We have {state.count} people!</p>
      <ul>
        {state.names.map((name) => {
          return <li key={name} onClick={()=>dispatch(removeAction(name))}>{name} </li>;
        })}
      </ul>
    </>
  );
}

export default App;
