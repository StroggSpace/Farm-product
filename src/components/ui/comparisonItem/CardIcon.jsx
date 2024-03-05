import React from "react";
import { StyledCardIcon } from "./style";
import Eat from "../../../assets/comparison-icon/Eat.svg?react";
import Garbage from "../../../assets/comparison-icon/Garbage.svg?react";
import NoMeat from "../../../assets/comparison-icon/NoMeat.svg?react";
import Sprout from "../../../assets/comparison-icon/Sprout.svg?react";

export default function CardIcon({ id }) {
  return (
    <StyledCardIcon>
      {id === 1 && <Eat />}
      {id === 2 && <Garbage />}
      {id === 3 && <Sprout />}
      {id === 4 && <NoMeat />}
    </StyledCardIcon>
  );
}
