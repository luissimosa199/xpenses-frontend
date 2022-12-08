import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 20px;
  padding: 20px;
  width: 150px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;

  background: radial-gradient(#B6D6F6, #A4CCF4);

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  & .card-exit,
  & .card-icon,
  & .card-link {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
  }

  & .card-link::after {
    position: absolute;
    top: 25px;
    left: 0;
    content: "";
    width: 0%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.5s;
  }

  & .card-link:hover::after {
    width: 100%;
  }

  & .card-exit {
    grid-row: 1/2;
    justify-self: end;
  }

  & .card-icon {
    grid-row: 2/3;
    font-size: 30px;
    border-radius: 50%;
    border: 1px solid black;
    width: 45px;
    height: 45px;
  }

  & .card-update {
    grid-row: 4/5;
    align-self: center;
  }

  & h4 {
    grid-row: 3/4;
    font-weight: 400;
    color: #ffffff;
    margin: 0;
    font-size: 2rem;
    /* font-style: italic; */
  }

  & p {
    margin: 0;
    color: #29333D;
  }

  & .card-info {
    display: flex;
    flex-direction: column;
  }

  & .card-info > * {
    margin: .3rem 0;
  }

  & .card-info-desc {
    font-size: .7rem;
  }

  & .card-info-date {
    font-size: .7rem;
  }

  & .card-info-amount {
    font-size: 2rem;
    font-weight: 700;
  }
`;
