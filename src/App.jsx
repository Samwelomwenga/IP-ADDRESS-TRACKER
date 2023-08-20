import { useState, useEffect } from "react";
import axios from "axios";
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
    const source = axios.CancelToken.source;
    const getGeoLocation = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_API_URL;
        const res = await axios.get(baseUrl, { cancelToken: source.token });
        setGeoLocation(res.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        console.log(error);
      }
    };
    getGeoLocation();
    return () => {
      source.cancel;
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
