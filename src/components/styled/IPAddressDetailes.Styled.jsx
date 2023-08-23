import styled from 'styled-components'

export const StyledContainerSection=styled.section`
    background-color: white;
    display: grid;
    place-items: center;
    gap: 1.3rem;
    text-align: center;
    margin-top: 1.5rem;
    padding-block: 1.5rem;
    margin-bottom: -8rem;
    z-index: 20;
    width: 85%;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 0px hsl(0, 5.88235294117647%, 10%);
    @media (min-width: 786px){
        display: flex;
        justify-content: space-between;
        padding-inline: 1rem;
        padding-block: 2rem;
        text-align: left;
        margin-bottom: -3.5rem;
    }
`
export const StyledSection=styled.section`
   display: flex;
   
`
export const StyledH6=styled.h6`
    color: rgb(150, 150, 150);
    font-weight: 500;
font-size: small;
margin-bottom: .4rem;
`
export const StyledDetaile=styled.p`
    color: hsl(0, 0%, 17%);
    font-weight: 700;
    
`
export const StyledSpan=styled.span`
    @media (min-width: 768px) {
        display: block;
        margin-top: .3rem;
       

    }
`
export const StyledHr=styled.div`
background-color: hsl(0, 0%, 58.82352941176471%);
width: 1px;
height: 4rem;
margin-right: 1rem;
visibility: hidden;
     @media (min-width: 768px) {
      visibility: visible;
    }
`