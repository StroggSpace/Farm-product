import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  margin-left: calc(100vw - 100%);
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.body.body18.fontSize};
  line-height: ${(props) => props.theme.body.body18.lineHeight};
  font-weight: ${(props) => props.theme.body.body18.fontWeight};
  color: ${(props) => props.theme.colors.blackText};
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

li {
  list-style: none;
}
`;
