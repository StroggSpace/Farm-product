import React, { useState, useEffect } from "react";
import Form from "../../blocks/form/From";
import GoodsList from "../../blocks/goodsList/GoodsList";
import { goodsData } from "../../../mocks/goodsData";
import { StyledCatalogWrapper } from "./style.js";

export default function CatalogPage() {
  // массив с id выбранных продуктов
  const [selectedItems, setSelectedItems] = useState([]);
  // массив объектов с данными о выбранных продуктах
  const [showSlide, setShowSlide] = useState([]);
  // Стоимость выбранных продуктов
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Добавляем карточки выбранных продуктов
    selectedItems.length &&
      selectedItems.forEach((itemId) => {
        goodsData.forEach((good) => {
          if (good.id === itemId && !showSlide.includes(good)) {
            setShowSlide((prev) => [...prev, good]);
          }
        });
      });
    setShowSlide((prev) =>
      prev.filter((item) => selectedItems.includes(item.id))
    );
  }, [selectedItems]);

  useEffect(() => {
    // Считаем общую стоимость выбранных продуктов
    setTotalPrice(showSlide.reduce((sum, item) => sum + item.priceCount, 0));
  }, [showSlide]);

  const handleCheck = (event) => {
    setSelectedItems((prevItems) => {
      if (event.target.id && !prevItems.includes(event.target.id)) {
        return [...prevItems, event.target.id];
      } else {
        return prevItems.filter((item) => item !== event.target.id);
      }
    });
  };

  return (
    <>
      <StyledCatalogWrapper>
        <Form handleCheck={handleCheck} totalPrice={totalPrice} />
        <GoodsList slides={showSlide} />
      </StyledCatalogWrapper>
    </>
  );
}
