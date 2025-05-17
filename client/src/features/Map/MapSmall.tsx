import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Property } from "../../types/property.type";

interface MapProps {
  property?: Property;
  isLoading: boolean;
}

const MapSmall = ({ property, isLoading }: MapProps) => {
  if (isLoading) {
    return <div className="w-full h-full bg-gray-200 animate-pulse"></div>;
  }

  if (!property) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        no items to show
      </div>
    );
  }

  const center: LatLngExpression =
    property.latitute && property.longitude
      ? [Number(property.latitute), Number(property.longitude)]
      : [51.505, -0.09]; 
  return (
    <div className="w-full h-full">
      <MapContainer
        key={`${property.latitute}-${property.longitude}`}
        center={center}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[Number(property.latitute), Number(property.longitude)]}
        >
          <Popup>
            <div className="w-[10rem]">
              <h3 className="font-bold">{property.name}</h3>
              <p className="text-sm">{property.address}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSmall;
