import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const ExtraSection = () => {
  const position = [23.810331, 90.412521]
  return (
      <section className="text-gray-600 body-font relative">
      <div className="absolute -z-50 inset-0 bg-gray-300">
      <MapContainer style={{ width: "100%", height: "100%" }} center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
       Md soliman can <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Share your thought about this website</p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none btn rounded text-lg">Submit</button>
          <p className="text-xs text-gray-500 mt-3">Fill free to give feedback</p>
        </div>
      </div>
    </section>
    );
};

export default ExtraSection;