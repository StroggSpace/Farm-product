import styled from "styled-components";

export const StyledSubtitle = styled.p`
  margin: 20px 0 8px;

  font-weight: ${(props) => props.theme.body.body14.fontWeight};
  font-size: ${(props) => props.theme.body.body14.fontSize};
  line-height: ${(props) => props.theme.body.body14.lineHeight};
`;

export const StyledPrice = styled.p`
  margin: 0;
  margin-bottom: 32px;
  font-weight: ${(props) => props.theme.headers.h4.fontWeight};
  font-size: ${(props) => props.theme.headers.h4.fontSize};
  line-height: ${(props) => props.theme.headers.h4.lineHeight};
`;
