import { ReactNode, createContext, useEffect, useState } from "react";
import { apiCharacter } from "../service/api";
import { ICharacter } from "../interface";


interface IGeneralProviders {
  children: ReactNode
}
interface IGeneralContext {
  char: null | ICharacter[]
  setCharacterPage: React.Dispatch<React.SetStateAction<number>>
  characterPage: number
}

export const GeneralContext = createContext<IGeneralContext>({} as IGeneralContext);

function GeneralProvider({ children }: IGeneralProviders) {

  const [characterPage, setCharacterPage] = useState(1);
  const [char, setChar] = useState(null);

  useEffect(() => {
    apiCharacter.get(`?page=${characterPage}`)
      .then((res) => {
        setChar(res.data.results ? res.data.results : [])
      })
  }, [characterPage]);

  return (
    <GeneralContext.Provider value={
      {
        char,
        setCharacterPage,
        characterPage,
      }
    }>
      {children}
    </GeneralContext.Provider>
  )

}

export default GeneralProvider;