import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../../assets/Carousel/pic1.jpeg";
import pic2 from "../../../assets/Carousel/pic2.jpeg";
import pic3 from "../../../assets/Carousel/pic3.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={pic1} alt="banner" className="md:h-[400px]" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="banner" className="md:h-[400px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="banner" className="md:h-[400px]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
