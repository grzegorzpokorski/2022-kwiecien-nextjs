import styled from "styled-components";

const P = styled.p`
  &:not(:last-child) {
    margin-bottom: var(--text-gap);
  }
`;

export default P;
