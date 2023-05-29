import { ReactNode, createContext, useEffect, useState } from "react";
import { apiCharacter } from "../service/api";
import { ICharacter } from "../interface";


interface IGeneralProviders {
  children: ReactNode
}
interface IGeneralContext {
  char: null | ICharacter[]
  filterChar: null | ICharacter[]
  setCharacterPage: React.Dispatch<React.SetStateAction<number>>
  characterPage: number
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputValue: string
}

export const GeneralContext = createContext<IGeneralContext>({} as IGeneralContext);

function GeneralProvider({ children }: IGeneralProviders) {

  const [characterPage, setCharacterPage] = useState(1);
  const [inputValue, setInputValue] = useState('')
  const [char, setChar] = useState<ICharacter[]>([]);
  const [filterChar, setFilterChar] = useState<ICharacter[]>([]);

  useEffect(() => {

    
    apiCharacter.get(`?page=${characterPage}`)
    .then((res) => {
      setChar(res.data.results)
    })
    
    const getAllChar = async (page: number) => {
      let allCharacters: any[] = [];

      const response = await apiCharacter.get(`?page=${page}`)
      const characters = response.data.results;
      allCharacters = allCharacters.concat(characters);

      if( response.data.info.next) {
        const nextPage = page + 1;
        const nextPageCharacters = await getAllChar(nextPage);
        allCharacters = allCharacters.concat(nextPageCharacters);
      }
  
      return allCharacters
    }
    const fetchData  = async () => {
      const characters = await getAllChar(1);
      setFilterChar(characters?.filter((el) => el.name.toLowerCase().includes(inputValue.toLocaleLowerCase())));
    }
    fetchData()
  }, [characterPage, inputValue]);

  return (
    <GeneralContext.Provider value={
      {
        char,
        filterChar,
        setCharacterPage,
        characterPage,
        setInputValue,
        inputValue
      }
    }>
      {children}
    </GeneralContext.Provider>
  )

}

export default GeneralProvider;