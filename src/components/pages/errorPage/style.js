import styled from "styled-components";

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  margin-top: 50px;

  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.colors.blackText};
`;

export const StyledText = styled.p`
  font-size: ${(props) => props.theme.body.body18.fontSize};
  line-height: ${(props) => props.theme.body.body18.lineHeight};
  font-weight: ${(props) => props.theme.body.body18.fontWeight};
`;
