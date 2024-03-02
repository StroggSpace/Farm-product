import React from "react";
import GoodsItem from "../../ui/goodsItem/GoodsItem";

export default function GoodsList({ slides }) {
  return (
    <>
      <ul>
        {(slides.length &&
          slides.map((item) => (
            <GoodsItem
              image={item.image}
              title={item.title}
              price={item.price}
              id={item.id}
              key={item.id}
            />
          ))) || <li>В карзине пока пусто...</li>}
      </ul>
    </>
  );
}
