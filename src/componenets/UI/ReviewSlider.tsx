import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Reviews } from "../../constants/dummy";

const ReviewSlider = ({ reviews }: { reviews: Reviews[] }) => {
  return (
    <div className="mt-[10px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review?.ratingId}>
            <div className="py-[30px] px-5 rounded-3 bg-gray-100 hover:shadow-2xl hover:bg-slate-200 rounded-lg">
              <div className="flex items-center gap-[13px]">
                <img
                  src={review?.profileImg}
                  alt="Profile"
                  className="w-9 h-9 rounded-full"
                />
                <div>
                  <h4 className="text-[16px] leading-[30px] font-semibold text-slate-900">
                    {review?.name}
                  </h4>
                  <div className="flex items-center gap-[2px]"></div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-slate-700 font-[400]">
                {review?.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ReviewSlider;
