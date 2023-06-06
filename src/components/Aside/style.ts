import styled from 'styled-components';

export const ContainerNav = styled.aside`
  font-family: 'Patrick Hand';
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid var(--white);

  @media (max-width: 800px) {
    width: 100%;
    max-height: 160px;
    border-right: none;
  }
`