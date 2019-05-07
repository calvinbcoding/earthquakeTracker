import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const AnyReactComponent = (Marker) => <div>{text}</div>;

class MapContainer extends Component {
  
 render() {
  const {google} = this.props;
  const earthquakeList = this.props.earthquakes.map((earthquake, i) => {
    console.log(earthquake.geometry.coordinates[0])
    return (
      <Marker 
        title = {earthquake.properties.place}
        position = {{lng: earthquake.geometry.coordinates[0], lat: earthquake.geometry.coordinates[1]}}
        icon = {{
          url: 'https://cdn3.iconfinder.com/data/icons/family-14/100/family-06-512.png',
          anchor: new google.maps.Point(32,32),
          scaledSize: new google.maps.Size(64,64)
        }}
      />
    )
  })
   return (
        <Map style= {{width: "650px", height: "400px"}} google={this.props.google} zoom={4}>
          {earthquakeList}
        </Map>
   );
 }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
  })(MapContainer)