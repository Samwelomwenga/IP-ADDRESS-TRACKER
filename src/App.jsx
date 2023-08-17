import {createGlobalStyle} from 'styled-components'
import Search from "./components/Search";
import IPAddressDetailes from "./components/IPAddressDetailes";
import { StyledMain } from "./components/styled/Main.Styled";
function App() {
  const GlobalStyle=createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `
const baseUrl=import.meta.env.BASE_API_URL;

  return (
    <>
    <GlobalStyle/>
    <StyledMain>
      <h1>IP ADDRESS TRACKER</h1>
      <Search />
      <IPAddressDetailes/>
    </StyledMain>
  </>
  );
}

export default App;
