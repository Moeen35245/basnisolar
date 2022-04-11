// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/autoplay";
// import "swiper/css/effect-cards";
// import { Autoplay, EffectCreative } from "swiper";
// import "swiper/css/effect-cube";
// import "swiper/css/pagination";
// import { EffectCube, Pagination } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { wrap } from "@popmotion/popcorn";
import { ButtonNav } from "../reusable/Button";

const variants = {
  enter: function (direction) {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    x: 0,
    opacity: 1,
  },
  exit: function (direction) {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 1000000000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Header() {
  const images = ["/aboutimg1.jpg", "/aboutimg2.jpg", "/contactimg.jpg"];
  let key = 0;

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
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
      {/*  <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1.6,
          type: "spring",
          stiffness: 150,
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex flex-col flex-1"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.6,
            type: "spring",
            stiffness: 150,
            ease: "easeOut",
            duration: 5,
          }}
          className="mt-auto shadow mx-auto rounded-xl h-[200px]  w-[85%] lg:h-[290px] lg:w-[70%] overflow-hidden "
        >
          <Image
            quality={20}
            layout="fill"
            src="/aboutimg1.jpg"
            objectFit="cover"
            className="object-cover"
          />
        </motion.div>
         <div className="mb-auto text-center flex justify-center space-x-5">
          <div className="cursor-pointer text-3xl left">{"<"}</div>
          <div className="cursor-pointer text-3xl right">{">"}</div>
        </div> 
      </motion.div> */}
      <div className="flex flex-col flex-1 relative">
        <motion.div
          className="relative my-auto shadow mx-auto rounded-xl h-[200px]  w-[85%] lg:h-[290px] lg:w-[70%] overflow-hidden "
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            quality={20}
            layout="fill"
            src={images[imageIndex]}
            objectFit="cover"
            className="object-cover"
          />
        </motion.div>
        <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          {"‣"}
        </div>
      </div>
    </div>
  );
}
export default Header;

/*

<div className="slider-container">
	<AnimatePresence
	
		custom={direction}>
		<motion.div
		key={currentPage}
		className="slide"
		data-page={currentPage}
		variants={variants}
		initial="enter"
		animate="active"
		exit="exit"
		drag="x"
		onDrag={detectPaginationGesture}
		onDragStart={() => (hasPaginated.current = false)}
		onDragEnd={() => (hasPaginated.current = true)}
		// Snap the component back to the center
		// if it hasn't paginated
		dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
		// This will be used for components to resolve all
		// other variants, in this case initial and animate.
		custom={direction}
		/>
	</AnimatePresence>
	</div>


*/

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

{
  /* <Swiper
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
        </Swiper> */
}
