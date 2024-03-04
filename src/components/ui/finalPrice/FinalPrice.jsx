import React from "react";
import { StyledSubtitle, StyledPrice } from "./style";

export default function FinalPrice({ price }) {
  return (
    <>
      <StyledSubtitle>Цена</StyledSubtitle>
      <StyledPrice>{price ? `${price} руб.` : "0 руб."}</StyledPrice>
    </>
  );
}
