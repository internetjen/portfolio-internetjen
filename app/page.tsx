import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <Hero />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
