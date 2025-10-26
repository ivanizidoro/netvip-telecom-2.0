import { useState } from "react";
import { Container, ContianerSlide } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

const data = [
  { id: 1, image: "/FRENTE--LOJA.jpg" },
];

export function Slide() {
  const [sliderPreView, setSliderPreView] = useState(1);

  return (
    <Container>
      <ContianerSlide>
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          slidesPerView={sliderPreView}
          pagination={{ clickable: true }}
          autoplay
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slider" className="slider-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContianerSlide>
    </Container>
  );
}
