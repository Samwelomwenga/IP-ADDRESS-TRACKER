import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Search from "./components/Search";
import IPAddressDetailes from "./components/IPAddressDetailes";
import { StyledMain } from "./components/styled/Main.Styled";
import Map from "./components/Map";
import fetchGeoIPData from "./util/FetchGeoLocation";
function App() {
  const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;
  const [geoLocation, setGeoLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleFetchSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await fetchGeoIPData(searchInput || null);
      setGeoLocation(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    const getGeoLocation = async () => {
      try {
const data= await fetchGeoIPData();
        if (!ignore) {setGeoLocation(data);
          console.log(data);
        }
      } catch (error) {
        ignore&&console.log(error);
      }
    };
    getGeoLocation();
    return () => {
ignore=true;
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <h1>IP ADDRESS TRACKER</h1>
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleFetchSearch={handleFetchSearch}
        />
        {geoLocation && (
          <IPAddressDetailes geoLocation={geoLocation} loading={loading} />
        )}
        {geoLocation && <Map geoLocation={geoLocation} />}
      </StyledMain>
    </>
  );
}

export default App;
