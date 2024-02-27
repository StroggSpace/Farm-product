import React from "react";
import { StyledTitle } from "./style";

export default function Title({ level, children }) {
  return (
    <>
      <StyledTitle as={`h${level}`}>{children}</StyledTitle>
    </>
  );
}
