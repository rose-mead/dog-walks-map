import React from 'react'
import Header from './Header'
import MapWalks from './MapWalks'
import WalksList from './WalksList'
import Hero from './hero'



class Home extends React.Component {
    

    render(){
        return (<div className='page-main'>
            <Hero/>
            <MapWalks />

            <WalksList />
            </div>
        )
    }
}

export default Home


