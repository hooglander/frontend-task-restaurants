import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// Unfinished component
function baseMap() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: 59.31781179999999,
        lng: 18.0701277,
      }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(baseMap));
export default function Map() {
  return (
    <div style={{ width: "100%", height: "20rem" }}>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBaqDTP4lvwfiRlQevpF3otaBE6iW1WijM"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
