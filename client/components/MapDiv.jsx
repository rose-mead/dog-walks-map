import React from 'react'
import request from 'superagent'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'

class MapDiv extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        locations: [{ lat: -37.980, lng: 175.311 }, { lat: -37.769, lng: 175.356 }, { lat: -37.677, lng: 175.236 }]
    }


    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

    displayMarkers = () => {
        return this.state.locations.map((walk, index) => {

            return <Marker key={index} id={index} onClick={this.onMarkerClick} name={'Current location'}
                position={{
                    lat: walk.lat,
                    lng: walk.lng
                }} />
        })
    }

    mapStyles = {
      width: '80%',
      height: '80%',
    }

      
  render() {
    return (
      <div className="map-div">
      <Map  
          // className="mapStyles"
          zoom={9}
          google={this.props.google}
          onClick={this.onMapClicked}
          style={this.mapStyles}
          initialCenter={{ lat: -37.677, lng: 175.236 }}>

        {this.displayMarkers()}
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
    )
  }
}

 


export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKX1hkWU08ESdis7RSdoDpGi9LJXSQyjE'
})(MapDiv);

