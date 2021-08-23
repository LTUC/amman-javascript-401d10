import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removePerson} from '../store/actions'
function Status() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {
          state.people.map(p=><li key={p} onClick={()=>dispatch(removePerson(p))}>{p}</li>)
        }
      </ul>
      <p>THE COUNT is {state.count}</p>
    </div>
  )
}
export default Status
