import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
    const position = [51.505, -0.09]
    return (
        <div>
                <MapContainer style={{ width: "100%", height: "100vh" }} center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  
        </div>
    );
};

export default Map;