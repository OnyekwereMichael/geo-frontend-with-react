
// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// function App() {
//   const [position, setPosition] = useState([51.505, -0.09]);

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
//         <Marker position={position} />
//       </MapContainer>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import Map from "../src/map/map"
// Custom icon configuration


function App() {
  return (
    <div>
        <Map />
   </div>
  );
}

export default App;


