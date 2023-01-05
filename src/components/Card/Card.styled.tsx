import styled from "styled-components";

interface Props {
  background?: "paid" | "notpaid" | "unknown";
}

export const StyledCard = styled.div<Props>`
  margin: 20px;
  padding: 20px;
  width: 150px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;

  background: ${(props) =>
    props.background === "unknown"
      ? "radial-gradient(#cbcbcb, #b6b6b6);"
      : props.background === "paid"
      ? "radial-gradient(#B6D6F6, #A4CCF4);"
      : "radial-gradient(#EBCACE, #ffd1d6);"};

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
    font-weight: 700;
    letter-spacing: 2px;
    color: #ffffff;
    margin: 0;
    font-size: 2rem;
    /* font-style: italic; */
  }

  & p {
    margin: 0;
    color: #29333d;
  }

  & .card-info {
    display: flex;
    flex-direction: column;
  }

  & .card-info > * {
    margin: 0.3rem 0;
  }

  & .card-info-desc {
    font-size: 0.7rem;
  }

  & .card-info-date {
    font-size: 0.7rem;
  }

  & .card-info-amount {
    font-size: 2rem;
    font-weight: 700;
  }
`;
