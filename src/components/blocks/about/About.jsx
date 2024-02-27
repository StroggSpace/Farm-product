import React from "react";
import Title from "../../ui/title/Title";
import Farmer from "../../../assets/Farmer.svg?react";
import { StyledSection, StyledImgContainer } from "./style";

export default function About() {
  return (
    <>
      <StyledSection>
        <div>
          <Title level={1}>Магазин фермерских продуктов с доставкой</Title>
          <p>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </p>
        </div>
        <StyledImgContainer>
          <Farmer />
        </StyledImgContainer>
      </StyledSection>
    </>
  );
}
