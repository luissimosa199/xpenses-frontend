import { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const StyledNavLink = styled.div`

  list-style-type: none;

  & a {
    text-decoration: none;
    color: inherit;
    transition: all 200ms ease;
  }

  & a:hover {
    opacity: 0.7;
  }
`;

interface LinkProps {
  to: string;
  children: JSX.Element | string;
}

export const StyledLink: FunctionComponent<LinkProps> = ({ to, children }) => {
  return (
    <StyledNavLink>
      <Link to={to}>{children}</Link>
    </StyledNavLink>
  );
};
