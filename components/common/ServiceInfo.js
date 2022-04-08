import Image from "next/image";
import abt2 from "../../public/aboutimg2.jpg";
import abt1 from "../../public/aboutimg1.jpg";
import abt3 from "../../public/contactimg.jpg";
import { useState } from "react";

function ServiceInfo() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const stateHandler1 = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
  };

  const stateHandler2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
  };

  const stateHandler3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
  };

  return (
    <div className="text-white dark:text-inavy mt-10 px-6 md:px-0 max-w-[850px] flex flex-col  md:flex-row mx-auto gap-10">
      <div className="flex-[60%] md:space-y-3 flex flex-row md:flex-col justify-evenly">
        <div
          onClick={stateHandler1}
          className={`rounded cursor-pointer w-min md:w-full  md:h-20 flex items-center ${
            active1 && "md:shadow-2xl md:dark:bg-idarkBg"
          } `}
        >
          <div className={`serviceInfo-circle ${active1 && "active-circle"}`}>
            <h4
              className={`text-2xl text-inavy font-bold ${
                active1 && "active-text"
              } `}
            >
              01
            </h4>
          </div>
          <h4 className="dark:text-white text-inavy md:block hidden text-2xl font-bold ml-10">
            Service 01
          </h4>
        </div>
        <div
          onClick={stateHandler2}
          className={`rounded cursor-pointer w-min md:w-full h-20 flex items-center ${
            active2 && "md:shadow-2xl md:dark:bg-idarkBg"
          } `}
        >
          <div className={`serviceInfo-circle ${active2 && "active-circle"}`}>
            <h4
              className={`text-2xl text-inavy font-bold ${
                active2 && "active-text"
              }`}
            >
              02
            </h4>
          </div>
          <h4 className="dark:text-white text-inavy md:block hidden text-2xl font-bold ml-10">
            Service 02
          </h4>
        </div>
        <div
          onClick={stateHandler3}
          className={`rounded cursor-pointer w-min md:w-full h-20 flex items-center ${
            active3 && "md:shadow-2xl md:dark:bg-idarkBg "
          }`}
        >
          <div className={`serviceInfo-circle ${active3 && "active-circle"}`}>
            <h4
              className={`text-2xl text-inavy font-bold ${
                active3 && "active-text"
              }`}
            >
              03
            </h4>
          </div>
          <h4 className="dark:text-white text-inavy md:block hidden text-2xl font-bold ml-10">
            Service 03
          </h4>
        </div>
      </div>

      <div
        className={`flex-1 mobile:flex-[40%]  pr-5 ${
          active1 ? "flex" : "hidden"
        }  flex-col justify-center items-center md:mr-0 md:my-auto`}
      >
        <h4 className="dark:text-white text-inavy mb-4 md:mb-0 block md:hidden text-center md:text-left text-3xl font-semibold md:ml-10">
          Service 01
        </h4>
        <div
          className={`w-[85%] h-auto mobile:h-[65%] mobile:w-auto shadow rounded-xl overflow-hidden ${
            active1 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000 `}
        >
          <Image
            quality={10}
            src={abt2}
            objectFit="conatin"
            className="object-contain rounded-xl"
          />
        </div>
        <p className="text-center dark:text-white text-inavy text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          repellat magnam aut optio!
        </p>
      </div>

      <div
        className={`flex-1 transition-all duration-150 mobile:flex-[40%]  pr-5 ${
          active2 ? "flex opacity-100" : "hidden opacity-0"
        }  flex-col justify-center items-center md:mr-0 md:my-auto`}
      >
        <h4 className="dark:text-white text-inavy mb-4 md:mb-0 block md:hidden text-center md:text-left text-3xl font-semibold ml-10">
          Service 02
        </h4>
        <div
          className={`w-[85%] h-auto mobile:h-[65%] mobile:w-auto transition-all duration-1000 shadow rounded-xl overflow-hidden ${
            active2 ? "opacity-100" : "opacity-0"
          } `}
        >
          <Image
            quality={10}
            src={abt1}
            objectFit="conatin"
            className="object-contain rounded-xl"
          />
        </div>
        <p className="text-center dark:text-white text-inavy text-sm mt-2">
          Incidunt quas rerum quam, voluptas quasi esse saepe eius consectetur
          eaque accusamus.Voluptatem tempora?
        </p>
      </div>

      <div
        className={`flex-1 mobile:flex-[40%]  pr-5 ${
          active3 ? "flex" : "hidden"
        }  flex-col justify-center items-center md:mr-0 md:my-auto`}
      >
        <h4 className="dark:text-white text-inavy mb-4 md:mb-0 block md:hidden text-center md:text-left text-3xl font-semibold ml-10">
          Service 03
        </h4>
        <div
          className={`w-[85%] h-auto mobile:h-[65%] mobile:w-auto transition-all duration-1000 shadow rounded-xl overflow-hidden ${
            active3 ? "opacity-100" : "opacity-0"
          } `}
        >
          <Image
            alt="This is about basni solar"
            quality={10}
            src={abt3}
            objectFit="conatin"
            className="object-contain rounded-xl"
          />
        </div>
        <p className="dark:text-white text-inavy text-center text-sm mt-2">
          Temporibus aliquid, beatae veritatis impedit in, dolore animi fugit
          blanditiis provident sequi quis facilis
        </p>
      </div>
    </div>
  );
}

export default ServiceInfo;
