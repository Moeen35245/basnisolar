import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button, ButtonNav } from "../reusable/Button";
import { useState } from "react";
import { MenuAlt4Icon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative px-5 py-3 flex dark:text-white bg-icream dark:bg-idark ">
      <div
        onClick={navOpenHandler}
        className="z-[51] md:hidden space-y-1 fixed top-4 right-3 cursor-pointer"
      >
        <div
          className={`${
            isOpen && "rotate-90"
          } relative p-2 rounded-full transition-all duration-300 text-inavy  bg-white  shadow-xl shadow-red-50`}
        >
          <MenuAlt4Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mx-auto flex flex-1 max-w-[1198px] ">
        <Link href="/">
          <div className="relative w-44">
            <Image
              alt="This basni solar logo"
              src={logo}
              objectFit="contain"
              className="h-full object-contain"
            />
          </div>
        </Link>
        <ul
          className={`z-[50] transition-all md:transition-none duration-300 shadow-xl delay-300 md:shadow-none fixed h-screen w-[85%] md:h-full md:w-fit dark:bg-idark bg-white md:bg-transparent top-0 right-0 md:static flex-col  justify-evenly  md:translate-x-0 md:flex-row flex ml-auto space-x-5 items-center  ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li
            className="ml-6 md:ml-0 p-2 rounded-full hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              navOpenHandler();
            }}
          >
            <SunIcon
              className={`h-5 w-5 ${theme === "dark" ? "hidden" : "block"}`}
            />
            <MoonIcon
              className={`h-5 w-5 ${theme === "dark" ? "block" : "hidden"}`}
            />
          </li>
          <li
            onClick={navOpenHandler}
            className="p-2 rounded-md hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer"
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={navOpenHandler}
            className="p-2 rounded-md hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer"
          >
            <Link href="/products">Products</Link>
          </li>
          {/* <li className="p-2 rounded-md hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer">
            <Link href="/pricing">Pricing</Link>
          </li> */}
          <li
            onClick={navOpenHandler}
            className="p-2 rounded-md hover:dark:bg-idarkBg cursor-pointer hover:bg-gray-100"
          >
            <Link href="/#about-us">About us</Link>
          </li>
          {status === "authenticated" && (
            <li
              onClick={navOpenHandler}
              className="p-2 rounded-md hover:dark:bg-idarkBg cursor-pointer hover:bg-gray-100"
            >
              <Link href="/admin">Admin</Link>
            </li>
          )}

          <Button />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
