import React from "react";
import "./style.css";
import Title, { TitleSize } from "../../ui/title/Title";
import ComparisonItem from "../../ui/comparison-item/ComparisonItem";
import comparisonData from "../../../mocks/comparisonData";
import Button from "../../ui/button/Button";

export default function ComparisonList() {
  return (
    <>
      <section className="comparison">
        <Title size={TitleSize.DEFAULT}>
          Почему фермерские продукты лучше?
        </Title>

        <ul className="comparison-list">
          {comparisonData.length &&
            comparisonData.map((item) => (
              <ComparisonItem
                key={item.id}
                logo={item.logo}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
              />
            ))}
        </ul>

        <Button>Купить</Button>
      </section>
    </>
  );
}
