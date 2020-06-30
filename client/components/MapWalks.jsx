import React from 'react'
import request from 'superagent'
import { Link, Router, Route, Redirect } from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import Walk from './walk'
import { connect } from 'react-redux'
import { selectedWalk } from '../actions/action'

class MapWalks extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: { walk: '' },
  }


  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  
    this.props.dispatch(selectedWalk(props.walk))
  }

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





function mapStateToProps(globalState) {
  return {
    walks: globalState.walks,
    selectedWalk: globalState.selectedWalk
  }
}

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKX1hkWU08ESdis7RSdoDpGi9LJXSQyjE'
  })
  (connect(mapStateToProps)(MapWalks));
