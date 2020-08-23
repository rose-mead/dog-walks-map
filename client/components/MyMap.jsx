import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux'
import { selectedWalk, pageView, searchVisible } from '../actions/action'
import { Link } from 'react-router-dom'


const containerStyle = {
  width: '100%',
  height: '100vh'
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
    marker: {},
  }

  onLoad = marker => {
    // console.log('marker: ', marker)
    this.setState({ marker: marker })
  }

  onMarkerClick = (walk, props, e) => {
    this.setState({
      showingInfoWindow: true
    })
    this.props.dispatch(selectedWalk(walk))
  }

  handleCloseClick = () => {
    this.setState({
      showingInfoWindow: false
    })
  }


  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
      })
      this.props.dispatch(pageView('home'))
      this.props.dispatch(searchVisible(false))
    }
    this.props.dispatch(pageView('home'))
    this.props.dispatch(searchVisible(false))


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
      onCloseClick={this.handleCloseClick}
    >
      <div style={infoWindowStyle}>
        <h3>{this.props.selectedWalk.name}</h3>
        <p>{this.props.selectedWalk.location}</p>
        <button onClick={() => this.props.dispatch(pageView('profile'))}>View details</button>
        <Link to={`/walk/${this.props.selectedWalk.id}`}>View details</Link>
      </div>
    </InfoWindow>
  }

  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyDnFQNd9Wr-4gMgrinYhXkxkJF5DyvvwrA">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={this.onMapClicked}
        >

          { /* Child components, such as , info windows, etc. */}

          {this.props.walks && this.displayMarkers()}
          {this.state.showingInfoWindow && this.displayInfoWindow()}
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
    searchedWalk: globalState.searchedWalk,
  }
}

export default React.memo
  (connect(mapStateToProps)(MyMap))