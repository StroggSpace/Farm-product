import React from "react";
import Header from "../header/Header";
import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer/Footer";
import { StyledPageWrapper } from "./style";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <StyledPageWrapper>
        <MainPage />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}
