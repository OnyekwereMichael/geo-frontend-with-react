// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Custom icon configuration
// const customIcon = L.icon({
//   iconUrl: '../src/map/mapicons.png', // Specify the path to your custom image
//   iconSize: [32, 32], // Specify the size of the icon
//   iconAnchor: [16, 32], // Specify the anchor point of the icon
// });

// function Map() {
//   const [position, setPosition] = useState([0, 0]); // Default position
  
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         function (position) {
//           setPosition([position.coords.latitude, position.coords.longitude]);
//         },
//         function (error) {
//           console.error("Error getting geolocation:", error);
//         }
//       );
//     } else {
//       console.log("Geolocation not supported");
//     }
//   }, []);
  
//   return (
//     <div>
//       <MapContainer center={position} zoom={3} style={{ width: '100%', height: '100vh' }}>
//         <TileLayer
//           url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
//           maxZoom={19}
//           attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         />
//         <Marker position={position} icon={customIcon} />
//       </MapContainer>
//     </div>
//   );
// }

// export default Map;


import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
  useEffect(() => {
    const displayMap = () => {
      const map = L.map('map').setView([51.505, -0.09], 3);
      L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      
      if (!navigator.geolocation) {
        console.log("Geolocation not supported");
      } else {
        console.log("Geolocation found");
        navigator.geolocation.getCurrentPosition(function(position) {
          const data = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          };
          const circle = L.circle([data.lat, data.long], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
          }).addTo(map);
        });
      }
    };

    displayMap();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
}

export default Map;
