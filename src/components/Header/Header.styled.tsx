import styled from "styled-components";

export const StyledHeader = styled.header`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 6px, rgba(0, 0, 0, 0.23) 0px 0px 6px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  h1 {
    margin: 0;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > div {
    display: flex;
  }

  & .flex-end {
    margin-left: auto;
  }

  & .btn-add::after {
    content: "Agregar una factura";
    transition: all 500ms ease;
    opacity: 0;
    position: absolute;
    top: 40px;
    right: 50px;
    width: fit-content;
    height: fit-content;
    font-size: 0.9rem;
    color: #454545;
    padding: 0.3rem;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    background: radial-gradient(#b6d6f6, #a4ccf4);
  }

  & .btn-add:hover::after {
    opacity: 1;
  }

  @media (max-width: 520px) {
        flex-direction: column;
        height: fit-content;

        & .flex-end {
          position: absolute;
          right: 1px;
        }

        & .flex-end p {
          visibility: hidden;
        }
  }

`;
