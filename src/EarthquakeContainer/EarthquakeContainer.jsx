import React, {Component} from 'react';


class EarthquakeContainer extends Component{
    constructor(){
        super();
        this.state = {
        
    }
}
  
     timeConverter(UNIX_timestamp){
        let a = new Date(UNIX_timestamp);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }
      //console.log(timeConverter(1556103414100));
    
    
    render(){
        const earthquakeList = this.props.earthquakes.map((earthquake, i) => {
            const formattedTime = this.timeConverter(earthquake.properties.time);
            console.log(formattedTime);
            return (
                <div id = "info" key = {i}>
                    <p>M {earthquake.properties.mag} - {earthquake.properties.place} / {formattedTime}</p>
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