import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

const GoogleMapCustom = withScriptjs(withGoogleMap(({ coords }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: coords.lat, lng: coords.lng }}
  >
    <Marker
      position={{ lat: coords.lat, lng: coords.lng }}
    />
  </GoogleMap>
)));

export default GoogleMapCustom;
