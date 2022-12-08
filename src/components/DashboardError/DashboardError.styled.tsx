import styled from "styled-components";

export const StyledDashboardError = styled.div`
    padding: 1rem;
    border-radius: .5rem;
    width: 95%;
    height: 70vh;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    background: #ffd8d8;

    & > * {
        background: #ececec;
        height: 100%;
        padding: 1rem;
        border-radius: .5rem;
    }
`