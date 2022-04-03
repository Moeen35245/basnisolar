import { useRef, useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

function admin() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [isPassHide, setIsPassHide] = useState(true);
  const router = useRouter();
  const email = useRef();
  const password = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const eEmail = email.current.value;
    const ePassword = password.current.value;
    setLoading(true);
    signIn("credentials", {
      redirect: false,
      email: eEmail,
      password: ePassword,
    }).then((res) => setLoading(false));
  };
  const logoutHandler = () => {
    signOut();
  };

  return (
    <div>
      <Head>
        <title>Admin</title>

        <link rel="icon" href="/icon.png" />
      </Head>
      {status === "unauthenticated" && (
        <div className="mt-5 border rounded-lg shadow-lg p-5 mx-auto max-w-[320px] dark:text-white">
          <form className="mt-4 flex flex-col">
            <div className="mb-4 ">
              <label className="form-lable dark:text-white" htmlFor="Name">
                email
              </label>
              <input
                className="form-input focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                ref={email}
              />
            </div>

            <div className="mb-4">
              <label className="form-lable dark:text-white" htmlFor="Email">
                password
              </label>
              <input
                className="form-input focus:outline-none focus:shadow-outline"
                id="password"
                type={isPassHide ? "password" : "text"}
                placeholder="password"
                ref={password}
              />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <EyeIcon
                onClick={() => setIsPassHide(!isPassHide)}
                className={`${
                  !isPassHide && "text-iyellow dark:text-ired"
                } h-5 w-5 cursor-pointer `}
              />
              <p>{isPassHide ? "Show password" : "Hide password"}</p>
            </div>
            <div className="mb-4 ">
              <button
                disabled={loading}
                onClick={submitHandler}
                className="flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md"
              >
                {loading ? <span className="loading"></span> : "Login"}
                {!loading && <CheckIcon className="ml-2 h-5 w-5" />}
              </button>
            </div>
          </form>
        </div>
      )}
      {status === "authenticated" && (
        <>
          <ul className=" bg-icream dark:bg-idarkBg mt-32 flex justify-evenly mx-auto max-w-[320px]">
            <li className="p-2 rounded-md hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer">
              <Link href="/products/productadd">Add item</Link>
            </li>
            <li className="p-2 rounded-md hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer">
              <Link href="/products/submitedForms">See Forms</Link>
            </li>
          </ul>
          <div className="shadow-xl mt-4 p-2 border mb-4 mx-auto max-w-[320px]">
            <button
              onClick={logoutHandler}
              className="flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md"
            >
              Logout
              <CheckIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </>
      )}
      {status === "loading" && (
        <div className="mt-20 flex items-center justify-center">
          <div className="loading  text-center"></div>
        </div>
      )}
    </div>
  );
}

export default admin;
