import About from "@/components/About";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
