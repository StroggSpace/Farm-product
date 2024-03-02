import React from "react";
import Header from "../header/Header";
import MainPage from "../../pages/mainPage/MainPage";
import CatalogPage from "../../pages/catalogPage/CatalogPage";
import Footer from "../footer/Footer";
import { StyledPageWrapper } from "./style";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <StyledPageWrapper>
        {/* <MainPage /> */}
        <CatalogPage />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}
