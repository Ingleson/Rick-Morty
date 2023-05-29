import { ContainerHeaderNav } from "./style"

import Logo from '../../assets/Logo.jpg'
import SearchInput from "../SearchInput";

const NavHeader = () => {
  return (
    <ContainerHeaderNav>
      <figure>
        <img src={Logo} alt="Logo rick e morty" />
      </figure>
      <SearchInput/>
    </ContainerHeaderNav>
  )
}

export default NavHeader;