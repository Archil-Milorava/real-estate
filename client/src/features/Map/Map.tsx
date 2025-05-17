import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Property } from "../../types/property.type";

interface MapProps {
  properties: Property[];
  isLoading: boolean;
}

const center: LatLngExpression = [51.505, -0.09];

const Map = ({ properties, isLoading }: MapProps) => {
  if (isLoading) {
    return <div className="w-full h-full bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div className="w-full h-full ">
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((item) => (
          <Marker
            key={item.id}
            position={[Number(item.latitute), Number(item.longitude)]}
          >
            <Popup>
              <div  className="w-[15rem] h-[15rem] overflow-hidden">
                <img src={item.images[0]} alt={item.name} />
                <p>{item.address}</p>
                <h1>{item.name}</h1>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
