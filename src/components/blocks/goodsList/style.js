import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  height: 768px;

  --swiper-scrollbar-size: 10px;

  & .swiper-wrapper .swiper-slide {
    height: 288px;
  }
`;
