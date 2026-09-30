import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import Office from "@/components/Office";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <WhoWeHelp />
      <Office />
      <Footer />
    </main>
  );
}
