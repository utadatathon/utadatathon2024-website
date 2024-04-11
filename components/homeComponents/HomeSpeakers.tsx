import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import KeynoteSpeaker from "./KeynoteSpeaker";

export default function HomeSpeakers(props: {
  keynoteSpeakers: KeynoteSpeaker[];
}) {
  const [speakers, setSpeakers] = useState<KeynoteSpeaker[]>([]);

  useEffect(() => {
    setSpeakers(props.keynoteSpeakers);
  }, []);

  return (
    speakers.length != 0 && (
      <section className=" overflow-x-auto min-h-[24rem]">
        <div className="flex items-start justify-center font-bold md:p-12 p-12 md:text-4xl text-2xl my-4 text-complementary text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent custom-font">
          Speakers <span className="custom-font-3 mx-2"> & </span>Judges
        </div>

        <div className="sm:w-[90%] w-[85%] mx-auto p-4">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={10}
            // Responsive breakpoints
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              620: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              840: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {speakers.map(({ name, subtitle, description, fileName }, idx) => (
              <SwiperSlide key={idx}>
                <KeynoteSpeaker
                  name={name}
                  subtitle={subtitle}
                  description={description}
                  imageLink={fileName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )
  );
}
