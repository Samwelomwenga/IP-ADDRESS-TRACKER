import PropsTypes from 'prop-types'
import { TileLayer,Marker,Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { StyledMapContainer } from "./styled/StyledMapContainer";
const Map = ({geoLocation}) => {
  const{location:{lat,lng,region}}=geoLocation; 
  const location=[lat, lng];

  const markerIcon= new L.Icon(
    {
      iconUrl:"ic",
      iconSize:[35,45],
    }
  )

  return (
  
    <StyledMapContainer key={lat} center={location} zoom={20}>
  <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={location} icon={markerIcon}>
    <Popup>
      {region}
    </Popup>

    </Marker>
    </StyledMapContainer>
    
  )
}

Map.propTypes = {
    geoLocation:PropsTypes.object.isRequired
}
export default Map