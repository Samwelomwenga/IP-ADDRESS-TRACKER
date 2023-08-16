import {StyledForm,StyledButton,StyledInput} from './styled/Search.styled.jsx'
import iconArrow from '../assets/images/icon-arrow.svg'
const Search = () => {
  return (
 <StyledForm>
    <StyledInput type="text" placeholder='Search for any IP address or domain' />
   <StyledButton type="submit"><img src={iconArrow} alt="" /></StyledButton>
 </StyledForm>
  )
}

export default Search