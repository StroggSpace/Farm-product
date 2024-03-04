import React, { useEffect, useState } from "react";
import GoodsItem from "../../ui/goodsItem/GoodsItem";
import { SwiperSlide } from "swiper/react";
import { StyledSwiper } from "./style";
import { Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css/bundle";

export default function GoodsList({ slides }) {
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.slideTo(slides.length - 1, 0);
    }
  }, [slides]);

  return (
    <>
      <StyledSwiper
        modules={[Scrollbar, Mousewheel]}
        spaceBetween={30}
        direction="vertical"
        scrollbar={{ draggable: true }}
        mousewheel
        slidesPerView="auto"
        onSwiper={setSwiperRef}
      >
        <div>
          {(slides.length &&
            slides.map((item) => (
              <SwiperSlide key={item.id}>
                <GoodsItem
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                />
              </SwiperSlide>
            ))) || (
            <SwiperSlide>
              <li>В карзине пока пусто...</li>
            </SwiperSlide>
          )}
        </div>
      </StyledSwiper>
    </>
  );
}
