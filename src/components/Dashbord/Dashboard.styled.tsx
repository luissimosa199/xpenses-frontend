import styled from "styled-components";

export const StyledCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  padding: 0.5rem;
  margin: 0;

  @media (max-width: 1600px) {
    justify-content: center;
  }
`;
