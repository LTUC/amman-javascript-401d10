import React from 'react'

function People(props) {
  
  return (
    <ul>
      {
        props.people.map(person => {
          return(
            <li key={person.name}>
              <a href={person.url} target="_blank">{person.name}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default People
