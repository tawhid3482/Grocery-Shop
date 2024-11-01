import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../../assets/Carousel/pic4.png";
import pic2 from "../../../assets/Carousel/pic5.png";
import pic3 from "../../../assets/Carousel/pic6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const VerticalCarousel = () => {
  return (
    <Swiper
      direction="vertical" // Set the direction to vertical
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper my-3 p-2"
    >
      <SwiperSlide>
        <img src={pic1} alt="banner" className=" md:h-[550px] w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic2} alt="banner" className=" md:h-[550px] w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic3} alt="banner" className=" md:h-[550px] w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default VerticalCarousel;
