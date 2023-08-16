import styled from 'styled-components'

export const StyledContainerSection=styled.section`
    background-color: white;
    display: grid;
    place-items: center;
    gap: 1.9rem;
    text-align: center;
    margin-top: 1.5rem;
    padding-block: 1.5rem;
    width: 85%;
    border-radius: 1rem;
    @media (min-width: 786px){
        display: flex;
        justify-content: space-around;
        padding-block: 2rem;
    }
`
export const StyledSection=styled.section`
    /* &::before{
          content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='100'%3E%3Cline x1='0' y1='0' x2='0' y2='100' stroke='black' /%3E%3C/svg%3E");
        display: inline;
        height: 100px;
        border-left: 1px;
    } */
`
export const StyledH6=styled.h6`
    color: hsl(0, 0%, 59%);
    font-weight: 500;
font-size: small;
`
export const StyledDetaile=styled.p`
    color: hsl(0, 0%, 17%);
    font-weight: 700;
    font-size: larger;
`
export const StyledSpan=styled.span`
    @media (min-width: 768px) {
        display: block;
    }
`
// export const StyledHr=styled.div`
// visibility: hidden;
//     @media (min-width: 768px) {
//        visibility: visible;
//     }
// `