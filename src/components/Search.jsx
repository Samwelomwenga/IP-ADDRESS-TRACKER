import PropsTypes from 'prop-types'
import {StyledForm,StyledButton,StyledInput} from './styled/Search.styled.jsx'
import iconArrow from '../assets/images/icon-arrow.svg'
const Search = ({searchInput,setSearchInput,handleFetchSearch}) => {
  return (
 <StyledForm onSubmit={handleFetchSearch}>
    <StyledInput type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} placeholder='Search for any IP address or domain' />
   <StyledButton type="submit"><img src={iconArrow} alt="" /></StyledButton>
 </StyledForm>
  )
}
Search.propTypes={
  searchInput:PropsTypes.string.isRequired,
  setSearchInput:PropsTypes.func.isRequired,
  handleFetchSearch:PropsTypes.func.isRequired,
}

export default Search