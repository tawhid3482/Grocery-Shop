import { Swiper, SwiperSlide } from "swiper/react";
import pic2 from "../../../assets/Banner/banner2.png";
import pic1 from "../../../assets/Banner/banner1.png";
import pic3 from "../../../assets/Banner/banner3.png";
import pic4 from "../../../assets/Banner/banner4.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
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
          <img src={pic1} alt="banner" className="w-full md:h-[450px] lg:h-[500px]" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="banner" className="w-full md:h-[450px] lg:h-[500px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="banner" className="w-full md:h-[450px] lg:h-[500px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt="banner" className="w-full md:h-[450px] lg:h-[500px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
