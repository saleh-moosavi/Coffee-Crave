import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="py-10">
      <h2 className="text-center font-bold mb-3">OUR SPECIAL COFFEE</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 xl:max-w-7xl xl:mx-auto mx-10 my-5">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}
