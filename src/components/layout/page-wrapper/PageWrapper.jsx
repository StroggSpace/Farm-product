import React from "react";
import Header from "../header/Header";
import MainPage from "../../pages/main-page/MainPage";
import Footer from "../footer/Footer";
import "./style.css";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage />
      </main>
      <Footer />
    </>
  );
}
