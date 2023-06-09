import styled from "styled-components";
import Space from '../../assets/space.jpg'

export const ContainerHeaderNav = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Space});
  background-size: 100% 100%;

  @media (max-width: 800px) {
    background-size: 100% 200%;
    justify-content: center;
  }

  figure {
    width: 80%;
    height: 30%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`