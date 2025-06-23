import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import gliderItems from '../assets/constants/Glider';
import '../components/layout/styles/ReactGlider.css';
import { useSound } from '../context/UseSound';

const SwiperCarousel = ({ onSlideChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const playSlideSound = useSound("/sound/slide.mp3", 0.5);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
      if (index !== 0) {
    playSlideSound();
  }
  };

  const coverflowConfig = {
    rotate: 20,
    stretch: 0,
    depth: 150,
    modifier: 1.5,
    slideShadows: true,
  };

  return (
    <div className="swiper-container" style={{
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        coverflowEffect={coverflowConfig}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        breakpoints={{
          640: {
            spaceBetween: 20,
          },
          1024: {
            spaceBetween: 30,
          },
        }}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper.activeIndex);
          onSlideChange(swiper.activeIndex);
        }}
        onInit={(swiper) => {
          handleSlideChange(swiper.activeIndex);
          onSlideChange(swiper.activeIndex);
        }}
      >
        {gliderItems.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          >
            <img
              src={item.image}
              alt={item.alt || `Project ${item.id}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
