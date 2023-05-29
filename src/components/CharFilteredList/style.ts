import styled from "styled-components";

export const ContainerFilteredListChar = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 2rem;
  overflow-x: hidden;
  padding-top: 4rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--brand4);
    border-radius: 20px;
    border: 3px solid transparent;
  }
`