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
    "Welcome To My Portfolio",
    "Designing With Passion And Precision",
    "Let's Build Something Amazing Together",
  ];
  SwiperCore.use([Autoplay]);

  return (
    <div
      className="relative w-[full
    ] h-[800px]"
    >
      dw
    </div>
  );
}
