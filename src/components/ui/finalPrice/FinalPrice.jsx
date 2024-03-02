import React from "react";
import Title from "../title/Title";

export default function FinalPrice({ price }) {
  return (
    <>
      <p>Цена</p>
      <Title level={4}>{price ? `${price} руб.` : "0 руб."}</Title>
    </>
  );
}
