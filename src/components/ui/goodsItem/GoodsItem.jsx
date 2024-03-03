import React, { useState } from "react";
import { goodsTemplate } from "../../../mocks/goodsData";
import CardTabs from "../cardTabs/CardTabs";

export default function GoodsItem({ image, title, price, id }) {
  const [activeTab, setActiveTab] = useState("1");

  const handleClick = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <>
      <li>
        <img src={image} alt="Фото продукта" />
        <h4>{title}</h4>
        <label>
          <input
            type="radio"
            name={id}
            value="1"
            checked={activeTab === "1" ? true : false}
            onChange={handleClick}
          />
          {goodsTemplate.descriptionTab}
        </label>
        <label>
          <input
            type="radio"
            name={id}
            value="2"
            checked={activeTab === "2" ? true : false}
            onChange={handleClick}
          />
          {goodsTemplate.featuresTab}
        </label>
        <label>
          <input
            type="radio"
            name={id}
            value="3"
            checked={activeTab === "3" ? true : false}
            onChange={handleClick}
          />
          {goodsTemplate.propertiesTab}
        </label>
        <CardTabs activeTab={activeTab} id={id} />
        <p>{price}</p>
      </li>
    </>
  );
}
