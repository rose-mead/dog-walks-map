import React from 'react'
import WalksList from './WalksList'
import Walk from './Walk'
import data from '../../server/public/data.json'
import MapDiv from './MapDiv'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
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
        <>
          <h1>Dog walks in the Waikato</h1>
          <div className='parent-container'>
            <WalksList data={this.state.walks} />

            <Route path='/walk/:id' component={Walk}/>
            {/* <Route path='/walk/:id' component={() => (<Walk data={data} />)} /> */}
          </div>
          <MapDiv/>
        </>
      </Router>
    )
  }
}

export default App
