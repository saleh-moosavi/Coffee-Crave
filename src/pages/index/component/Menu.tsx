import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="bg-amber-800/5 py-10">
      <h2 className="text-center font-bold">OUR SPECIAL COFFEE</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-5 mx-10 my-5">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}
