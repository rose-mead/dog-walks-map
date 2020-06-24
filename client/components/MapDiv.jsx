import React from 'react'
import request from 'superagent'
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapDiv extends React.Component {
    state = {}

    render() {
        return (
            <Map className="mapStyles"
                google={this.props.google}
                zoom={9}
                style={this.mapStyles}
                initialCenter={{lat:-37.677, lng:175.236}}
            />
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKX1hkWU08ESdis7RSdoDpGi9LJXSQyjE'
})(MapDiv);

