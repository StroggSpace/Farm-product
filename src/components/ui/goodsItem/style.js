import styled from "styled-components";

export const StyledGoodsItem = styled.div`
  height: 248px;
  width: 866px;

  display: grid;
  grid-template-columns: 248px 1fr;
  column-gap: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
`;

export const StyledGoodsItemImg = styled.img`
  grid-row: 1 / 5;
  grid-column: 1 / 2;
`;

export const StyledTabsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 2 / -1;
  gap: 20px;

  & input {
    display: none;
  }
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  padding: 6px 8px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out;

  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.green : theme.colors.lightGray};

  color: ${({ checked, theme }) =>
    checked ? theme.colors.white : theme.colors.blackText};
  font-size: ${(props) => props.theme.body.body14.fontSize};
  line-height: ${(props) => props.theme.body.body14.lineHeight};
  font-weight: ${(props) => props.theme.body.body14.fontWeight};
`;

export const StyledPrice = styled.p`
  background-color: ${(props) => props.theme.colors.lightBlue};

  width: fit-content;
  padding: 4px 8px;
  margin: 0;
  font-weight: ${(props) => props.theme.body.body14Bold.fontWeight};
  font-size: ${(props) => props.theme.body.body14Bold.fontSize};
  line-height: ${(props) => props.theme.body.body14Bold.lineHeight};

  align-self: end;
`;
