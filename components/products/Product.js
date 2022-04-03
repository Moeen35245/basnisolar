import Image from "next/image";
import { PencilIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Product({
  id,
  compony,
  price,
  priceDisc,
  imgLink,
  description,
  warranty,
}) {
  const [isVisible, setVisible] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const clickHandler = () => {
    setVisible(true);
  };

  const leaveHandler = () => {
    setVisible(false);
  };

  const deleteHandler = async () => {
    const result = await fetch("/api/deleteItem", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });

    if (result.status === 201) router.replace("/products");
  };

  if (!imgLink) imgLink = "/solarImage.webp";
  return (
    <div
      onMouseLeave={leaveHandler}
      className="relative px-3 h-96 w-60 bg-white dark:bg-idarkBg shadow-lg rounded-lg"
    >
      {status === "authenticated" && (
        <div
          onClick={clickHandler}
          className="z-[49]  flex items-center justify-center absolute top-2 rounded-full h-7 w-7 right-2 p-1 cursor-pointer dark:bg-ired bg-iyellow "
        >
          <PencilIcon className="text-white  h-5 w-5" />
        </div>
      )}
      {isVisible && status === "authenticated" && (
        <ul className="shadow z-[49] flex flex-col items-center justify-center rounded-md border absolute top-10 right-2 text-inavy dark:text-white bg-white dark:bg-idark h-24 w-20">
          <li className="px-2 rounded py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-idarkBg">
            <Link href={`/products/${id}`}>Edit</Link>
          </li>
          <li
            onClick={deleteHandler}
            className="px-2 rounded py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-idarkBg"
          >
            Delete
          </li>
        </ul>
      )}

      <div className="z-20 px-2 text-white absolute top-3 left-0 h-8 w-36 dark:bg-ired bg-iyellow rounded-tr-full  rounded-br-full">
        <p className="font-semibold text-lg">{compony}</p>
      </div>
      <div className="relative h-[60%]">
        <Image
          alt="This bansi solar product"
          src={imgLink}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="mt-5">
        <p className="text-sm font-light mb-2">{warranty}</p>
        <p className="text-sm font-semibold mb-2">{description}</p>
        <p className="flex items-center">
          <span className="mr-auto dark:text-ired text-iyellow text-lg font-semibold">
            Rs.{" " + priceDisc}
          </span>
          <span className="text-lg font-light line-through">
            Rs.{" " + price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Product;

// Loom Solar Panel 10 watt - 12 volt for Mobile Charging
