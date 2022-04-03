import { CheckIcon, PencilAltIcon } from "@heroicons/react/solid";
import { useState } from "react";

function AddsItem({ data, submitHandler, isEdit }) {
  if (!data) {
    data = {
      id: "",
      price: "",
      priceDisc: "",
      warranty: "",
      imgLink: "",
      description: "",
      catagory: "",
      compony: "",
    };
  }

  const [priceValue, setPriceValue] = useState(data.price);
  const [DiscPriceValue, setDiscPriceValue] = useState(data.priceDisc);
  const [warrantyValue, setWarrantyValue] = useState(data.warranty);
  const [imageValue, setImageValue] = useState(data.imgLink);
  const [descreptionValue, setDescriptionValue] = useState(data.description);
  const [catagoryValue, setCatagoryValue] = useState(data.catagory);
  const [componyValue, setComponyValue] = useState(data.compony);

  return (
    <div className="mt-5 border rounded-lg shadow-lg p-5 mx-auto max-w-[320px] dark:text-white">
      <form className="mt-4 flex flex-col">
        <div className="mb-4 ">
          <label className="form-lable dark:text-white" htmlFor="Name">
            price
          </label>
          <input
            className="form-input focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="price"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-lable dark:text-white" htmlFor="Email">
            Discount Price
          </label>
          <input
            className="form-input focus:outline-none focus:shadow-outline"
            id="Discount"
            type="text"
            placeholder="Discount"
            value={DiscPriceValue}
            onChange={(e) => setDiscPriceValue(e.target.value)}
          />
        </div>

        <div className="mb-4 ">
          <label className="form-lable dark:text-white" htmlFor="Number">
            warranty
          </label>
          <input
            className="form-input focus:outline-none focus:shadow-outline"
            id="warranty"
            type="text"
            placeholder="warranty"
            value={warrantyValue}
            onChange={(e) => setWarrantyValue(e.target.value)}
          />
        </div>

        <div className="mb-4 ">
          <label className="form-lable dark:text-white" htmlFor="image">
            image
          </label>
          <input
            className="form-input focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            placeholder="image"
            value={imageValue}
            onChange={(e) => setImageValue(e.target.value)}
          />
        </div>

        <div className="mb-4 ">
          <label className="form-lable dark:text-white" htmlFor="discription">
            discription
          </label>
          <input
            className="form-input focus:outline-none focus:shadow-outline"
            id="discription"
            type="text"
            placeholder="discription"
            value={descreptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </div>

        <div className="mb-4 ">
          <label className="form-lable dark:text-white" htmlFor="compony">
            compony
          </label>
          <select
            className="form-input "
            id="compony"
            type="text"
            placeholder="compony"
            value={componyValue}
            onChange={(e) => setComponyValue(e.target.value)}
          >
            <option value="Luminous">Luminous</option>
            <option value="Loom">Loom</option>
            <option value="Waree">Waree</option>
          </select>
        </div>

        <div className="mb-4 ">
          <label className="form-lable dark:text-white" htmlFor="catagory">
            catagory
          </label>
          <select
            className="form-input "
            id="catagory"
            type="text"
            placeholder="catagory"
            value={catagoryValue}
            onChange={(e) => setCatagoryValue(e.target.value)}
          >
            <option value="panels">panels</option>
            <option value="batteries">batteries</option>
            <option value="invertors">invertors</option>
          </select>
        </div>
        <div className="mb-4 ">
          <button
            onClick={(e) =>
              submitHandler(
                e,
                priceValue,
                DiscPriceValue,
                warrantyValue,
                imageValue,
                descreptionValue,
                componyValue,
                catagoryValue
              )
            }
            className="flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md"
          >
            {isEdit ? "Edit" : "submit"}
            {isEdit ? (
              <PencilAltIcon className="ml-2 h-5 w-5" />
            ) : (
              <CheckIcon className="ml-2 h-5 w-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddsItem;
