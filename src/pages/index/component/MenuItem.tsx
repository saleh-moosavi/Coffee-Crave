import { FaHeart } from "react-icons/fa";

export default function MenuItem() {
  return (
    <div className="text-left bg-amber-600/15 p-2 max-w-64 rounded-lg hover:shadow-lg group transition-all duration-300 z-10">
      <div className="relative pb-2 overflow-hidden rounded-lg">
        <img
          className="w-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
          src="https://imgs.search.brave.com/YEeR9NxqYD7Xy0Rvu0FyiKpLkM4Di3aDVT6p9kB_gHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTQ2NzM0NC9waG90/by9jdXAtb2YtY29m/ZmVlLXdpdGgtaGVh/cnQtc2hhcGUtc21v/a2UtYW5kLWNvZmZl/ZS1iZWFucy1vbi1i/dXJsYXAtc2Fjay1v/bi1vbGQtd29vZGVu/LWJhY2tncm91bmQu/d2VicD9iPTEmcz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZmkwelVC/YmpuNnUzOVAyMUJ5/ME1oSFlPUGdSajdi/Ul8wNTFuWXRPUmEt/MD0"
        />
        <i className="absolute top-0 right-0 text-white p-2 text-3xl hover:text-red-400 cursor-pointer transition-all duration-300 opacity-50 hover:opacity-100">
          <FaHeart className="w-6 h-6" />
        </i>
      </div>
      <h3 className="text-sm font-semibold">Lungo Coffee</h3>
      <p className="text-xs font-medium line-clamp-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex justify-between mt-3">
        <p className="font-bold">10$</p>
        <button className="bg-amber-950 px-2 py-1 text-xs font-semibold rounded-md text-white">
          Order Now
        </button>
      </div>
    </div>
  );
}
