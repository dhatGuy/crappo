import { Inter, Rubik } from "next/font/google";
import CryptoCurrencies from "~/components/sections/CryptoCurrencies";
import Features from "~/components/sections/Features";
import Hero from "~/components/sections/Hero";
import Rate from "~/components/sections/Rate";
import WhyCrappo from "~/components/sections/WhyCrappo";

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyCrappo />
      <Rate />
      <CryptoCurrencies />
      <Features />
    </main>
  );
}
