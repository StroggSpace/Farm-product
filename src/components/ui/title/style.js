import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.headers[props.as].fontSize};
  line-height: ${(props) => props.theme.headers[props.as].lineHeight};
  font-weight: ${(props) => props.theme.headers[props.as].fontWeight};
`;
