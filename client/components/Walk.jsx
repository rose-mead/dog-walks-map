import React from 'react'
import MapWalk from './MapWalk'
import { getWalks, getWalk } from '../apis/api'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Walk extends React.Component {

  state = {
    walks: [],
    walk: {},
    exit: false
  }

  handleClick = () => {
    this.setState({exit: true})
  }


  render() {
    return (
      <div className='content-container'>
        <div className='content'>
            <button className='exit' onClick={this.handleClick}>X</button>

          <h3>{this.props.walk.name}</h3>
          <p>{this.props.walk.location}</p>

          <div className='walk-details'>
            <p>Time: {this.props.walk.time}</p>
            <p>Difficulty: {this.props.walk.difficulty}</p>
          </div>
          <p>{this.props.walk.description}</p>

          <Link to={'/'}>Home</Link>
          {this.state.exit && <Redirect to='/'/>}
        </div>
        
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




