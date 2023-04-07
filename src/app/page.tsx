import { Inter, Rubik } from "next/font/google";
import Hero from "~/components/sections/Hero";
import WhyCrappo from "~/components/sections/WhyCrappo";

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyCrappo />
    </main>
  );
}
