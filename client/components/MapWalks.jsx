import React from 'react'
import request from 'superagent'
import { Link, Router, Route, Redirect } from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import Walk from './walk'

class MapWalks extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: { walk: '' },
    place: {
      description: "An easy lake loop just north of Hamilton with loads of variety for dogs. This track meanders through stands of native trees and grassed areas. A range of different maimais are dotted around the lake – from ramshackle to quite impressive!",
      difficulty: "easy",
      id: 1,
      location: "Horsham Downs",
      name: "Lake Kainui",
      time: "60 min"
    }
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
        activeMarker: null,
      })
    }
  };

  displayMarkers = () => {
    return this.props.walks.map((walk, index) => {
      return <Marker key={index} id={index} onClick={this.onMarkerClick} walk={walk}
        position={{
          lat: walk.coordinates.lat,
          lng: walk.coordinates.lng
        }} />
    })
  }

 

  mapStyles = {
    width: '80%',
    height: '80vh',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  render() {
    { console.log('Render') }

    return (
      <div className="map-div">
    <Link to={`/walk/1`}>View details</Link>


        <Map
          // className="mapStyles"
          zoom={9}
          google={this.props.google}
          // onClick={this.onMapClicked}
          style={this.mapStyles}
          initialCenter={{ lat: -37.677, lng: 175.236 }}>
          {/* // center={this.state.place} */}

          {this.displayMarkers()}

          <InfoWindow 
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.walk.name}</h3>
              <p>{this.state.selectedPlace.walk.location}</p>
              <p>{this.state.selectedPlace.walk.time}</p>

              {/* <Link to={`/walk/${this.state.selectedPlace.walk.id}`}>View details</Link> */}
              <a href={`/#/walk/${this.state.selectedPlace.walk.id}`}>View details</a>
            </div>
          </InfoWindow>
        </Map>

      </div>
    )
  }
}




export default GoogleApiWrapper({
  apiKey: 'AIzaSyAKX1hkWU08ESdis7RSdoDpGi9LJXSQyjE'
})(MapWalks);

