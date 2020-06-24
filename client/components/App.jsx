import React from 'react'
import WalksList from './WalksList'
import Walk from './Walk'
import data from '../../server/public/data.json'
import MapDiv from './MapDiv'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <>
        <h1>Dog walks in the Waikato</h1>
        <div className='parent-container'>
          <WalksList data={data} />

          <Route path='/walk/:id' component={Walk}/>
          {/* <Route path='/walk/:id' component={() => (<Walk data={data} />)} /> */}
        </div>
        <MapDiv/>
      </>
    </Router>


  )
}

export default App
