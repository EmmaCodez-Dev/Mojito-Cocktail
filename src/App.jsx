// import Home from "./pages/Home";
// import GsapFrom from "./pages/GsapFrom";
// import GsapFromTo from "./pages/GsapFromTo";
// import GsapScrollTrigger from "./pages/GsapScrollTrigger";
// import GsapStagger from "./pages/GsapStagger";
// import GsapText from "./pages/GsapText";
// import GsapTimelime from "./pages/GsapTimelime";
// import GsapTo from "./pages/GsapTo";
////////////////////////////////////////////

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const frame = requestAnimationFrame(raf);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  {
    /* <div>
  <Home />

  <GsapFrom />
  <GsapFromTo />
  <GsapScrollTrigger />
  <GsapStagger />
  <GsapText />
  <GsapTimelime />
  <GsapTo />
  </div> */
  }
  return (
    <main className="lenis-wrapper">
      <div className="lenis-content">
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Contact/>
      </div>
    </main>
  );
};

export default App;
