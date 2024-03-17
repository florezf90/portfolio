/* eslint-disable no-unused-vars */
import React from "react";
import { GoogleMap, useJsApiLoader, Marker,  } from "@react-google-maps/api";




const containerStyle = {
  width: "99%",
  height: "99%",
  margin: "0 auto",
};

const center = {
  lat: 29.890,
  lng: -97.920,
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // Set the map's zoom level here if needed
    map.setZoom(8);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const options = {
    fullscreenControl: false,
    mapTypeControl: false,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8} // Set the initial zoom level here
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >

      <Marker position={center} 
      title="San Marcos, TX"/>

    </GoogleMap>
  ) : (
    <></>
  );
}

export default MapComponent;
