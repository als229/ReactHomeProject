import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SlideImg } from "./ImgSlider.styled";
import SlideImgCard from "./imgCard/SlideImgCard";

const ImageSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ width: "100%", height: "400px", backgroundColor: "#ffdfba" }}
      >
        <SwiperSlide>
          <SlideImgCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
