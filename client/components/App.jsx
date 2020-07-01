import React from 'react'
import Walk from './Walk'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Hero from './hero'
import Header from './header'
import { getWalks } from '../apis/api'
import { connect } from 'react-redux'
import { fetchWalks } from '../actions/action'
import MapWalks from './MapWalks'
import WalksList from './WalksList'
import MyMap from './MyMap'


class App extends React.Component {

  state = {
    walks: []
  }

  componentDidMount() {
    // getWalks()
    // .then(walks => {
    //   this.setState({walks:walks})
      this.props.dispatch(fetchWalks())
    // })

  }

  render() {
    return (
      <Router>
        <div className='wrapper'>
            <Header/>
            <Hero/>
            {/* <MyMap/> */}
            {/* <MapWalks /> */}
            {this.props.pageView == 'profile' ? <Walk/> : <WalksList/>}

            <Route path='/walk/mymap' component={MyMap} />

            {/* <Route exact path='/' component={() => (<Home />)}/> */}
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
    walks: globalState.walks,
    pageView: globalState.pageView,
  }
}

export default connect(mapStateToProps)(App)
