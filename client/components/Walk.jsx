import React from 'react'
import data from '../../server/public/data.json'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

function Walk(props) {
  const id = props.match.params.id

  const currentWalk = data.find(walk => walk.id == id)
  return <div className='walk'>
    <ul>
        <h3>{currentWalk.name}</h3>
        <li>{currentWalk.location}</li>
        <li>{currentWalk.difficulty}</li>
        <li>{currentWalk.time}</li>
        <li>{currentWalk.description}</li>
    </ul>
        
  </div>

  
}

export default Walk



