import { useState, useEffect } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import Search from "./components/Search";
import IPAddressDetailes from "./components/IPAddressDetailes";
import { StyledMain } from "./components/styled/Main.Styled";
import Map from "./components/Map";
function App() {
  const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;
  const [geoLocation, setGeoLocation] = useState(null);

  useEffect(() => {
    const getGeoLocation = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_API_URL;

        const res = await axios.get(baseUrl);
        setGeoLocation(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGeoLocation();
  }, []);
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <h1>IP ADDRESS TRACKER</h1>
        <Search />
        {geoLocation && <IPAddressDetailes geoLocation={geoLocation} />}
        {geoLocation&& <Map geoLocation={geoLocation} />}
      </StyledMain>
    </>
  );
}

export default App;
