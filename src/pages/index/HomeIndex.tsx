import Banner from "./component/Banner";
import Hero from "./component/Hero";
import Menu from "./component/Menu";

export default function HomeIndex() {
  return (
    <div className="bg-amber-800/5">
      <Hero />
      <Menu />
      <Banner />
      <Menu />
      <Banner second/>
    </div>
  );
}
