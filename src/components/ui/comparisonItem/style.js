import styled from "styled-components";

export const StyledCard = styled.article`
  padding: 20px;
  padding-right: 60px;
  min-height: 197px;
  background-color: ${(props) => (props.$isNegative ? "#F8DDD7" : "#E1EDCE")};
`;

export const StyledCardTitle = styled.span`
  color: #ffffff;
  padding: 2px 10px;
  width: fit-content;
  font-size: 14px;
  background-color: ${(props) => (props.$isNegative ? "#F75531" : "#88AA4D")};
`;

export const StyledCardSubtitle = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.body.body18Bold.fontSize};
  line-height: ${(props) => props.theme.body.body18Bold.lineHeight};
  font-weight: ${(props) => props.theme.body.body18Bold.fontWeight};
`;

export const StyledCardHeader = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  grid-template-rows: repeat(2, 28px);
  column-gap: 20px;
  align-items: center;
`;
export const StyledCardIcon = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
`;
