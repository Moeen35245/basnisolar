import { ButtonFilter } from "../reusable/Button";
import { catagories, componies } from "../../lib/helper";
import { motion } from "framer-motion";

function Filter({ filterFadeOutHandler, filterData }) {
  let id1 = 0;
  let id2 = 0;

  return (
    <motion.div
      className={` p-5 z-50 absolute top-10 left-[50%] -translate-x-1/2 w-[320px]  mobile:w-[400px] bg-white dark:bg-idark filter rounded-xl shadow-lg border border-iyellow dark:border-ired`}
    >
      <div className="flex flex-wrap justify-evenly mb-4">
        <div className="space-y-2 p-2 ">
          <h1 className="text-center">Compony</h1>
          {componies.map((item) => (
            <ButtonFilter
              filterData={filterData}
              filterFadeOutHandler={filterFadeOutHandler}
              key={id1++}
              text={item}
            />
          ))}
        </div>
        <div className="space-y-2 p-2 ">
          <h1 className="text-center">Catagory</h1>
          {catagories.map((item) => (
            <ButtonFilter
              filterData={filterData}
              filterFadeOutHandler={filterFadeOutHandler}
              key={id2++}
              text={item}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ButtonFilter
          filterData={filterData}
          filterFadeOutHandler={filterFadeOutHandler}
          text="All"
        />
      </div>
    </motion.div>
  );
}

export default Filter;

/*
initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        ease: "easeOut",
        duration: 0.2,
      }}
      style={{ originX: 0 }}
*/
