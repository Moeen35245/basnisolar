import { PhoneIcon } from "@heroicons/react/solid";
import { CheckIcon, FilterIcon } from "@heroicons/react/outline";

export function Button() {
  return (
    <li>
      <a target="_blank" href="https://wa.me/+918766155548">
        <button className="relative">
          <img
            className="z-10 h-8 w-8"
            src="/whatsapp.png"
            alt="Social Media Icon"
          />
          <div className="animate-boom z-[8] h-10 w-10 absolute bg-green-300 opacity-50 rounded-full -top-1 -left-1"></div>
        </button>
      </a>
    </li>
  );
}

export function ButtonNav() {
  return (
    <button className="flex-1 space-x-4 mt-5 flex sm:hidden items-center justify-center px-5 py-3 dark:bg-ired bg-inavy text-white rounded-md">
      <PhoneIcon className="ml-1 h-5 w-5" />
      <a href="tel:+96170961709">+91637961709</a>
    </button>
  );
}

export function ButtonForm() {
  return (
    <button className="flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md">
      Send
      <CheckIcon className="ml-2 h-5 w-5" />
    </button>
  );
}

export function ButtonFilter({ text, filterFadeOutHandler, filterData }) {
  // console.log(ctxData.data);

  return (
    <button
      onClick={() => {
        filterFadeOutHandler();
        filterData(text);
      }}
      className={`flex h-10 justify-center items-center px-3 mobile:px-6 py-2 dark:border-idark border-inavy  bg-white dark:bg-idarkBg border-2 rounded-full`}
    >
      <CheckIcon className={`mr-2 h-5 w-5`} />
      {text}
    </button>
  );
}

export function ButtonFilterMain() {
  return (
    <button className="flex justify-evenly dark:border-idark border-inavy border-2 items-center px-6 py-2 bg-white dark:bg-idarkBg rounded-full">
      <FilterIcon className="mr-2 h-5 w-5" />
      Filter
    </button>
  );
}
