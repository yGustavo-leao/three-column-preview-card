import styled from "styled-components";

export const Container = styled.section`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;

    @media (min-width: 1000px) {
        max-width: 1000px;
        flex-direction: row;
    }
`