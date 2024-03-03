import React from "react";
import GoodsItem from "../../ui/goodsItem/GoodsItem";
import { SwiperSlide } from "swiper/react";
import { StyledSwiper } from "./style";
import { Scrollbar, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css/bundle";

export default function GoodsList({ slides, setSwiperRef }) {
  return (
    <>
      <StyledSwiper
        onSwiper={setSwiperRef}
        modules={[Scrollbar, Mousewheel, FreeMode]}
        spaceBetween={30}
        direction="vertical"
        scrollbar={{ draggable: true }}
        mousewheel
        freeMode={true}
      >
        <ul>
          {(slides.length &&
            slides.map((item) => (
              <SwiperSlide key={item.id}>
                <GoodsItem
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  key={item.id}
                />
              </SwiperSlide>
            ))) || (
            <SwiperSlide>
              <li>В карзине пока пусто...</li>
            </SwiperSlide>
          )}
        </ul>
      </StyledSwiper>
    </>
  );
}
