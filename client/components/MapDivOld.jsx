import React from 'react'
import request from 'superagent'
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapDiv extends React.Component {
    state = {}

    // initMap = () => {
    //     var lakeKainui = {lat:-37.677, lng:175.236}
    //     var map = new google.maps.Map(
    //         document.getElementById('map'), {zoom: 4, center: lakeKainui});
    //     var marker = new google.maps.Marker({position: lakeKainui, map: map});
    // }

    // getMap = () => {
    //     request.get("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap")
    // }


    render(){
        return <>
        <h3>This is a map</h3>
        <div className="map">
        <script async defer
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
        
            {/* {this.initMap()} */}
        </div>
        </>
    }
}

export default MapDiv


// AIzaSyAKX1hkWU08ESdis7RSdoDpGi9LJXSQyjE


// https://maps.googleapis.com/maps/api/js?key=AIzaSyAKX1hkWU08ESdis7RSdoDpGi9LJXSQyjE&callback=initMap