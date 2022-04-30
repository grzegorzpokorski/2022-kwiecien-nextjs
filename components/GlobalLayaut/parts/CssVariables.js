import { createGlobalStyle } from "styled-components";
import { breakpoints, containers } from "./../../../helpers/breakpoints";

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

    --text-gap: 1rem;

    --transition-duration-fast: .25s;
    --transition-duration-normal: .35s;

    --padding-unit: 0.5rem;

    @media (max-width: ${breakpoints.sm}) {
      --container-width: 100%;
    }

    @media (min-width: ${breakpoints.sm}) {
      --container-width: ${containers.sm};
      --padding-unit: 0.6rem;
    }

    @media (min-width: ${breakpoints.md}) {
      --container-width: ${containers.md};
    }

    @media (min-width: ${breakpoints.lg}) {
      --container-width: ${containers.lg};
      --padding-unit: 0.75rem;
    }

    @media (min-width: ${breakpoints.xl}) {
      --container-width: ${containers.xl};
    }

    @media (min-width: ${breakpoints.xxl}) {
      --container-width: ${containers.xxl};
      --padding-unit: 1rem;
    }
  }

`;

export default CssVariables;
