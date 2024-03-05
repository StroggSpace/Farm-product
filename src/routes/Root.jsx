import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import { StyledPageWrapper } from "./style";
import MainPage from "../components/pages/mainPage/MainPage";
import { appRoute } from "../routes/appRoute";

export default function Root() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <StyledPageWrapper>
        {pathname === `${appRoute.MAIN}` && <MainPage />}
        <Outlet />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}
