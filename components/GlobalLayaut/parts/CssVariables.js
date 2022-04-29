import { createGlobalStyle } from "styled-components";

const CssVariables = createGlobalStyle`

:root{
        font-size: 16px;

        --green: #00C865;
        --green-light: #CCF4E0;
        --gray: #222222;
        --gray-light: #555555;
        --white: #ffffff;
        --white-green: #f4f9f4;
        --black: #000000;

        --sans-serif: 'Rubik', Arial, sans-serif;

        --font-weight-regular: 400;
        --font-weight-bold: 700;

        --transition-duration-fast: .25s;
        --transition-duration-normal: .35s;
    }

`;

export default CssVariables;
