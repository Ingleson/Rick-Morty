import styled from "styled-components";
import portal from '../../assets/portal.png'

export const ContainerListChar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .btn-box {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;

    button {
      background-color: var(--brand2);
      border: 1.5px solid var(--brand2);
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 1rem;
      transition: 0.5s;

      :hover {
        color: var(--white);
        text-shadow: 1px 1px 5px var(--black);
        transition: 0.5s;
      }
    }
  }

  #load {
    color: var(--white);
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 91%;
    height: 100%;
    gap: 2rem;
    overflow-x: hidden;

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
  }

`
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1.5rem;
  max-width: 200px;
  max-height: 400px;
  background-image: url(${portal});
  background-color: var(--brand3);
  background-size: 100% 100%;
  border: 1px solid var(--white);

  figure {
    position: relative;
    width: 200px;
    height: 10rem;
    
    span {
      position: absolute;
      text-shadow: 2px -2px 10px var(--brand4);
      font-size: 20px;
      padding: 5px;
      color: var(--white);
      -webkit-text-stroke: 1px var(--black);
    }
    img {
      width: 99%;
      height: 100%;
    }
  }
  .info-box {
    max-height: 250px;
    padding: 15px 0 10px 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      color: var(--black);
      text-shadow: 3px 3px 5px var(--white);
      font-size: 18px;
      word-break: break-all;

      span {
        text-decoration: underline;
      }
    }
  }
`