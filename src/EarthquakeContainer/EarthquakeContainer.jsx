import React, {Component} from 'react';


class EarthquakeContainer extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        const earthquakeList = this.props.earthquakes.map((earthquake, i) => {
            return (
                <div id = "info" key = {i}>
                    <p>M {earthquake.properties.mag} - {earthquake.properties.place} / </p>
                </div>
            )
        })
        return (
            <div>
                {earthquakeList}
            </div>
        )
    }
}



export default EarthquakeContainer;