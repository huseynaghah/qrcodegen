import React, { useContext } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { myContext } from '../App';



export const Map = () => {


    const {address} = useContext(myContext)
    console.log("adressss ",address.location.lat)

  return (
    <MapContainer
    center={[address.location.lat,address.location.lng]}
    zoom={13}
    zoomControl={false}
    scrollWheelZoom={true}
    style={{
      margin: "0 auto",
      width: "99%",
      height: "600px",
    }}
>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[address.location.lat,address.location.lng]}>
        <Popup>
            {address.location.country} <br /> {address.location.city}
        </Popup>
    </Marker>
</MapContainer>
  //   <MapContainer
  //   style={{
  //     margin: "0 auto",
  //     width: "99%",
  //     height: "600px",
  //   }}
  //   center={[address.location.lat,address.location.lng]}
  //   zoom={15}
  //   scrollWheelZoom={false}
  // >
  //   <TileLayer
  //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   /> </MapContainer> 
//  {/* <MarkerPoint data={props.data} location={location} /> */
// * <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//   <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   <Marker position={[51.505, -0.09]}>
//     <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>
//   </Marker>
// </MapContainer> */}
  )
}
