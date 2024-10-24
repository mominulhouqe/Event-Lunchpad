import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import lenvo from "@/assets/lenovo.png";
import samsung from "@/assets/samsung.png";
import slack from "@/assets/slack.jpeg";

const Sponsor = () => {
  return (
    <>
      <div className="text-center my-8">
        <h4 className="font-medium mb-12">
          We have <span className="text-blue-500">23k+</span> Satisfied &
          Trusted Customers
        </h4>
        <Swiper
          spaceBetween={3}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <img className="w-24 h-24 fill-slate-400" src={lenvo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-24 fill-slate-400" src={samsung} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-24 fill-slate-400" src={slack} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-24 fill-slate-400" src={lenvo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-24 fill-slate-400" src={samsung} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-24 fill-slate-400" src={slack} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-24 fill-slate-400" src={lenvo} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sponsor;
