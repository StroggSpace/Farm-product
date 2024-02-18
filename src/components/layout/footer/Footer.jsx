import React from "react";
import Logo from "../../ui/logo/Logo";
import Copyright from "../../ui/copyright/Copyright";
import "./style.css";

export default function Footer() {
  return (
    <>
      <header className="footer">
        <div className="footer__logo">
          <Logo />
        </div>
        <Copyright />
      </header>
    </>
  );
}
