import React from "react";
import { goodsTemplate, goodsData } from "../../../mocks/goodsData";

export default function CardTabs({ activeTab, id }) {
  const [item] = goodsData.filter((item) => item.id === id);

  switch (activeTab) {
    case "1":
      return (
        <>
          <p>{item.description}</p>
        </>
      );
    case "2":
      return (
        <>
          <dl>
            <dt>{goodsTemplate.weight}</dt>
            <dd>{item.weight}</dd>

            <dt>{goodsTemplate.shelfLife}</dt>
            <dd>{item.shelfLife}</dd>

            <dt>{goodsTemplate.breed}</dt>
            <dd>{item.breed}</dd>

            <dt>{goodsTemplate.origin}</dt>
            <dd>{item.origin}</dd>
          </dl>
        </>
      );
    case "3":
      return (
        <>
          <dl>
            <dt>{goodsTemplate.energyValue}</dt>
            <dd>{item.energyValue}</dd>

            <dt>{goodsTemplate.nutritionalValue}</dt>
            <dd>{item.nutritionalValue}</dd>
          </dl>
        </>
      );
  }
}
