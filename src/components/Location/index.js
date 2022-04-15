import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyB2Lc5C1vrQBenIYxP5lzrQ6adKhub4oK8");

export class Location extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey:
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyB2Lc5C1vrQBenIYxP5lzrQ6adKhub4oK8",
})(Location);
