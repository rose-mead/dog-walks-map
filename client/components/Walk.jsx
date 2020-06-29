import React from 'react'
import MapWalk from './MapWalk'
import { getWalks, getWalk } from '../apis/api'
import { Link } from 'react-router-dom'





class Walk extends React.Component {

  state = {
    walks: [],
    walk: {}
  }

  componentDidMount() {
    getWalk(this.props.match.params.id)
      .then(walk => {
        this.setState({
          walk: walk
        })
      })

  }

  findWalk = () => {
    return this.props.walks.filter(walk => walk.id == this.props.match.params.id)
  }

  // id = this.props.match.params.id

  // componentDidMount() {
  //   getWalks()
  //     .then(walks => {
  //       this.setState({ walks: walks })

  //       return walks.find(walk => {
  //         return walk.id == this.id
  //       })
  //     })
  //     .then(walk => {
  //       this.setState({ walk: walk })
  //     })
  // }


  // Could access the current walk from props - but it wasn't loading
  // console.log(this.props.walks.filter(walk => walk.id == this.props.match.params.id))

  render() {
    return <div className='walk'>
      <MapWalk walk={this.state.walk}/>

      <ul>
        <h3>{this.state.walk.name}</h3>
        <li>{this.state.walk.description}</li>
        <li>{this.state.walk.location}</li>
        <li>{this.state.walk.time}</li>

      </ul>
      <Link to={'/'}>Home</Link>
    </div>
  }
}


  export default Walk



