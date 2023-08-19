import PropsTypes from "prop-types";
import {
  StyledDetaile,
  StyledContainerSection,
  StyledSection,
  StyledH6,
  StyledSpan,
} from "./styled/IPAddressDetailes.Styled";
const IPAddressDetailes = ({geoLocation,loading}) => {
  const {ip,location:{country,region,postalCode,timezone},isp}=geoLocation;
  return (
    loading && <h1>Loading...</h1>,
    <StyledContainerSection>
      <StyledSection>
        <StyledH6> IP ADDRESS</StyledH6>
        <StyledDetaile>{ip}</StyledDetaile>
      </StyledSection>

      <section>
        <StyledH6>LOCATION</StyledH6>
        <StyledDetaile>
          {region}{", "}{country}<StyledSpan>{postalCode}</StyledSpan>
        </StyledDetaile>
      </section>
      <section>
        <StyledH6>TIMEZONE</StyledH6>
        <StyledDetaile>UTC {timezone}</StyledDetaile>
      </section>
      <section>
        <StyledH6>ISP</StyledH6>
        <StyledDetaile>{isp}</StyledDetaile>
      </section>
    </StyledContainerSection>
  );
};

IPAddressDetailes.propTypes = {
  geoLocation: PropsTypes.object.isRequired,
  loading: PropsTypes.bool.isRequired,
};




export default IPAddressDetailes;
