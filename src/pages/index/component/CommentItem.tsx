import Star from "../../components/Star";

export function CommentItem() {
  return (
    <div className="p-2 bg-[#ECDFCC] mx-5 rounded-md shadow-[1px_1px_2px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300">
      <div className="flex justify-between py-1 text-left items-center">
        <div className="flex gap-x-5 items-center">
          <img
            className="w-10 h-10 object-cover object-top rounded-full"
            src="https://imgs.search.brave.com/mVyeZtV09qU-OY0avq3oPkWi3lJkuE9iN0DXD66ZclM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/ODY0MTg0NS9waG90/by9jb2ZmZWUtdGlt/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9YzFCUWcycDYx/cEE1WldqTmROTzFG/emQ3WUplaTl2MDQy/cFA0bTluckVkZz0"
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-xs font-bold">Sam Williams</p>
            <p className="text-xs">member</p>
          </div>
        </div>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          sit ipsam quos corrupti itaque expedita consequatur eius ad
          necessitatibus nemo, aperiam mollitia autem ex maiores sequi nulla
          ipsa. Nobis, praesentium.
        </p>
      </div>
    </div>
  );
}
