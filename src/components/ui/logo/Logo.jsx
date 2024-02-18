import React from "react";
import FarmerLogo from "./FarmerLogo.svg?react";
import Title, { TitleSize } from "../title/Title";

export default function Logo() {
  return (
    <>
      <FarmerLogo />
      <Title size={TitleSize.SMALL}>Фермерские продукты</Title>
    </>
  );
}
