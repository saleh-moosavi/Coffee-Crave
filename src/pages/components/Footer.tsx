import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="bg-amber-950 text-left text-white p-10 grid grid-cols-2 md:grid-cols-3 justify-items-center mt-10">
        <ul className="*:cursor-pointer">
          <h3 className="md:text-lg font-bold mb-3">Services</h3>
          <li className="text-xs font-semibold md:text-base">Shop</li>
          <li className="text-xs font-semibold md:text-base">Order Coffee</li>
        </ul>
        <ul className="*:cursor-pointer">
          <h3 className="md:text-lg font-bold mb-3">About Us</h3>
          <li className="text-xs font-semibold md:text-base">Our Story</li>
          <li className="text-xs font-semibold md:text-base">Location</li>
        </ul>
        <ul className="col-span-2 md:col-span-1 mt-5 md:mt-0 text-center">
          <h3 className="md:text-lg font-bold">Social Media</h3>
          <ul className="flex gap-x-7 mt-3 *:cursor-pointer">
            <li className="text-xs font-semibold md:text-base">
              <BsTwitterX className="w-5 h-5" />
            </li>
            <li className="text-xs font-semibold md:text-base">
              <BsFacebook className="w-5 h-5" />
            </li>
            <li className="text-xs font-semibold md:text-base">
              <BsInstagram className="w-5 h-5" />
            </li>
            <li className="text-xs font-semibold md:text-base">
              <BsYoutube className="w-6 h-6" />
            </li>
          </ul>
        </ul>
      </div>
      <h2 className="bg-amber-950 -mt-2 text-white text-center font-semibold">
        2024 All Rights Reserved
      </h2>
    </>
  );
}
