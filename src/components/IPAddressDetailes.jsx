import PropsTypes from "prop-types";
import {
  StyledDetaile,
  StyledContainerSection,
  StyledSection,
  StyledH6,
  StyledSpan,
} from "./styled/IPAddressDetailes.Styled";
const IPAddressDetailes = ({geoLocation,loading}) => {
  const {as:{asn},ip,location:{country,city,timezone},isp}=geoLocation;
  console.log(geoLocation)
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
          {city?city:"_"}{", "}{country?country:"_"}{' '}<StyledSpan>{ asn? asn:"_"}</StyledSpan>
        </StyledDetaile>
      </section>
      <section>
        <StyledH6>TIMEZONE</StyledH6>
        <StyledDetaile>UTC {timezone?timezone:"_"}</StyledDetaile>
      </section>
      <section>
        <StyledH6>ISP</StyledH6>
        <StyledDetaile>{isp?isp:"_"}</StyledDetaile>
      </section>
    </StyledContainerSection>
  );
};

IPAddressDetailes.propTypes = {
  geoLocation: PropsTypes.object.isRequired,
  loading: PropsTypes.bool.isRequired,
};




export default IPAddressDetailes;
