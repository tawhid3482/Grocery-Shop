import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

// Import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Brands = ({ brand }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // Change image every 2 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        breakpoints={{
          // Define breakpoints for responsiveness
          350: {
            slidesPerView: 2, // 1 slide per view on small screens
          },
          768: {
            slidesPerView: 4, // 2 slides per view on medium screens
          },
          1024: {
            slidesPerView: 4, // 3 slides per view on large screens
          },
         
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper my-0"
      >
        {brand?.map((brand) => (
          <SwiperSlide key={brand.id}>
            <img src={brand.img} alt={`Brand ${brand.id}`} className='w-52 h-48 object-contain border p-2' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
