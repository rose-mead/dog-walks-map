import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function WalksList(props) {
  return <div className='walks-list'>
    <ul> {
        props.data.map(walk => {
            return <li key={walk.id}><Link to={`/walk/${walk.id}`}>{walk.name}</Link></li>
            // return <a href={walk.name}>{walk.name}</a>
        })
    }
    </ul>
  </div>

  
}

export default WalksList
