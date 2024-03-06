import React, { useRef, useState } from 'react';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from 'react-leaflet';
import osm from './osm';


function MapComponent() {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <div>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
