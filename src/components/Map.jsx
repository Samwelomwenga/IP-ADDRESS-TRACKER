import PropsTypes from 'prop-types'
import { TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { StyledMapContainer } from "./styled/StyledMapContainer";
const Map = ({geoLocation}) => {
  console.log(geoLocation);
  const{location:{lat,lng,region}}=geoLocation; 
  const location=[lat, lng];

  return (
  
    <StyledMapContainer center={location} zoom={100}>
  <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={location}>
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