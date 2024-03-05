import React from "react";
import { StyledSection, StyledList } from "./style.js";
import Title from "../../ui/title/Title";
import ComparisonItem from "../../ui/comparisonItem/ComparisonItem.jsx";
import comparisonData from "../../../mocks/comparisonData";
import Button from "../../ui/button/Button";
import { StyledRoutLink } from "../../ui/StyledRoutLink";
import { AppRoutes } from "../../../routes/AppRoutes";
export default function ComparisonList() {
  return (
    <>
      <StyledSection>
        <Title level={2}>Почему фермерские продукты лучше?</Title>

        <StyledList>
          {comparisonData.length &&
            comparisonData.map((item) => (
              <ComparisonItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                isNegative={item.isNegative}
                id={item.id}
              />
            ))}
        </StyledList>

        <StyledRoutLink to={AppRoutes.CATALOG}>
          <Button>Купить</Button>
        </StyledRoutLink>
      </StyledSection>
    </>
  );
}
