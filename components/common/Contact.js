import Image from "next/image";
import pic from "../../public/heroimg.jpg";
import { useRef } from "react";
import { ButtonForm } from "../reusable/Button";
import { CheckIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

function Contact() {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const address = useRef();
  const message = useRef();
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const eName = name.current.value;
    const eEmail = email.current.value;
    const ePhone = phone.current.value;
    const eAddress = address.current.value;
    const eMessage = message.current.value;

    fetch("/api/submitForm", {
      method: "POST",
      body: JSON.stringify({
        eName,
        eEmail,
        ePhone,
        eAddress,
        eMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
      });
  };

  console.log(loading);
  return (
    <div className="flex mx-auto mt-10 max-w-[900px]">
      <div className="flex-[30%] relative  w-[100%] hidden lg:block  ml-10 shadow rounded-tl-xl rounded-bl-xl overflow-hidden ">
        <Image
          alt="This is about basni solar"
          quality={20}
          src={pic}
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="mx-auto w-[90%] md:max-w-[400px] lg:w-auto lg:pl-16 dark:text-inavy px-5  border-2 border-gray-50  shadow-2xl lg:shadow rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl lg:rounded-tl-none lg:rounded-bl-none bg-white">
        <div className="flex justify-center mt-4">
          <img className="h-10 w-10 " src="/icon.png" alt="solar panel icon" />
        </div>
        <h5 className="mt-4 text-xl font-semibold">Send a message</h5>
        <p className="text-sm font-medium">
          Fil the Form below and we wil contact you.
        </p>

        <form className="mt-4 grid grid-cols-10">
          <div className="mb-4 col-span-10 sm:col-start-1 sm:col-end-5">
            <label className="form-lable" htmlFor="Name">
              Name
            </label>
            <input
              className="form-input focus:outline-none focus:shadow-outline"
              id="Name"
              type="text"
              placeholder="Name"
              ref={name}
            />
          </div>

          <div className="mb-4 col-span-10 sm:col-start-6 md:col-end-10">
            <label className="form-lable" htmlFor="Email">
              Email
            </label>
            <input
              className="form-input focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="Email"
              ref={email}
            />
          </div>

          <div className="mb-4 col-span-10 sm:col-start-1 sm:col-end-5">
            <label className="form-lable" htmlFor="Number">
              Number
            </label>
            <input
              className="form-input focus:outline-none focus:shadow-outline"
              id="Number"
              type="text"
              placeholder="Phone"
              ref={phone}
            />
          </div>

          <div className="mb-4 col-span-10 sm:col-start-6 sm:col-end-10">
            <label className="form-lable" htmlFor="Number">
              Address
            </label>
            <input
              className="form-input focus:outline-none focus:shadow-outline"
              id="Address"
              type="text"
              placeholder="Address"
              ref={address}
            />
          </div>

          <div className="mb-4 col-span-10">
            <label className="form-lable" htmlFor="Message">
              Message
            </label>
            <textarea
              className="form-input focus:outline-none focus:shadow-outline"
              id="Message"
              ref={message}
            />
          </div>
          <div className="mb-4 col-span-10">
            <button
              disabled={loading}
              onClick={submitHandler}
              className="flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md"
            >
              {loading ? <span className="loading"></span> : <span>Send</span>}
              {!loading && <CheckIcon className="ml-2 h-5 w-5" />}
            </button>
          </div>
        </form>
        <div className="grid grid-cols-10">
          <p className="col-span-9 text-xs text-center">
            <strong>Note* </strong>We will note share your email and phone
            number to anyone
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
