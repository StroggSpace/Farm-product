import React from "react";
import { goodsTemplate, goodsData } from "../../../mocks/goodsData";
import {
  StyledTabsText,
  StyledDescription,
  StyledDl,
  StyledDlWrapper,
} from "./style";

export default function CardTabs({ activeTab, id }) {
  const [item] = goodsData.filter((item) => item.id === id);

  return (
    <>
      <StyledTabsText>
        {activeTab === "1" && (
          <StyledDescription>{item.description}</StyledDescription>
        )}
        {activeTab === "2" && (
          <StyledDl>
            <StyledDlWrapper>
              <dt>{goodsTemplate.weight}</dt>
              <dd>{item.weight}</dd>
            </StyledDlWrapper>
            <StyledDlWrapper>
              <dt>{goodsTemplate.shelfLife}</dt>
              <dd>{item.shelfLife}</dd>
            </StyledDlWrapper>
            <StyledDlWrapper>
              <dt>{goodsTemplate.breed}</dt>
              <dd>{item.breed}</dd>
            </StyledDlWrapper>
            <StyledDlWrapper>
              <dt>{goodsTemplate.origin}</dt>
              <dd>{item.origin}</dd>
            </StyledDlWrapper>
          </StyledDl>
        )}
        {activeTab === "3" && (
          <StyledDl>
            <StyledDlWrapper>
              <dt>{goodsTemplate.energyValue}</dt>
              <dd>{item.energyValue}</dd>
            </StyledDlWrapper>
            <StyledDlWrapper>
              <dt>{goodsTemplate.nutritionalValue}</dt>
              <dd>{item.nutritionalValue}</dd>
            </StyledDlWrapper>
          </StyledDl>
        )}
      </StyledTabsText>
    </>
  );
}
