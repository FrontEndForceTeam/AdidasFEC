import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function Carousel(props) {
  const testData = [
    { img: 1 },
    { img: 2 },
    { img: 3 },
    { img: 4 },
    { img: 5 },
    { img: 6 },
    { img: 7 },
    { img: 8 },
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroup={3}
        // grabCursor={true}
        scrollbar={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={styles["swiper"]}
      >
        {testData.map((image) => {
          return (
            <SwiperSlide className="test">
              <div className={styles["product-card"]}>{image.img}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <svg
        ref={navigationNextRef}
        className={styles["carousel-btn-next"]}
        onClick={() => {
          console.log("forward");
        }}
      >
        <path
          d="m17.59 7 5 5-5 5M0 12h22"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></path>
      </svg>
      <svg
        ref={navigationPrevRef}
        className={styles["carousel-btn-prev"]}
        onClick={() => {
          console.log("backward");
        }}
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-iterlimit="10"
          strokeWidth="2"
          d="m6.4 17-5-5 5-5M2 12h22"
        ></path>
      </svg>
    </>
  );
}

function CarouselElement(props) {
  return (
    <div className={styles["carousel-item"]}>
      <div
        className={styles["card-top"]}
        style={{ backgroundImage: props.image }}
      >
        <p className={styles["price"]}>$10</p>
      </div>
      <div className={styles["card-bottom"]}>
        <h5>title</h5>
        <p>description</p>
      </div>
    </div>
  );
}
