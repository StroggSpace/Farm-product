import React from "react";
import FarmerLogo from "./FarmerLogo.svg?react";
import Title from "../title/Title";

export default function Logo() {
  return (
    <>
      <FarmerLogo />
      <Title level={3}>Фермерские продукты</Title>
    </>
  );
}
