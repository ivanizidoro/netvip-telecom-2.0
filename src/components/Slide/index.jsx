import { useState } from "react";
import { Container, ContianerSlide } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

const data = [
  { id: 1, image: "/FRENTE--LOJA.jpg" },
  { id: 2, image: "https://www.designi.com.br/images/preview/10280847.jpg" },
  { id: 3, image: "https://www.designi.com.br/images/preview/10045449.jpg" },
  { id: 4, image: "https://www.designi.com.br/images/preview/10028403.jpg" },
  {
    id: 5,
    image:
      "https://img.freepik.com/psd-premium/template-banner-horizontal-internet-500-mega-ofertas-no-brasil_379939-79.jpg",
  },
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
