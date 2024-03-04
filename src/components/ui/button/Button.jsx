import React from "react";
import { StyledButton } from "./style.js";

export default function Button({ children, link, disabled }) {
  return (
    <>
      <StyledButton
        disabled={disabled}
        {...(link ? { href: link } : { as: "button", type: "submit" })}
      >
        {children}
      </StyledButton>
    </>
  );
}
