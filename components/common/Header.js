import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/autoplay";
// import "swiper/css/effect-cards";
// import { Autoplay, EffectCreative } from "swiper";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import { motion } from "framer-motion";

import Image from "next/image";
import { Button, ButtonNav } from "../reusable/Button";

function Header() {
  const images = ["/aboutimg1.jpg", "/aboutimg2.jpg", "/contactimg.jpg"];
  let key = 0;
  return (
    <div className="rlative header h-full pb-6 lg:pb-0 lg:h-[500px] flex flex-col lg:flex-row gap-5 pt-5">
      <div className="z-10 flex-1 flex items-center justify-center flex-col relative">
        <div className="h-60 w-60 lg:h-72 lg:w-72 rounded-full absolute top-10 left-10 bg-amber-200 dark:bg-iyellow mix-blend-multiply filter blur-xl dark:opacity-50 opacity-70 animate-blob"></div>
        <div className="h-60 w-60 lg:h-72 lg:w-72 rounded-full absolute top-10 right-10 bg-lime-200 dark:bg-iblue mix-blend-multiply filter blur-xl dark:opacity-50 opacity-70 animate-blob  animation-delay-2000"></div>
        <div className="h-60 w-60 lg:h-72 lg:w-72 rounded-full absolute bottom-20 left-28 bg-pink-200 dark:bg-ired mix-blend-multiply filter blur-xl dark:opacity-50 opacity-70 animate-blob animation-delay-4000"></div>

        <div className="w-[80%] z-20">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              ease: "easeOut",
              duration: 0.5,
            }}
            className="z-50 text-5xl lg:text-7xl font-bold"
          >
            Switch To{" "}
          </motion.h1>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              ease: "easeOut",
              duration: 0.5,
            }}
            className="text-5xl lg:text-7xl font-bold"
          >
            <span className="text-iyellow">Solar</span> Energy
          </motion.h1>
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.1,
              type: "spring",
              stiffness: 100,
              ease: "easeOut",
              duration: 0.5,
            }}
            className="text-justify mt-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            tempore rerum excepturi dolorem! Illo nesciunt repudiandae veritatis
            numquam placeat ipsum! Quos, accusamus ipsa!
          </motion.p>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 1.6,
              type: "spring",
              stiffness: 100,
              ease: "easeOut",
              duration: 0.5,
            }}
            className="flex"
          >
            <ButtonNav />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1.6,
          type: "spring",
          stiffness: 150,
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex flex-1 "
      >
        {/* <div className="my-auto shadow mx-auto rounded-xl  w-[85%] lg:h-[290px] lg:w-[70%] overflow-hidden ">
          <Image
            quality={1}
            layout="fill"
            src="/aboutimg1.jpg"
            objectFit="cover"
            className="object-cover"
          />
        </div> */}
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 0.33,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          {images.map((item) => (
            <SwiperSlide>
              <Image
                alt="This is about basni solar"
                key={key++}
                quality={20}
                layout="fill"
                src={item}
                objectFit="cover"
                className="object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
export default Header;

/*

<Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay,EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
*/
