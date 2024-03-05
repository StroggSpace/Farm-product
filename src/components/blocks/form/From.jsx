import React, { useState, useEffect } from "react";
import { goodsData } from "../../../mocks/goodsData";
import CheckItem from "../../ui/checkItem/CheckItem";
import FinalPrice from "../../ui/finalPrice/FinalPrice";
import Button from "../../ui/button/Button";
import {
  StyledForm,
  StyledFieldset,
  StyledLegend,
  StyledList,
  StyledListItem,
  StyledAddress,
} from "./style";

export default function Form({ handleCheck, totalPrice }) {
  // Отключение покупки
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    totalPrice > 0 ? setIsDisabled(false) : setIsDisabled(true);
  }, [totalPrice]);

  // Вывод заказа
  const handleSubmit = (event) => {
    event.preventDefault();
    const address = event.target.address.value;
    alert(
      `Ваш заказ на ${totalPrice} руб. принят!` +
        "\n" +
        "Спасибо за покупку!" +
        "\n" +
        `Ожидайте доставку по адресу: ${address}`
    );
  };

  return (
    <>
      <StyledForm action="" method="post" onSubmit={handleSubmit}>
        {(goodsData.length && (
          <>
            <StyledFieldset>
              <StyledLegend>Выберите продукты</StyledLegend>
              <StyledList onClick={handleCheck}>
                {goodsData.map((item) => (
                  <StyledListItem key={item.id}>
                    <CheckItem title={item.title} id={item.id} />
                  </StyledListItem>
                ))}
              </StyledList>
            </StyledFieldset>
            <StyledFieldset>
              <StyledLegend>Сделать заказ</StyledLegend>
              <StyledAddress
                type="text"
                placeholder="Введите адрес доставки"
                name="address"
                required
              />
              <FinalPrice price={totalPrice} />
              <Button
                disabled={isDisabled}
                style={
                  (isDisabled && { opacity: 0.5, cursor: "not-allowed" }) || {}
                }
              >
                Купить
              </Button>
            </StyledFieldset>
          </>
        )) || (
          <p style={{ margin: 0 }}>
            Товаров нет в наличии, ожидайте новых поставок!
          </p>
        )}
      </StyledForm>
    </>
  );
}
