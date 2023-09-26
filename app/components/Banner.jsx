"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import Image from "next/image";

export default function Banner() {
  const images = ["/2.jpg", "/1.jpg", "/3.jpg"];
  const imageText = [
    "Welcome to my Portfolio",
    "Designing with Passion and Precision",
    "Let's Build Something Amazing Together",
  ];
  SwiperCore.use([Autoplay]);

  return (
    <div
      className="relative w-[full
    ] h-[800px]"
    >
      <div className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                width={800}
                height={800}
                decoding="async"
                fetchPriority="high"
                priority
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-contain sm:object-scale-down"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-sm sm:text-3xl text-[#f5f5f5] hover:glow">
                  {imageText[index]}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
