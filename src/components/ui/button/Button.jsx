import React from "react";
import { StyledButton } from "./style.js";

export default function Button({ children, minWidth, link }) {
  return (
    <>
      <StyledButton
        $minWidth={minWidth}
        {...(link ? { href: link } : { as: "button", type: "button" })}
      >
        {children}
      </StyledButton>
    </>
  );
}
