import React from "react";
import Logo from "../../ui/logo/Logo";
import Nav from "../nav/Nav";
import "./style.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Logo />
        </div>
        <Nav />
      </header>
    </>
  );
}
