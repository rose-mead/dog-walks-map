import React from 'react'
import Walk from './Walk'
import { connect } from 'react-redux'
import { fetchWalks } from '../actions/action'
import WalksList from './WalksList'
import MyMap from './MyMap'
import Search from './Search'
import Header from './Header'

class App extends React.Component {

  state = {
    walks: []
  }

  componentDidMount() {
      this.props.dispatch(fetchWalks())
  }

  render() {
    return (
        <div className='wrapper'>
            <Header/>
            <MyMap/>

            {this.props.pageView == 'profile' && <Walk/>}
            {this.props.pageView == 'all-walks' && <WalksList/>}
            {this.props.searchVisible && <Search/>}

        </div>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    pageView: globalState.pageView,
    searchVisible: globalState.searchVisible
  }
}

export default connect(mapStateToProps)(App)
