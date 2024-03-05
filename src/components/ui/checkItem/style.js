import styled from "styled-components";
import Check from "../../../assets/Check.svg?react";

export const StyledCheckItemLabel = styled.label`
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
    background-color: ${({ checked, theme }) =>
      checked ? theme.colors.orange : theme.colors.lightGray};
    transition: 0.2s ease-in-out;
  }
`;

export const StyledCheckItemInput = styled.input`
  display: none;
`;

export const StyledCheck = styled(Check)`
  display: ${({ checked }) => (checked ? "block" : "none")};
  position: absolute;
  top: 5px;
  right: 4px;
  z-index: 1;
`;
