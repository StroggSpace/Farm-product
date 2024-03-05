import React from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardSubtitle,
} from "./style.js";
import CardIcon from "./CardIcon.jsx";

export default function ComparisonItem({
  title,
  subtitle,
  text,
  isNegative,
  id,
}) {
  return (
    <>
      <li>
        <StyledCard $isNegative={isNegative}>
          <StyledCardHeader>
            <CardIcon id={id} />
            <StyledCardTitle $isNegative={isNegative}>{title}</StyledCardTitle>
            <StyledCardSubtitle>{subtitle}</StyledCardSubtitle>
          </StyledCardHeader>
          <p>{text}</p>
        </StyledCard>
      </li>
    </>
  );
}
