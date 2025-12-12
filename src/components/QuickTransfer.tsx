import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Avatar from "./Avatar";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperPlane } from "@/assets/icons";

function QuickTransfer() {
  return (
    <div className="flex flex-col justify-between  bg-white rounded-[25px] py-6 px-4 md:py-[25px] md:px-[25px] lg:py-[35px] md:h-[276px]">
      {/* Swiper Section */}
      <div className="w-full max-w-[350px] md:max-w-[250px] lg:max-w-[350px] mx-auto mb-6 md:mb-4 relative px-8 md:px-10">
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <MdOutlineArrowBackIos className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
        </button>

        <Swiper
          className="mySwiper !w-full"
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
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
          <SwiperSlide className="!h-fit">
            <Avatar sizeClass="mx-auto w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]" />
            <p className="flex justify-center text-[12px] mt-[12px]">name</p>
          </SwiperSlide>
        </Swiper>

        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <MdArrowForwardIos className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
        </button>
      </div>

      {/* Input Section */}
      <div className="flex gap-4 md:gap-x-[27px] items-center md:flex-col lg:flex-row ">
        <p className="text-[#718EBF] text-sm  text-center ">Write Amount</p>
        <div className="flex-1  relative">
          <Input
            type="number"
            placeholder="525.50"
            className="bg-[#F5F7FA] rounded-[40px] max-w-[265px] w-full  h-[50px] pl-6  text-sm 
            [appearance:textfield] 
            [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none"
          />
          <Button
            type="submit"
            variant="outline"
            className="absolute right-0 top-0 bg-[#1814F3] rounded-[40px] w-[100px]  h-[50px] text-white text-sm  hover:bg-[#1814F3] hover:text-white"
          >
            Send
            <PaperPlane className="!w-5 !h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuickTransfer;
