import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface Location {
  lat: number;
  lng: number;
}

const venueLocation: Location = { lat: 32.73222908064623, lng: -97.11395524959133 }; 
const parkingLocation: Location = { lat: 32.726286283936155, lng: -97.11284853890245 };

const containerStyle = {
  width: '450px',
  height: '400px',
  margin: 'auto'
};

const center = {
  lat: (venueLocation.lat + parkingLocation.lat) / 2,
  lng: (venueLocation.lng + parkingLocation.lng) / 2,
};

const buttonStyle : React.CSSProperties = {
  padding: '10px 20px',
  margin: '0 10px',
  backgroundColor: 'transparent', // Transparent background
  color: '#FFFFFF', // White text color
  border: '2px solid #FFFFFF', // White border
  borderRadius: '20px',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '16px',
  cursor: 'pointer',
  outline: 'none',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', // Glowing effect
};
const MapComponent: React.FC = () => {
  // Define your URLs/paths here
  const googleMapsUrl = "https://maps.app.goo.gl/UcfGUJMsaU9eGTeX9";
  const appleMapsUrl = "https://maps.apple.com/?address=416%20S%20Yates%20St,%20Arlington,%20TX%2076010,%20United%20States&auid=6248132129360210769&ll=32.732660,-97.113931&lsp=9902&q=Nedderman%20Hall&t=m";
  const schoolMapUrl = "https://www.uta.edu/maps"; 

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyAc30LXBPnJC7NSYa7Ylz3KkVDdH2KIeQ0">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker // Venue marker
            position={venueLocation}
            label="Venue"
          />
          <Marker // Parking marker
            position={parkingLocation}
            label="Parking"
          />
        </GoogleMap>
      </LoadScript>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={buttonStyle}
          onClick={() => window.open(googleMapsUrl, "_blank")}
        >
          Google Maps
        </button>
        <button
          style={buttonStyle}
          onClick={() => window.open(appleMapsUrl, "_blank")}
        >
          Apple Maps
        </button>
        <button
          style={buttonStyle}
          onClick={() => window.location.href = schoolMapUrl}
        >
          School Map
        </button>
      </div>
    </>
  );
};

export default MapComponent;
