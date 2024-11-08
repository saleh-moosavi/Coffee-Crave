import { GiCakeSlice, GiChocolateBar } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { TbCoffee } from "react-icons/tb";

export default function Hero() {
  return (
    <div className="h-screen w-screen relative z-10">
      <img
        className="w-full h-[90%] object-cover"
        src="https://imgs.search.brave.com/vRuYWLWXsOgUfG1pCfCcN-VSdTXK_SUeB4bJ6jSKA84/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YmFyaXN0YS1wb3Vy/LW92ZXItY29mZmVl/LWZyb20tY29wcGVy/LWtldHRsZS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w"
      />
      <ul className="flex w-full h-[10%] justify-center items-center gap-x-10 md:gap-x-32 lg:gap-x-52 bg-amber-950/10 text-amber-950 fill-amber-950">
        <li className="flex flex-col gap-y-1 items-center text-xs md:text-sm font-semibold cursor-pointer">
          <TbCoffee className="w-5 md:w-8 h-5 md:h-8 hover:scale-105 transition-all duration-300" />
          Hot Coffee
          <br />
        </li>
        <li className="flex flex-col gap-y-1 items-center text-xs md:text-sm font-semibold cursor-pointer">
          <SiBuymeacoffee className="w-5 md:w-8 h-5 md:h-8 hover:scale-105 transition-all duration-300" />
          Cup Coffee
        </li>
        <li className="flex flex-col gap-y-1 items-center text-xs md:text-sm font-semibold cursor-pointer">
          <GiChocolateBar className="w-5 md:w-8 h-5 md:h-8 hover:scale-105 transition-all duration-300" />
          Chocolate
        </li>
        <li className="flex flex-col gap-y-1 items-center text-xs md:text-sm font-semibold cursor-pointer">
          <GiCakeSlice className="w-5 md:w-8 h-5 md:h-8 hover:scale-105 transition-all duration-300" />
          Dessert
        </li>
      </ul>
    </div>
  );
}
