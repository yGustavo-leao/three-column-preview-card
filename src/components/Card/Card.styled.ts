import styled from "styled-components";

export const Card = styled.div<{$mainColor: string}>`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 3rem 2rem;
    background-color: ${props => props.$mainColor || 'gray'};

    @media (min-width: 1000px) {
        row-gap: 2rem;
    }
`

export const ImgContainer = styled.div`
    display: flex;
`

export const Img = styled.img`
`

export const Category = styled.h2`
    font-family: "Big Shoulders Display", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 3rem;
    color: #f2f2f2;
`

export const Description = styled.p`
    font-family: "Lexend Deca", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 1.1rem;
    line-height: 1.6rem;
    color: #ffffffbf;
`

export const LearnMore = styled.button<{$mainColor: string}>`
    width: max-content;
    font-family: "Lexend Deca", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    padding: 1rem 3rem;
    border: none;
    border-radius: 25px;
    margin-top: 1rem;
    font-weight: bold;
    cursor: pointer;
    background: #f2f2f2;
    color: ${props => props.$mainColor || 'black'};
    border: 2px solid #f2f2f2;

    &:hover {
        background-color: transparent;
        color: #f2f2f2;
    }

    @media (min-width: 1000px) {
        margin-top: 2rem;
    }
`