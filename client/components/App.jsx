import React from 'react'
import Walk from './Walk'
import data from '../../server/public/data.json'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Hero from './hero'
import Header from './header'
import { getWalks } from '../apis/api'
import { connect } from 'react-redux'
import { saveWalks } from '../actions/action'


class App extends React.Component {

  state = {
    walks: []
  }

  componentDidMount() {
    getWalks()
    .then(walks => {
      this.setState({walks:walks})
      this.props.dispatch(saveWalks(walks))
    })
  }
 

  render() {
    return (
      <Router>
        <div className='wrapper'>
            <Header/>

            <Route exact path='/' component={() => (<Home />)}/>
            
            {/* <Route path='/walk/:id' component={Walk}/> */}
            {/* <Route path='/walk/:id' component={Walk}/> */}
            <Route path='/walk/:id' render={props => (<Walk walks={this.state.walks} {...props} />)} />
        </div>
      </Router>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    walks: globalState.walks
  }
}

export default connect(mapStateToProps)(App)
