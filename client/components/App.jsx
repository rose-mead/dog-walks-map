import React from 'react'
import Walk from './Walk'
import data from '../../server/public/data.json'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Hero from './hero'
import Header from './header'
import { getWalks } from '../apis/api'


class App extends React.Component {

  state = {
    walks: []
  }

  componentDidMount() {
    getWalks()
    .then(walks => {
      this.setState({walks:walks})
    })
  }
 

  render() {
    return (
      <Router>
        <div className='wrapper'>
            <Header/>

            <Route exact path='/' component={() => (<Home walks={this.state.walks} />)}/>
            
            {/* <Route path='/walk/:id' component={Walk}/> */}
            {/* <Route path='/walk/:id' component={Walk}/> */}
            <Route path='/walk/:id' render={props => (<Walk walks={this.state.walks} {...props} />)} />
        </div>
      </Router>
    )
  }
}

export default App
