// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function MapView({ data, selectedId, onSelect }) {
//   return (
//     <MapContainer
//       center={[19, 73]}   // Map ka center latitude, longitude
//       zoom={6}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//       {data.map((item) => (
//         <Marker
//           key={item.id}
//           position={[item.latitude, item.longitude]}
//           eventHandlers={{
//             click: () => onSelect(item.id)
//           }}
//         >
//           <Popup>{item.name}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// }


import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

const selectedIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
});

function FlyToMarker({ data, selectedId }) {
  const map = useMap();

  const selected = data.find(d => d.id === selectedId);
  if (selected) {
    map.flyTo([selected.latitude, selected.longitude], 8, {
      duration: 1.2,
    });
  }

  return null;
}

export default function MapView({ data, selectedId, onSelect }) {
  return (
    <MapContainer center={[19, 73]} zoom={6} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <FlyToMarker data={data} selectedId={selectedId} />

      {data.map(item => (
        <Marker
          key={item.id}
          position={[item.latitude, item.longitude]}
          icon={selectedId === item.id ? selectedIcon : defaultIcon}
          eventHandlers={{
            click: () => onSelect(item.id),
          }}
        >
          <Popup>{item.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
