import { ContainerHeaderNav } from "./style"

import Logo from '../../assets/Logo.jpg'

const NavHeader = () => {
  return (
    <ContainerHeaderNav>
      <figure>
        <img src={Logo} alt="Logo rick e morty" />
      </figure>
    </ContainerHeaderNav>
  )
}

export default NavHeader;