import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    margin: 2rem auto;

    @media (max-width: 700px) {
        width: 80%;
    }
`