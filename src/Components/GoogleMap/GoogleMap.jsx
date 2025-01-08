import GoogleMapReact from "google-map-react";
import { googleApi } from "./GoogleApi";
import { FaMapMarkedAlt } from "react-icons/fa";
const AnyReactComponent = ({ text }) => (
  <div>
    <FaMapMarkedAlt className="text-[30px] text-red-600"></FaMapMarkedAlt>
  </div>
);
const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 23.1123,
      lng: 91.1158,
    },
    zoom: 15,
  };
  return (
    <div style={{ height: "500px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApi }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
