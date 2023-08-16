import {
  StyledDetaile,
  StyledContainerSection,
  StyledSection,
  StyledH6,
  StyledSpan,
} from "./styled/IPAddressDetailes.Styled";
const IPAddressDetailes = () => {
  return (
    <StyledContainerSection>
      <StyledSection>
        <StyledH6> IP ADDRESS</StyledH6>
        <StyledDetaile>192.212.174.101</StyledDetaile>
      </StyledSection>

      <section>
        <StyledH6>LOCATION</StyledH6>
        <StyledDetaile>
          Brooklyn,<StyledSpan>NY 1001</StyledSpan>
        </StyledDetaile>
      </section>
      <section>
        <StyledH6> TIMEZONE</StyledH6>
        <StyledDetaile>UTC-0500</StyledDetaile>
      </section>
      <section>
        <StyledH6>ISP</StyledH6>
        <StyledDetaile>SAFARICOM</StyledDetaile>
      </section>
    </StyledContainerSection>
  );
};

export default IPAddressDetailes;
