import { ObjectID } from "bson";
import { connectToDatabase } from "../../lib/dbconnection";
import { useState } from "react";
import { useRouter } from "next/router";
import { PencilAltIcon } from "@heroicons/react/solid";
import { catagories, componies } from "../../lib/helper";
import { getSession } from "next-auth/react";
// import AddsItem from "../../components/products/AddsItem";

function productedit({ data }) {
  const [priceValue, setPriceValue] = useState(data.price);
  const [DiscPriceValue, setDiscPriceValue] = useState(data.priceDisc);
  const [warrantyValue, setWarrantyValue] = useState(data.warranty);
  const [imageValue, setImageValue] = useState(data.imgLink);
  const [descreptionValue, setDescriptionValue] = useState(data.description);
  const [catagoryValue, setCatagoryValue] = useState(data.catagory);
  const [componyValue, setComponyValue] = useState(data.compony);
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    const id = data.id;
    const response = await fetch("/api/updateItem", {
      method: "PATCH",
      body: JSON.stringify({
        id,
        priceValue,
        DiscPriceValue,
        warrantyValue,
        imageValue,
        descreptionValue,
        componyValue,
        catagoryValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) router.replace("/products");
  };
  let id1 = 0,
    id2 = 0;
  return (
    // <AddsItem data={data} submitHandler={submitHandler} isEdit={true} />
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
            {componies.map((item) => (
              <option key={id1++} value={item}>
                {item}
              </option>
            ))}
            {/* <option value="Luminous">Luminous</option>
            <option value="Loom">Loom</option>
            <option value="Waree">Waree</option> */}
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
            {catagories.map((item) => (
              <option key={id2++} value={item}>
                {item}
              </option>
            ))}
            {/* <option value="panels">panels</option>
            <option value="batteries">batteries</option>
            <option value="invertors">invertors</option> */}
          </select>
        </div>
        <div className="mb-4 ">
          <button
            onClick={submitHandler}
            className="flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md"
          >
            Edit
            <PencilAltIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const id = context.params.productedit;
  const currId = new ObjectID(id);
  const client = await connectToDatabase();
  const db = client.db();
  const productsCollection = db.collection("products");
  const data = await productsCollection.findOne({ _id: currId });
  return {
    props: {
      data: {
        id: data._id.toString(),
        price: data.price,
        priceDisc: data.DiscPrice,
        imgLink: data.image,
        description: data.description,
        warranty: data.warranty,
        compony: data.compony,
      },
    },
  };
}

export default productedit;
