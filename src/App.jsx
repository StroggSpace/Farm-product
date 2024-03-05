import React from "react";
import Root from "./routes/Root";
import { GlobalStyle } from "./styles.js";
import ScrollToUp from "./components/ui/ScrollToUp";

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToUp />
      <Root />
    </>
  );
}

export default App;
