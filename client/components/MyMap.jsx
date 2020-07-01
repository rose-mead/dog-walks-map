import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectedWalk } from '../actions/action'


const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: -37.677,
  lng: 175.236,
}

const infoWindowStyle = {
  background: `white`,
  padding: 15,
  textAlign: 'center',
  padding: '10px',
}

class MyMap extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: { walk: '' },
    markers: [],
    marker: {}
  }

  onLoad = marker => {
    console.log('marker: ', marker)
    this.setState({ marker: marker })
  }

  onMarkerClick = (walk, props, e) => {
    this.setState({
      selectedPlace: walk,
      // activeMarker: marker,
      showingInfoWindow: true
    })



    this.props.dispatch(selectedWalk(walk))
    // this.props.dispatch(pageView('profile'))

  }


  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
      // this.props.dispatch(pageView('home'))
    }
  }

  currentPosition = () => {
    return {
      lat: parseFloat(this.props.selectedWalk.coordinates.lat),
      lng: parseFloat(this.props.selectedWalk.coordinates.lng),
    }
  }

  displayMarkers = () => {
    return this.props.walks.map((walk, index) => {
      return <Marker key={index} id={index} onLoad={this.onLoad} onClick={() => this.onMarkerClick(walk)} walk={walk}
        position={walk.coordinates} />
    })
  }

  displayInfoWindow = () => {
    return <InfoWindow
      position={this.currentPosition()}
      visible={this.state.showingInfoWindow}
      selectedWalk={this.props.selectedWalk.name}
    >
      <div style={infoWindowStyle}>
        <h3>{this.props.selectedWalk.name}</h3>
        <p>{this.props.selectedWalk.location}</p>
        <Link to={`/walk/${this.props.selectedWalk.id}`}>View details</Link>
      </div>
    </InfoWindow>
  }

  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAKX1hkWU08ESdis7RSdoDpGi9LJXSQyjE"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={this.onMapClicked}
        >

          { /* Child components, such as markers, info windows, etc. */}

          {this.props.walks && this.displayMarkers()}

          {this.state.showingInfoWindow && this.displayInfoWindow()}

          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

// export default React.memo(MyMap)
function mapStateToProps(globalState) {
  return {
    walks: globalState.walks,
    selectedWalk: globalState.selectedWalk,
    pageView: globalState.pageView
  }
}

export default React.memo
  (connect(mapStateToProps)(MyMap))