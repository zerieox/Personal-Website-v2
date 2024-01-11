import HeroSection from "@/components/HeroSection";
import About from "@/components/About"
import Experience from "@/components/Experience"
import Project from "@/components/Project";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection/>
      <About/>
      <Experience/>
      <Project/>
    </main>
  );
}
