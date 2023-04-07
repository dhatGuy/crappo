import { Bar, BtcIllustration } from "~/assets";
import Button from "../Button";
import Navbar from "../Navbar";

function Hero() {
  return (
    <div>
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <a
              href="#"
              className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 bg-[#252540]"
            >
              <span className="inline-block rounded-full px-3 py-1 text-primary bg-white font-medium">
                75% SAVE
              </span>
              <p className="flex items-center">For the Black Friday weekend</p>
            </a>

            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Fastest & secure platform to invest in crypto
            </h1>
            <p>
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <div className="flex items-center gap-x-3 sm:text-sm">
              <Button className="rounded-full flex items-center gap-x-2">
                Try for FREE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="#fff"></circle>
                  <path
                    fill="#3671E9"
                    d="M14.5 21a.998.998 0 01-.71-1.71L17.1 16l-3.18-3.31a1 1 0 111.42-1.41l3.86 4a1 1 0 010 1.4l-4 4a1 1 0 01-.7.32z"
                  ></path>
                </svg>
              </Button>
            </div>
          </div>
          <div className="hidden w-1/2 lg:block">
            <BtcIllustration />
          </div>
        </div>
        <div className="hidden md:block">
          <Bar className="absolute bottom-0 left-96" />
          <Bar className="absolute bottom-0 -right-96" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
