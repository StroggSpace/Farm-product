import React from "react";
import { goodsData } from "../../../mocks/goodsData";
import CheckItem from "../../ui/checkItem/CheckItem";
import FinalPrice from "../../ui/finalPrice/FinalPrice";
import Button from "../../ui/button/Button";

export default function Form({ handleCheck, totalPrice }) {
  return (
    <>
      <form action="" method="post">
        {(goodsData.length && (
          <>
            <fieldset>
              <legend>Выберите продукты</legend>
              <ul onClick={handleCheck}>
                {goodsData.map((item) => (
                  <li key={item.id}>
                    <CheckItem title={item.title} id={item.id} />
                  </li>
                ))}
              </ul>
            </fieldset>
            <fieldset>
              <legend>Сделать заказ</legend>
              <input type="text" placeholder="Введите адрес доставки" />
              <FinalPrice price={totalPrice} />
              <Button>Купить</Button>
            </fieldset>
          </>
        )) || <p>Товаров нет в наличии, ожидайте новых поставок!</p>}
      </form>
    </>
  );
}
