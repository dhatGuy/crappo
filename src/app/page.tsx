import CTA from "~/components/sections/CTA";
import CryptoCurrencies from "~/components/sections/CryptoCurrencies";
import Features from "~/components/sections/Features";
import Hero from "~/components/sections/Hero";
import Rate from "~/components/sections/Rate";
import WhyCrappo from "~/components/sections/WhyCrappo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyCrappo />
      <Rate />
      <CryptoCurrencies />
      <Features />
      <CTA />
    </main>
  );
}
