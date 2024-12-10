import React, { useState } from "react";
//import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
//import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Carousel.module.css";
import "swiper/css/navigation";
import Button from "../Button/Button";
import "./styles.css";
import { display } from "@mui/system";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

function Carousel({ slides, text }) {
  console.log("slides::", slides);

  return (
    <>
      <div className={styles.heading}>
        <div>{text}</div>
        <Button text="Collapse" />
      </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <div className={styles.cards}>
          {slides &&
            slides.map((item) => {
              return (
                <SwiperSlide>
                  <AlbumCard
                    img={item && item.image}
                    follower={item && item.follows}
                    name={item && item.title}
                    key={item.id}
                  />
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
    </>
  );
}

export default Carousel;
