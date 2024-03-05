import { useRouteError } from "react-router-dom";
import Button from "../../ui/button/Button";
import Title from "../../ui/title/Title";
import { StyledErrorPage, StyledText } from "./style";
import { StyledRoutLink } from "../../ui/StyledRoutLink";
import { appRoute } from "../../../routes/appRoute";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <StyledErrorPage id="error-page">
      <Title level="1">Оооой!</Title>
      <Title level="2">
        <i>{error.statusText || error.message}</i>
      </Title>
      <StyledText>Извините, произошла ошибка.</StyledText>

      <StyledRoutLink to={appRoute.MAIN}>
        <Button>Вернуться на главную страницу</Button>
      </StyledRoutLink>
    </StyledErrorPage>
  );
}
