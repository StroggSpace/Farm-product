import React from "react";
import Logo from "../../ui/logo/Logo";
import Copyright from "../../ui/copyright/Copyright";
import { StyledHeader, StyledLogo } from "../header/style";

export default function Footer() {
  return (
    <>
      <StyledHeader as={"footer"}>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <Copyright />
      </StyledHeader>
    </>
  );
}
