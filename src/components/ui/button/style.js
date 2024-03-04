import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  min-height: 60px;
  min-width: ${(props) => (props.minWidth ? `${props.minWidth}px` : "260px")};
  border: none;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.body.body18.fontSize};
  line-height: 58px;
  font-weight: ${(props) => props.theme.body.body18Bold.fontWeight};
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.darkOrange};
  }

  &:hover {
    ${(props) =>
      props.disabled ? "" : `box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14)`};
  }

  &:disabled {
    background-color: #b3b3b3;
  }
`;
