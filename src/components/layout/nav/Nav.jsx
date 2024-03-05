import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../ui/button/Button";
import { StyledRoutLink } from "../../ui/StyledRoutLink";
import { AppRoutes } from "../../../routes/AppRoutes";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <>
      {(pathname === AppRoutes.CATALOG && (
        <StyledRoutLink to={AppRoutes.MAIN}>
          <Button
            style={{
              backgroundColor: "#fff",
              color: "#333",
              textAlign: "end",
              minWidth: "80px",
            }}
          >
            Главная
          </Button>
        </StyledRoutLink>
      )) || (
        <StyledRoutLink to={AppRoutes.CATALOG}>
          <Button>Каталог</Button>
        </StyledRoutLink>
      )}
    </>
  );
}
