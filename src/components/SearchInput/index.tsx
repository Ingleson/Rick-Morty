import { useContext } from 'react'
import { ContainerInput } from './style'
import { GeneralContext } from '../../context/GeneralContext'

const SearchInput = () => {

  const { setInputValue, inputValue } = useContext(GeneralContext);

  return (
    <ContainerInput>
      <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
    </ContainerInput>
  )
}

export default SearchInput;