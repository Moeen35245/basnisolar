import Filter from "./Filter";
import Product from "./Product";
import { useState } from "react";
import { FilterIcon } from "@heroicons/react/outline";

function Productlist({ data, filterData }) {
  const [isHide, setHide] = useState(true);

  const filterFadeInHandler = () => {
    setHide(false);
  };

  const filterFadeOutHandler = () => {
    setHide(true);
  };

  if (!data) {
    return (
      <div>
        <h1>Nothing In product</h1>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isHide && (
        <Filter
          filterData={filterData}
          filterFadeOutHandler={filterFadeOutHandler}
        />
      )}
      <div
        onClick={filterFadeOutHandler}
        className={` ${
          isHide ? "hidden" : "block"
        } absolute top-0 left-0 z-40 w-screen h-full`}
      ></div>
      <div className="flex justify-center items-center">
        <button
          onClick={filterFadeInHandler}
          className="flex justify-evenly mt-2 dark:border-idark border-inavy border-2 items-center px-6 py-2 bg-white dark:bg-idarkBg rounded-full"
        >
          <FilterIcon className="mr-2 h-5 w-5" />
          Filter
        </button>
      </div>
      <div
        className={`transition-all duration-150 filter ${
          !isHide && "blur-sm"
        } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center  mt-3 gap-4 px-5 `}
      >
        {data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            compony={item.compony}
            price={item.price}
            priceDisc={item.priceDisc}
            imgLink={item.imgLink}
            description={item.description}
            warranty={item.warranty}
          />
        ))}
      </div>
    </div>
  );
}

export default Productlist;
