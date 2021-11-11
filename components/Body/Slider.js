// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
//
import { useEffect } from "react";

function Slider({ img }) {
  const images = [];
  useEffect(() => {
    for (var i = 0; i < 10; i++) {
      images.push("https://picsum.photos/" + (i + 1) + "/237/200/300");
    }
  });
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, id) => {
          <SwiperSlide id={id}>
            <Image src={image} width={200} height={300} />
          </SwiperSlide>;
        })}

        <SwiperSlide>slide 1</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
