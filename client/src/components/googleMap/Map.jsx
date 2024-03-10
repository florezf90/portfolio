import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
  lat: 29.703,
  lng: -98.1245,
};



const MapComponent = () => {
    return (
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
}

export default MapComponent;
