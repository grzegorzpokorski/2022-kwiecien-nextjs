import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    ::before,
    ::after{
        box-sizing: border-box;
    }

    html,
    body,
    p,
    ol,
    ul,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    figure{
        margin: 0;
        padding: 0;
    }

    html{
        font-size: 1rem;
    }

    body{
        font-family: var(--sans-serif);
        font-weight: var(--font-weight-regular);
        line-height: 1.2;
        color: var(--gray); 
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        font-weight: var(--font-weight-bold);
    }

    h1 {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.125rem;
    }
    h4 {
        font-size: 1rem;
    }
    h5 {
        font-size: 1rem;
    }
    h6 {
        font-size: 1rem;
    }

    ol,
    ul{
        list-style: none;
    }

    strong{
        font-weight: var(--font-weight-bold);
    }

    a{
        text-decoration: none;

        &:hover,
        &:active,
        &:focus{
            text-decoration: underline;
        }
    }

    button {
        display: block;
        appearance: none;
        
        padding: 0;
        border: 0;
        background-color: transparent;
        font-size: 1rem;
        &:hover {
        cursor: pointer;
        }
    }

`;

export default GlobalStyle;
