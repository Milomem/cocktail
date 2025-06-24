import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Cocktails } from "./components/cocktail";
import About from "./components/about";
import Art from "./components/art";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}