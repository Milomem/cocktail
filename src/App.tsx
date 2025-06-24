import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

export function App() {
  return (
    <div className=" flex-center h-[100vh]">
      <h1 className=" text-3xl text-indigo-300">Welcome to the React App</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}