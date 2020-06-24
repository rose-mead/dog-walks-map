import React from 'react'
import request from 'superagent'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class MapDiv extends React.Component {
    state = {
        locations: [{lat:-37.980, lng:175.311},{lat:-37.769, lng:175.356}, {lat:-37.677, lng:175.236}]
    }
    // -37.980780, 175.311337 yarndleys
    // -37.769881, 175.356829 newstead
    // {lat:-37.677, lng:175.236}  kainui

    displayMarkers = () => {
        return this.state.locations.map((walk, index) => {
          return <Marker key={index} id={index} position={{
           lat: walk.lat,
           lng: walk.lng
         }}
         onClick={() => console.log("You clicked me!")} />
        })

      }
    

    render() {
        return (
            <Map className="mapStyles"
                google={this.props.google}
                zoom={9}
                style={this.mapStyles}
                initialCenter={{lat:-37.677, lng:175.236}}
                >
                    {/* <Marker position={{lat:-37.980, lng:175.311}} />
                    <Marker position={{lat:-37.769, lng:175.356}} />
                    <Marker position={{lat:-37.677, lng:175.236}} /> */}
                    {this.displayMarkers()}
                </Map>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKX1hkWU08ESdis7RSdoDpGi9LJXSQyjE'
})(MapDiv);

