function Footer() {
  return (
    <footer
      id="footer"
      className="px-7 mt-20 footer pt-10  w-full bg-inavy grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 "
    >
      <div className="my-auto mb-4 md:mb-0">
        <img className="h-12" src="/logo.svg" alt="Solar panel Logo" />
      </div>
      <div className="text-white mb-4 md:mb-0">
        <h5 className=" font-bold md:mb-4">Contact</h5>
        <div className="space-y-1 font-light text-justify text-sm">
          <p>+918755547691</p>
          <p>+916354908726</p>
        </div>
      </div>

      <div className="text-white mb-4 md:mb-0">
        <h5 className=" font-bold md:mb-4">Office</h5>
        <div className="font-light text-sm text-justify space-y-1">
          <p>Fri-Thu 7:00pm-11:00pm</p>
          <p>Sat-Sun 9:00am-11:00pm</p>
        </div>
      </div>

      <div className="text-white mb-4 md:mb-0">
        <h5 className="font-bold  md:mb-4">Address</h5>
        <p className="font-light text-sm">
          In Front of Sufiya hospital Nagaur Road Basni
        </p>
      </div>
      <div className="my-4 col-span-1 md:col-span-4 h-[1px] w-full bg-gray-100"></div>
      <div className="my-4 col-span-1 md:col-span-4 flex flex-col md:flex-row mb-4 md:mb-0 justify-between text-white">
        <ul className=" flex justify-evenly space-x-5">
          <li className="cursor-pointer">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                className="h-6 w-6"
                src="/Facebook.png"
                alt="Social Media Icon"
              />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.linkedin.com/" target="_blank">
              <img
                className="h-6 w-6"
                src="/linkedin.png"
                alt="Social Media Icon"
              />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.instagram.com/" target="_blank">
              <img
                className="h-6 w-6"
                src="/instagram.png"
                alt="Social Media Icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.gmail.com/" target="_blank">
              <img
                className="h-6 w-6"
                src="/gmail.png"
                alt="Social Media Icon"
              />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.whatsapp.com/" target="_blank">
              <img
                className="h-6 w-6"
                src="/whatsapp.png"
                alt="Social Media Icon"
              />
            </a>
          </li>
        </ul>
        <p className="text-center mt-3">Copyright basnisoalr.com</p>
      </div>
    </footer>
  );
}

export default Footer;
