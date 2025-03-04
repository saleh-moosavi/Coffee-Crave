import MenuItem from "./MenuItem";

export default function Menu({ title }: { title: string }) {
  return (
    <div className="pt-10 pb-5">
      <h2 className="text-center font-bold mb-3">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 xl:max-w-7xl xl:mx-auto mx-10 my-5">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      
    </div>
  );
}
