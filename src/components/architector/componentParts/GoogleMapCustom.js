import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
} from 'react-google-maps';

const GoogleMapCustom = withGoogleMap(({ coords }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: coords.lat, lng: coords.lng }}
  >
    <Marker
      position={{ lat: coords.lat, lng: coords.lng }}
    />
  </GoogleMap>
));

export default GoogleMapCustom;
