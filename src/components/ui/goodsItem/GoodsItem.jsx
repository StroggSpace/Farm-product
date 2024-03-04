import React, { useState } from "react";
import { goodsTemplate } from "../../../mocks/goodsData";
import CardTabs from "../cardTabs/CardTabs";
import {
  StyledGoodsItem,
  StyledGoodsItemImg,
  StyledTabsWrapper,
  StyledPrice,
  StyledLabel,
} from "./style";
import Title from "../title/Title";

export default function GoodsItem({ image, title, price, id }) {
  const [activeTab, setActiveTab] = useState("1");

  const handleClick = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <>
      <StyledGoodsItem>
        <StyledGoodsItemImg src={image} alt="Фото продукта" />
        <Title level={4}>{title}</Title>
        <StyledTabsWrapper>
          <StyledLabel checked={activeTab === "1"}>
            <input
              type="radio"
              name={id}
              value="1"
              checked={activeTab === "1" ? true : false}
              onChange={handleClick}
            />
            {goodsTemplate.descriptionTab}
          </StyledLabel>
          <StyledLabel checked={activeTab === "2"}>
            <input
              type="radio"
              name={id}
              value="2"
              checked={activeTab === "2" ? true : false}
              onChange={handleClick}
            />
            {goodsTemplate.featuresTab}
          </StyledLabel>
          <StyledLabel checked={activeTab === "3"}>
            <input
              type="radio"
              name={id}
              value="3"
              checked={activeTab === "3" ? true : false}
              onChange={handleClick}
            />
            {goodsTemplate.propertiesTab}
          </StyledLabel>
        </StyledTabsWrapper>
        <CardTabs activeTab={activeTab} id={id} />
        <StyledPrice>{price}</StyledPrice>
      </StyledGoodsItem>
    </>
  );
}
