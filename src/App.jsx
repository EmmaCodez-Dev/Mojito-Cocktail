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

  return (
    <main className="lenis-wrapper">
      <div className="lenis-content">
      {/* <Home /> */}
      {/* <GsapFrom />
      <GsapFromTo />
      <GsapScrollTrigger />
      <GsapStagger />
      <GsapText />
      <GsapTimelime />
      <GsapTo /> */}

        <Navbar />
        <Hero />
        <div className="h-dvh bg-black" />
      </div>
    </main>
  );
};

export default App;
