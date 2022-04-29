import styled from "styled-components";
import { breakpoints, containers } from "../../helpers/breakpoints";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  width: var(--container-width);

  @media (max-width: ${breakpoints.sm}) {
    --container-width: 100%;
  }

  @media (min-width: ${breakpoints.sm}) {
    --container-width: ${containers.sm};
  }

  @media (min-width: ${breakpoints.md}) {
    --container-width: ${containers.md};
  }

  @media (min-width: ${breakpoints.lg}) {
    --container-width: ${containers.lg};
  }

  @media (min-width: ${breakpoints.xl}) {
    --container-width: ${containers.xl};
  }

  @media (min-width: ${breakpoints.xxl}) {
    --container-width: ${containers.xxl};
  }
`;

export default Container;
