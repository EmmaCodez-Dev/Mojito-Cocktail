// import Home from "./pages/Home";
// import GsapFrom from "./pages/GsapFrom";
// import GsapFromTo from "./pages/GsapFromTo";
// import GsapScrollTrigger from "./pages/GsapScrollTrigger";
// import GsapStagger from "./pages/GsapStagger";
// import GsapText from "./pages/GsapText";
// import GsapTimelime from "./pages/GsapTimelime";
// import GsapTo from "./pages/GsapTo";
////////////////////////////////////////////
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
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
      <div className="h-dvh bg-black"/>
    </main>
  );
};

export default App;
