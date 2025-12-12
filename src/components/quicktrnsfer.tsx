import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

function QuickTransfer() {
  return (
    <div className="bg-white rounded-[25px] py-6 px-4 md:py-[35px] md:px-[25px] h-auto md:h-[276px]">
      {/* Swiper Section */}
      <div className="w-full max-w-full md:max-w-[350px] mx-auto mb-6 md:mb-4 relative">
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <MdOutlineArrowBackIos className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
        </button>

        <Swiper
          className="mySwiper !w-full !px-8 md:!px-10"
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={10}
          centeredSlides={false}
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
          }}
        >
          {[...Array(9)].map((_, i) => (
            <SwiperSlide key={i} className="!h-fit">
              <div className="flex flex-col items-center gap-2">
                <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                <p className="text-xs md:text-sm font-medium hidden sm:block">
                  User {i + 1}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <MdArrowForwardIos className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
        </button>
      </div>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-x-[27px] items-stretch sm:items-center">
        <p className="text-[#718EBF] text-sm md:text-[16px] sm:w-[103px] text-center sm:leading-[50px]">
          Write Amount
        </p>
        <div className="flex-1 sm:flex-initial relative">
          <input
            type="number"
            placeholder="525.50"
            className="bg-[#F5F7FA] rounded-[40px] w-full sm:w-[265px] h-[50px] pl-6 pr-[135px] text-sm md:text-base
            [appearance:textfield] 
            [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none
            focus:outline-none focus:ring-2 focus:ring-[#1814F3]"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bg-[#1814F3] rounded-[40px] w-[125px] h-[50px] text-white text-sm md:text-[16px] hover:bg-[#1410d4] transition-colors flex items-center justify-center gap-2"
          >
            Send
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              className="w-5 h-5 md:w-[26px] md:h-[23px]"
            >
              <path
                d="M25 1L1 11.5L10 13.5L13 22L25 1Z"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuickTransfer;
