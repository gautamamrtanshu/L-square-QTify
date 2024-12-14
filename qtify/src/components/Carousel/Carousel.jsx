import React, { useState } from "react";
import styles from "./Carousel.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./styles.css";

function Carousel({ slides, uniqueId1, uniqueId2 }) {
  const nextButtonClass = `custom-next-${uniqueId1}`;
  const prevButtonClass = `custom-prev-${uniqueId2}`;

  return (
    <div>
      <div className={styles.carouselWrapper}>
        <button className={prevButtonClass} id={styles.nextButton}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 7.9375C18.375 7.375 17.4375 7.375 16.875 7.9375L9.875 14.9375C9.625 15.25 9.5 15.625 9.5 16C9.5 16.4375 9.625 16.8125 9.9375 17.0625L16.9375 24.0625C17.5 24.6875 18.4375 24.6875 19 24.0625C19.625 23.5 19.625 22.5625 19 22L13.0625 16L19 10.0625C19.625 9.5 19.625 8.5625 19 7.9375ZM16 0C7.125 0 0 7.1875 0 16C0 24.875 7.125 32 16 32C24.8125 32 32 24.875 32 16C32 7.1875 24.8125 0 16 0ZM16 29C8.8125 29 3 23.1875 3 16C3 8.875 8.8125 3 16 3C23.125 3 29 8.875 29 16C29 23.1875 23.125 29 16 29Z"
              fill="white"
            />
            <path
              d="M32 16C32 7.1875 24.8125 0 16 0C7.125 0 0 7.1875 0 16C0 24.875 7.125 32 16 32C24.8125 32 32 24.875 32 16ZM16.9375 8.4375C17.5 7.875 18.4375 7.875 19 8.4375C19.625 9.0625 19.625 10 19 10.5625L13.5625 16L19 21.4375C19.625 22.0625 19.625 23 19 23.5625C18.4375 24.1875 17.5 24.1875 16.9375 23.5625L10.4375 17.0625C9.8125 16.5 9.8125 15.5625 10.4375 15L16.9375 8.4375Z"
              fill="#34C94B"
            />
          </svg>
        </button>
        <Swiper
          navigation={{
            nextEl: `.${nextButtonClass}`,
            prevEl: `.${prevButtonClass}`,
          }}
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={40}
          className="mySwiper"
        >
          {slides &&
            slides.map((item) => (
              <SwiperSlide key={item.id}>
                <AlbumCard
                  img={item.image}
                  follower={item.follows}
                  name={item.title}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <button className={nextButtonClass} id={styles.nextButton}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7.9375C14.375 7.375 13.4375 7.375 12.875 7.9375C12.25 8.5625 12.25 9.5 12.875 10.0625L18.875 16L12.9375 22C12.3125 22.5625 12.3125 23.5 12.9375 24.0625C13.5 24.6875 14.4375 24.6875 15.0625 24.0625L22.0625 17.0625C22.3125 16.8125 22.5 16.4375 22.5 16C22.5 15.625 22.3125 15.25 22 15L15 7.9375ZM16 0C7.125 0 0 7.1875 0 16C0 24.875 7.125 32 16 32C24.8125 32 32 24.875 32 16C32 7.1875 24.8125 0 16 0ZM16 29C8.8125 29 3 23.1875 3 16C3 8.875 8.8125 3 16 3C23.125 3 29 8.875 29 16C29 23.1875 23.125 29 16 29Z"
              fill="white"
            />
            <path
              d="M0 16C0 24.875 7.125 32 16 32C24.8125 32 32 24.875 32 16C32 7.1875 24.8125 0 16 0C7.125 0 0 7.1875 0 16ZM15.0625 23.5625C14.4375 24.1875 13.5 24.1875 12.9375 23.5625C12.3125 23 12.3125 22.0625 12.9375 21.5L18.375 16.0625L12.9375 10.625C12.3125 10 12.3125 9.0625 12.9375 8.5C13.5 7.875 14.4375 7.875 15.0625 8.5L21.5625 14.9375C22.125 15.5625 22.125 16.5 21.5625 17.0625L15.0625 23.5625Z"
              fill="#34C94B"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
