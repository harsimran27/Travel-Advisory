import GoogleMapReact from "google-map-react";
import React from "react";
import "./map.css";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDa-98hPv7LInumyiq8KkeDPKrbsLcOzXI" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
