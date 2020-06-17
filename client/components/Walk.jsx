import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function Walk(props) {
  return <div>
    <ul> {
        props.data.map(walk => {
            return <li><Link to='/walk'>{walk.name}</Link></li>
            // return <a href={walk.name}>{walk.name}</a>
        })
    }
    </ul>
  </div>

  
}

export default Walk
