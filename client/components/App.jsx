import React from 'react'
import Walk from './Walk'
import data from '../../server/public/data.json'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Hero from './hero'
import Header from './header'

class App extends React.Component {
 

  render() {
    return (
      <Router>
        <div className='wrapper'>
            <Header/>

            <Route exact path='/' component={Home}/>
            
            <Route path='/walk/:id' component={Walk}/>
            {/* <Route path='/walk/:id' component={() => (<Walk data={data} />)} /> */}
        </div>
      </Router>
    )
  }
}

export default App
