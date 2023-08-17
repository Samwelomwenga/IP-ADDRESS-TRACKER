import PropsTypes from "prop-types";
import {
  StyledDetaile,
  StyledContainerSection,
  StyledSection,
  StyledH6,
  StyledSpan,
} from "./styled/IPAddressDetailes.Styled";
const IPAddressDetailes = ({geoLocation}) => {
  const {ip,location:{country,region,postalCode,timezone},isp}=geoLocation;
  return (
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
        <StyledDetaile>{timezone}</StyledDetaile>
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
};




export default IPAddressDetailes;
