import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProCards from "./ProCards";

const CardSwiper = ({ product }) => {
  // Filter products dynamically based on the 'featured' field
  const filterProduct = product?.filter(
    (proCard) => proCard?.featured === "on sale"
  );

  return (
    <div className="my-4 ml-10 md:ml-16 lg:ml-8">
      <Swiper
        slidesPerView={3} // Default slides per view
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay configuration
        pagination={{ clickable: true }} // Enable pagination dots
        breakpoints={{
          350: { slidesPerView: 1 }, // 1 slide for small screens
          760: { slidesPerView: 2 }, // 2 slides for medium screens
          1024: { slidesPerView: 3 }, // 3 slides for large screens
        }}
        modules={[Navigation, Pagination, Autoplay]} // Import required Swiper modules
        className="mySwiper"
      >
        {filterProduct && filterProduct.length > 0 ? (
          filterProduct.map((proCards) => (
            <SwiperSlide key={proCards.id}>
              <ProCards proCards={proCards} />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Loading or No Data Available
          </p>
        )}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
