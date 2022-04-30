import Link from "next/link";
import styled, { css } from "styled-components";
import { breakpoints } from "../../helpers/breakpoints";

import Container from "../Container";

import Figure from "./../Figure";
import Button from "./../Button";

const ContentWithImage = (props) => {
  return (
    <Wrapper>
      <Figure image={props.image} />
      <ArticleWrapper>
        <HeaderWrapper>
          <Span>{props.subtitle}</Span>
          <h2>{props.title}</h2>
        </HeaderWrapper>
        <div>
          {props.content}
          {props.href && (
            <Link href={props.href} passHref>
              <Button>Dowiedz się więcej</Button>
            </Link>
          )}
        </div>
      </ArticleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;

    ${({ reverse }) => css`
      flex-direction: row-reverse;
    `}

    & > * {
      flex: 1;
    }
  }
`;

const Span = styled.span`
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  color: var(--green);
`;

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  margin-bottom: var(--text-gap);
`;

export default ContentWithImage;
