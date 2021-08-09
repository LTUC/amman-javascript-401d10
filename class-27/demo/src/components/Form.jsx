import React from 'react'

function Form(props) {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const raw = await fetch('https://swapi.dev/api/people')
      const data = await raw.json();
      const result = data.results.reduce((list,person)=>{
        list.push({name:person.name,url:person.url});
        return list
      },[]);
      props.handler(result)

    } catch (e) {
      
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <button data-testid="mybtn">{props.prompt}</button>
    </form>
  )
}

export default Form
