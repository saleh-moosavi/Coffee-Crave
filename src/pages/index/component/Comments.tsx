import { CommentItem } from "./CommentItem";

export default function Comments() {
  return (
    <div className="pt-5 pb-10 text-center xl:max-w-7xl xl:mx-auto">
      <p className="font-serif text-xs font-bold">Come And Join</p>
      <p className="font-bold mt-1 text-lg">Our Happy Customers</p>
      <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  );
}
