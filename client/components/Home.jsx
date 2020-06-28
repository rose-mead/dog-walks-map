import React from 'react'
import Header from './Header'
import MapWalks from './MapWalks'
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
            <MapWalks walks={this.state.walks}/>

            <WalksList data={this.state.walks}/>
            </div>
        )
    }
}

export default Home


