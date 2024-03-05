import React from "react";
import { StyledButton } from "./style.js";

export default function Button({ children, link, disabled, style }) {
  return (
    <>
      <StyledButton
        disabled={disabled}
        style={style}
        {...(link ? { href: link } : { as: "button", type: "submit" })}
      >
        {children}
      </StyledButton>
    </>
  );
}
