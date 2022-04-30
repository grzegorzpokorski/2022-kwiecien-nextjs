import styled from "styled-components";

const Button = ({ href, children }) => {
  return <LinkWrapper href={href}>{children}</LinkWrapper>;
};

const LinkWrapper = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none !important;
  color: var(--white);
  background-color: var(--green);
  opacity: 0.8;
  transition: opacity var(--transition-duration-normal);

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`;

export default Button;
