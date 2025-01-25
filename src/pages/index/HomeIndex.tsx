import Banner from "./component/Banner";
import Comments from "./component/Comments";
import Hero from "./component/Hero";
import Menu from "./component/Menu";

export default function HomeIndex() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Menu title="OUR SPECIAL COFFEE" />
      <Banner />
      <Menu title="OUR DELICIOUS DESSERT" />
      <Banner second />
      <Comments />
    </div>
  );
}
