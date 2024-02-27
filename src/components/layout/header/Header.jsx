import React from "react";
import Logo from "../../ui/logo/Logo";
import Nav from "../nav/Nav";
import { StyledHeader, StyledLogo } from "./style";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <Nav />
      </StyledHeader>
    </>
  );
}
