import React, { Component } from 'react';
import MapContainer from './MapContainer/MapContainer';
import EarthquakeContainer from './EarthquakeContainer/EarthquakeContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
        earthquakes: []
    }
  }
  componentDidMount(){
    this.searchEarthquakes({search: ""});
  }
  searchEarthquakes = async (formData) => {
    const searchURL = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson`
    const result = await fetch(searchURL);
    const parsedResult = await result.json();
    console.log(parsedResult.features);
    this.setState({
        earthquakes: parsedResult.features
  })
  }
  render() {
    return (
      <div className="app">
        <div className="mapContainer">
         <MapContainer earthquakes = {this.state.earthquakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past month: </h1>
          <EarthquakeContainer earthquakes = {this.state.earthquakes}/>
        </div>
      </div>
    );
  }
}

export default App;
