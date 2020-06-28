import React from 'react'
import data from '../../server/public/data.json'
import MapWalk from './MapWalk'
import { getWalks } from '../apis/api'



import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Walk extends React.Component {

  state = {
    walks: [],
    walk: {id:43}
  }

  id = this.props.match.params.id

  componentDidMount() {
    getWalks()
      .then(walks => {
        this.setState({ walks: walks })

        return walks.find(walk => {
          return walk.id == this.id
        })
      })
      .then(walk => {
        this.setState({ walk: walk })
      })
  }


  // currentWalk = data.find(walk => walk.id == this.id)

  // currentWalk = this.state.walks.find(walk => walk.id == this.id)
  // currentWalk = this.state.walks

  // walksDiv = () => {
  //  return  <h3>{this.state.walks.find(walk => walk.id == this.id).id}</h3>
  // }

  render() {
    return <div className='walk'>
      <ul>
        <h3>{this.state.walk.name}</h3>
        <li>{this.state.walk.description}</li>
        <li>{this.state.walk.location}</li>
        <li>{this.state.walk.time}</li>

      </ul>
      <MapWalk walk={this.state.walk}/>

    </div>

  }
}

export default Walk



