import React from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardIcon,
  StyledCardSubtitle,
} from "./style.js";

export default function ComparisonItem({
  logo,
  title,
  subtitle,
  text,
  isNegative,
}) {
  return (
    <>
      <li>
        <StyledCard $isNegative={isNegative}>
          <StyledCardHeader>
            <StyledCardIcon src={logo} alt="Значок списка" />
            <StyledCardTitle $isNegative={isNegative}>{title}</StyledCardTitle>
            <StyledCardSubtitle>{subtitle}</StyledCardSubtitle>
          </StyledCardHeader>
          <p>{text}</p>
        </StyledCard>
      </li>
    </>
  );
}
