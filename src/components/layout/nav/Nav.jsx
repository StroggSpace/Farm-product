import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../ui/button/Button";
import { StyledRoutLink } from "../../ui/StyledRoutLink";
import { appRoute } from "../../../routes/appRoute";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <>
      {(pathname === "/catalog" && (
        <StyledRoutLink to={import.meta.env.BASE_URL}>
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
        <StyledRoutLink to="/catalog">
          <Button>Каталог</Button>
        </StyledRoutLink>
      )}
    </>
  );
}
