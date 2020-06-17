import React from 'react'
import WalksList from './WalksList'
import data from '../../server/public/data.json'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Dog walks in the Waikato</h1>
        <WalksList data={data} />

        <Route path='/walk' component={Walk}/>
      </div>
    </Router>


  )
}

export default App
