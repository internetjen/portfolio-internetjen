import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-center">
          Welcome to my Portfolio
        </h1>
      </main>
      <Footer />
    </>
  );
}
