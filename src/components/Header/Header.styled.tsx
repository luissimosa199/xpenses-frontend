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
    gap: 1rem;
  }
`;
