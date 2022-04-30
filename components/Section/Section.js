import styled, { css } from "styled-components";

const Section = styled.section`
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: var(--${bgColor});
    `}

  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: calc(var(--padding-unit) * ${paddingTop});
    `}

  ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: calc(var(--padding-unit) * ${paddingBottom});
    `}
`;

export default Section;
