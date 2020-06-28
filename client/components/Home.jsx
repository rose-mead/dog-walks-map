import React from 'react'
import Header from './Header'
import MapDiv from './MapDiv'
import WalksList from './WalksList'
import { getWalks } from '../apis/api'
import Hero from './hero'



class Home extends React.Component {
    state = {
        walks: []
      }
    
      componentDidMount() {
        getWalks()
        .then(walks => {
          this.setState({walks:walks})
        })
      }

    render(){
        return (<div className='page-main'>
            <Hero/>
            <MapDiv walks={this.state.walks}/>

            <WalksList data={this.state.walks}/>
            </div>
        )
    }
}

export default Home


