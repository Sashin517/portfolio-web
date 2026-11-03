import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Work />
      <TechStack />
      <Footer />
    </main>
  );
}