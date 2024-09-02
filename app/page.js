import About from "./components/About";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center w-full bg-white p-3 pt-3">
      <Header />
      <Hero />
      <About />
      <Discover />
    </main>
  );
}
