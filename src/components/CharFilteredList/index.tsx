import { useContext } from 'react';
import { ContainerFilteredListChar } from './style';
import { GeneralContext } from '../../context/GeneralContext';
import { Card } from '../ListAll/style';

const CharFilteredList = () => {

  const { filterChar } = useContext(GeneralContext);

  return (
    <ContainerFilteredListChar>
      {
        filterChar?.map((el) => (
          <Card key={el.id} title={el.name}>
            <div className='flipper'>
              <figure className='front'>
                <span>{el.name}</span>
                <img src={el.image} alt={el.name} />
              </figure>
              <div className='back'>
                <p><span>gênero:</span> {el.gender}</p>
                <p><span>espécie:</span> {el.species}</p>
                <p><span>localização:</span> {el.location.name}</p>
                <p><span>origem:</span> {el.origin.name}</p>
                <p><span>status:</span> {el.status}</p>
                <p><span>tipo:</span> {el.type === '' ? '? ? ?' : el.type}</p>
              </div>
            </div>
          </Card>
        ))
      }
    </ContainerFilteredListChar>
  )
}

export default CharFilteredList;