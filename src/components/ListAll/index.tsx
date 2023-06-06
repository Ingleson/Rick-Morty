import { useContext } from 'react';
import { Card, ContainerListChar } from './style';
import { GeneralContext } from '../../context/GeneralContext';

const ListChar = () => {

  const {characterPage, setCharacterPage, char} = useContext(GeneralContext);

  const next = () => {
    setCharacterPage(characterPage + 1);
  };
  const prev = () => {
    characterPage > 1 && setCharacterPage(characterPage - 1);
  };
  
  return (
    <ContainerListChar>
      <div className='btn-box'>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <ul>
        {
          char?.map((el) => (
            <Card key={el.id} title={el.name}>
              <div className='flipper'>
                <figure className='front'>
                  <span>{el.name}</span>
                  <img src={el.image} alt={el.name} />
                </figure>
                <article className='back'>
                  <p><span>gênero:</span> {el.gender}</p>
                  <p><span>espécie:</span> {el.species}</p>
                  <p><span>localização:</span> {el.location.name}</p>
                  <p><span>origem:</span> {el.origin.name}</p>
                  <p><span>status:</span> {el.status}</p>
                  <p><span>tipo:</span> {el.type === '' ? '? ? ?' : el.type}</p>
                </article>
              </div>
            </Card>
          ))
        }
      </ul>
    </ContainerListChar>
  )
}

export default ListChar;