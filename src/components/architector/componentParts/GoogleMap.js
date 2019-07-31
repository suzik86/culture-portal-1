import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps';


function GoogleMap() {

  const Map = withGoogleMap(props => {
    <GoogleMap />
  });

  return (
    <div>
      <Map
        containerElement={
          <div style={{ height: '100%' }}></div>
        }
        mapElement={
          <div style={{ height: '100%' }}></div>
        }
      />
    </div>

  )
}

export default GoogleMap;
