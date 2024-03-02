import React from "react";
import { goodsTemplate } from "../../../mocks/goodsData";
import CardTabs from "../cardTabs/CardTabs";

export default function GoodsItem({ image, title, price, id }) {
  return (
    <>
      <li>
        <img src={image} alt="Фото продукта" />
        <h4>{title}</h4>
        <label>
          <input type="radio" name={id} defaultChecked />
          {goodsTemplate.descriptionTab}
        </label>
        <label>
          <input type="radio" name={id} />
          {goodsTemplate.featuresTab}
        </label>
        <label>
          <input type="radio" name={id} />
          {goodsTemplate.propertiesTab}
        </label>
        <CardTabs />
        <p>{price}</p>
      </li>
    </>
  );
}
