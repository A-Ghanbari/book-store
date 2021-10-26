import { Col, Row } from "antd";
import classes from "./Home.module.scss";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

export default function HomeSwiper({ books }) {
  return (
    <div>
      <Swiper
        className={classes.swiper}
        slidesPerView={5}
        pagination={true}
        autoplay={{
          delay: 3000,
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.sys.id} className={classes.slide}>
            <Link href={`/book/${book.sys.id}`}>
              <a>
                <img width="100%" src={book.fields.cover.fields.file.url} />
                <h3>{book.fields.title}</h3>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
