import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 40%;
    max-width: 400px;
    margin: 2rem auto;

    @media (max-width: 700px) {
        width: 80%;
    }
`