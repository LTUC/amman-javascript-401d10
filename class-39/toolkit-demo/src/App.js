import './App.css';
import { useEffect } from 'react';
import { add, remove, getAll } from './store/pokemon';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const state = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  function handleSubmit(e){
    e.preventDefault();
    dispatch(add({name:e.target.name.value}))
  }
  return (
    <section className="App">
      {state.map((p) => (
        <div key={p.name} onClick={()=>dispatch(remove(p.name))}>{p.name}</div>
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button>Add Pokemon</button>
      </form>
    </section>
  );
}

export default App;
