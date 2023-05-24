import Nav from "@/components/Nav";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ 
  weight: '400',
  subsets: ['latin'] 
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
