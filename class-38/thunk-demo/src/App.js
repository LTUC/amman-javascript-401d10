import logo from './logo.svg';
import './App.css';
import { getRemoteData } from './store/actions/async-actions';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <button onClick={()=>dispatch(getRemoteData())}>Get Digimons</button>
     <section>
     {
       state.map(d=>{
         return(
           <div>
             <h2>{d.name}</h2>
             <img src={d.img} alt="" />
             <p>{d.level}</p>
           </div>
         )
       })
     }

     </section>
    
    </div>
  );
}

export default App;