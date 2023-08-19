import PropsTypes from 'prop-types'
import { TileLayer,Marker,Popup } from "react-leaflet";
import { StyledMapContainer } from "./styled/StyledMapContainer";
const Map = ({geoLocation}) => {
  console.log(geoLocation);
  const{location:{lat,lng}}=geoLocation; 
  const location=[lat, lng];

  return (
      <div>
    <StyledMapContainer center={location} zoom={6}>
  <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={location}>
    <Popup>
      {geoLocation.ip}
    </Popup>

    </Marker>
    </StyledMapContainer>
    </div>
  )
}

Map.propTypes = {
    geoLocation:PropsTypes.object.isRequired
}
export default Map