import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem 1rem;
        background-color: #f2f2f2;
    }
`