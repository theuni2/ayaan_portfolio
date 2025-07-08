import Image from "next/image";
import Nav from "./component/nav";
import Hero from "./component/hero";
import Slider from "./component/swipper";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <Slider />
      <Footer />
    </div>
  );
}

