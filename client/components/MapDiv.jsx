import React from 'react'
import request from 'superagent'
import { Link, Router} from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'

class MapDiv extends React.Component {

  // getLocations = () => {
  //   return this.props.walks.map(walk => {
  //     return walk.coordinates
  //   })

  // }

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {walk:''},
        // walks: this.getLocations(),
        // locations: [{ lat: -37.980, lng: 175.311 }, { lat: -37.769, lng: 175.356 }, { lat: -37.677, lng: 175.236 }],
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
          {/* // center={this.state.place} */}

        {this.displayMarkers()}
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.walk.name}</h3>
               <p>{this.state.selectedPlace.walk.location}</p>
              <p>{this.state.selectedPlace.walk.time}</p>
              <a href='/#/walk/1'>View details</a>
              {/* <Link to={`/walk/${this.state.place.id}`}>View details</Link> */}
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

