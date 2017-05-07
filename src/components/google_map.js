import React, {Component} from 'react'

//add a third party api witch we already add in index.html
class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat:this.props.lat,
        lng:this.props.lon
      }
    })
  }
  render(){
    //this.ref.map
    return <div ref="map"/>;
  }
}

export default GoogleMap;
