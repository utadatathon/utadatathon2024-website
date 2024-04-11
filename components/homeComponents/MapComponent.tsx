import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface Location {
  lat: number;
  lng: number;
}


const venueLocation: Location = { lat: 32.73222908064623, lng: -97.11395524959133 }; 
const parkingLocation: Location = { lat: 32.726286283936155, lng: -97.11284853890245 };

const containerStyle = {
  height: '400px',
  margin: 'auto'
};

const center = {
  lat: (venueLocation.lat + parkingLocation.lat) / 2,
  lng: (venueLocation.lng + parkingLocation.lng) / 2,
};


const MapComponent: React.FC = () => {

  const googleMapsUrl = "https://maps.app.goo.gl/UcfGUJMsaU9eGTeX9";
  const appleMapsUrl = "https://maps.apple.com/?address=416%20S%20Yates%20St,%20Arlington,%20TX%2076010,%20United%20States&auid=6248132129360210769&ll=32.732660,-97.113931&lsp=9902&q=Nedderman%20Hall&t=m";
  const schoolMapUrl = "https://www.uta.edu/maps"; 
  const mapUrl = "https://www.google.com/maps/d/u/6/embed?mid=1rX4t-fVz6vWX2fGGF-8TJIU9ULMm3f4&ehbc=2E312F"
  return (
   
 <section className="relative p-4 bg-contain bg-customBackground my-12">
      <h1 className="md:text-4xl text-2xl font-bold my-4 text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent p-12 custom-font">Venue <span className='custom-font-3'>& </span>   Parking</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <iframe 
          src={mapUrl} 
          width="640" 
          height="480" 
          style={{ border: 'none' }} 
          loading="lazy">
        </iframe>
      </div>
      <div className="relative flex flex-col items-center md:flex-row md:justify-around px-44 md:space-y-0 space-y-6 lg:space-x-8 md:space-x-4 z-9 w-full mt-8 lg:mt-12">
        <button
          onClick={() => window.open(googleMapsUrl, "_blank")}
          className="max-w-[14rem] w-[14rem] md:max-w-full backdrop-blur-sm bg-customBackground/30 py-4 rounded-xl h-10 flex items-center justify-center font-semibold text-xl text-primaryDark border-2 border-gray-300 custom-font"
        >
          Google Maps
        </button>
        <button
          onClick={() => window.open(appleMapsUrl, "_blank")}
          className="max-w-[14rem] w-[14rem] md:max-w-full backdrop-blur-sm bg-customBackground/30 py-4 rounded-xl h-10 flex items-center justify-center font-semibold text-xl text-primaryDark border-2 border-gray-300 custom-font"
        >
          Apple Maps
        </button>
        <button
          onClick={() => window.open(schoolMapUrl, "_blank")}
          className="max-w-[14rem] w-[14rem] md:max-w-full backdrop-blur-sm bg-customBackground/30 py-4 rounded-xl h-10 flex items-center justify-center font-semibold text-xl text-primaryDark border-2 border-gray-300 custom-font"
        >
          School Map
        </button>
      </div>
    </section>
  );
};

export default MapComponent;
