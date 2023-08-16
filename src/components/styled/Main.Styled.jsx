import styled from "styled-components";
import patternBg from "../../assets/images/pattern-bg.png";
export const StyledMain = styled.main`
display: grid;
place-items: center;        
background-image: url(${patternBg});
  height: 30%;
  font-family: 'Rubik', sans-serif;

  h1 {
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    padding-block: 1rem;
  }
`;
