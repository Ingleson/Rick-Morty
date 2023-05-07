import styled from "styled-components";
import Space from '../../assets/space.jpg'

export const ContainerHeaderNav = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Space});
  background-size: 100% 100%;

  figure {
    width: 80%;
    height: 30%;
    margin-bottom: 10rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
`