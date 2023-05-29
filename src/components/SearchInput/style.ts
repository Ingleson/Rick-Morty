import styled from "styled-components";

export const ContainerInput = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid var(--brand1);
  width: 70%;
  height: 40px;

  input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    background-color: transparent;
    caret-color: var(--brand3);
    border: none;
    outline: none;
    font-size: 20px;
    color: var(--gray1);
    text-shadow: 1px 1px 5px var(--black);

    :focus {
      background-color: var(--black);
    }
  }
`