import { useContext } from 'react';
import ListChar from '../ListAll';
import { ContainerMain } from './style';
import { GeneralContext } from '../../context/GeneralContext';
import CharFilteredList from '../CharFilteredList';

const Main = () => {

  const { inputValue } = useContext(GeneralContext);

  return (
    <ContainerMain>
      { inputValue ? 
        <CharFilteredList/> : 
        <ListChar/>
      }

    </ContainerMain>
  )
}

export default Main;