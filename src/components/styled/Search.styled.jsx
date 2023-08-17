import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  border-radius: 0.7rem;
  overflow: hidden;
  /* @media (min-width: 768px){
    padding-right: 20rem;
    margin-inline: auto;
  } */

`;
export const StyledInput = styled.input`
  color: hsl(0, 0%, 17%);
  font-size: 1.125rem;
  padding-inline: 2rem;

  &:hover{
    cursor: pointer;
  }

  border: none;
`;
export const StyledButton = styled.button`
  background-color: hsl(0, 0%, 17%);
  padding-inline: 1rem;
  padding-block: 1.2rem;
  border: none;
  &:hover{
    cursor: pointer;
    opacity:.9;
  }

`;
