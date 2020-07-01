import React from 'react'
import MapWalk from './MapWalk'
import { getWalks, getWalk } from '../apis/api'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Walk extends React.Component {

  state = {
    walks: [],
    walk: {}
  }


  render() {
    return (
      <div className='walk'>
        <h3>{this.props.walk.name}</h3>
        <p>{this.props.walk.location}</p>

        <div className='walk-details'>
          <p>Time: {this.props.walk.time}</p>
          <p>Difficulty: {this.props.walk.difficulty}</p>
        </div>
        <p>{this.props.walk.description}</p>

        <Link to={'/'}>Home</Link>
      </div>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    walk: globalState.selectedWalk,
  }
}

export default connect(mapStateToProps)(Walk)




