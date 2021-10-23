import classes from "./Home.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

export default function TopSlider() {
  return (
    <div className={classes.topslider}>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide className={classes.slide1}>
          <h1>enjoy the silence in our reading room</h1>
        </SwiperSlide>
        <SwiperSlide className={classes.slide2} />
        <SwiperSlide className={classes.slide3}>
          <h1>
            {" "}
            books are not made for furniture , but there is nothing else that so
            beautifully furnishes a house
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
