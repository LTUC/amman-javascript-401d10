import React from 'react'
import {useDispatch} from 'react-redux';
import {addPerson} from '../store/actions/'
function People() {
const dispatch = useDispatch();
function handleSubmit(e){
  e.preventDefault()
  dispatch(addPerson(e.target.name.value))
  e.target.reset()
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"/>
      <button>Add</button>
      </form>    
    </div>
  )
}

export default People
