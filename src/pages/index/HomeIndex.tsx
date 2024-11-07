import Banner from "./component/Banner";
import Comments from "./component/Comments";
import Hero from "./component/Hero";
import Menu from "./component/Menu";

export default function HomeIndex() {
  return (
    <div>
      <Hero />
      <Menu />
      <Banner />
      <Menu />
      <Banner second />
      <Comments />
    </div>
  );
}
