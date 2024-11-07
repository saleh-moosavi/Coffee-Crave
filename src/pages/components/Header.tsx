import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  if (windowSize > 769) {
    return (
      <div className="flex justify-between items-center py-4 px-10 fixed top-0 right-0 left-0 bg-black/30 backdrop-blur-sm shadow-md z-50">
        <p className="text-lg font-bold text-white cursor-pointer">CoffeeApp</p>
        <ul className="flex gap-x-5 items-center text-white font-semibold z-50 *:cursor-pointer">
          <li>Home</li>
          <li>Coffee</li>
          <li>Bakery</li>
          <li>Shop</li>
          <li>About</li>
          <li className="bg-orange-700 w-fit px-5 py-1 rounded-lg text-white">
            Login
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <nav className="flex justify-between items-center bg-black/30 px-5 font-bold py-5 fixed top-0 right-0 left-0 shadow-md backdrop-blur-sm z-50">
        <p className="text-lg font-bold text-white cursor-pointer">CoffeeApp</p>
        <BiMenu
          className="w-6 h-6 cursor-pointer text-white hover:scale-110 transition-all duration-300"
          onClick={() => setSideBar(!sideBar)}
        />

        {/* sidebar */}
        <div
          className={`fixed top-0 bottom-0 right-0 h-screen w-1/2 bg-stone-100 p-10 drop-shadow-lg transition-all duration-300 ${
            sideBar ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <CgClose
            className="w-5 h-5 cursor-pointer hover:text-red-600 transition-all duration-300"
            onClick={() => setSideBar(!sideBar)}
          />
          <ul className="flex flex-col gap-y-5 my-5 hover:*:text-orange-400 *:transition-all *:duration-300 *:cursor-pointer">
            <li>Home</li>
            <li>Coffee</li>
            <li>Bakery</li>
            <li>Shop</li>
            <li>About</li>
            <li className="bg-orange-700 w-fit px-5 py-1 rounded-lg text-white">
              Login
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
