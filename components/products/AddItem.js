import { useRef } from "react";
import { useRouter } from "next/router";
import { CheckIcon } from "@heroicons/react/solid";
import { catagories, componies } from "../../lib/helper";
function AddItem() {
  const router = useRouter();
  const price = useRef();
  const DiscPrice = useRef();
  const warranty = useRef();
  const image = useRef();
  const description = useRef();
  const compony = useRef();
  const catagory = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const ePrice = price.current.value;
    const eDiscPrice = DiscPrice.current.value;
    const eWarranty = warranty.current.value;
    const eImage = image.current.value;
    const eDescription = description.current.value;
    const eCompony = compony.current.value;
    const eCatagory = catagory.current.value;
    const response = await fetch("/api/addItem", {
      method: "POST",
      body: JSON.stringify({
        ePrice,
        eDiscPrice,
        eWarranty,
        eImage,
        eDescription,
        eCompony,
        eCatagory,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) router.replace("/products");
  };
  let id1 = 0,
    id2 = 0;
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
            ref={price}
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
            ref={DiscPrice}
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
            ref={warranty}
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
            ref={image}
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
            ref={description}
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
            ref={compony}
          >
            {componies.map((item) => (
              <option key={id1++} value={item}>
                {item}
              </option>
            ))}
            {/* <option value="Luminous">Luminous</option>
            <option value="Loom">Loom</option>
            <option value="Tata">Tata</option> */}
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
            ref={catagory}
          >
            {catagories.map((item) => (
              <option key={id2++} value={item}>
                {item}
              </option>
            ))}
            {/* <option value="Panels">Panels</option>
            <option value="Batteries">Batteries</option>
            <option value="Invertors">Invertors</option> */}
          </select>
        </div>
        <div className="mb-4 ">
          <button
            onClick={submitHandler}
            className="flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md"
          >
            Send
            <CheckIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
