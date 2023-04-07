"use client";

import { motion } from "framer-motion";
import { Bitcoin, Ethereum, LiteCoin } from "~/assets";
import Button from "../Button";

const currencies = [
  {
    name: "Bitcoin",
    short: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: Bitcoin,
  },
  {
    name: "Ethereum",
    short: "ETH",
    description:
      "Blockchain technology to create and run decentralized digital applications.",
    icon: Ethereum,
  },
  {
    name: "Litecoin",
    short: "LTC",
    description:
      "Cryptocurrency that enables instant payments to anyone in the world.",
    icon: LiteCoin,
  },
];

function CryptoCurrencies() {
  return (
    <section className="bg-white md:pt-48">
      <div>
        <h2 className="md:text-[40px] text-3xl md:leading-[60px] text-primary py-20 font-bold max-w-2xl text-center mx-auto px-4">
          Trade securely and market the high growth cryptocurrencies.
        </h2>
      </div>

      <div>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3 justify-items-center">
            {currencies.map(({ icon: Icon, ...currency }, i) => (
              <motion.div
                className="p-6 flex flex-col justify-center text-center max-w-sm gap-8 group rounded-xl hover:shadow-xl hover:bg-[#2B076E] hover:scale-105 transform transition-all duration-300 ease-in-out"
                key={currency.name}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="inline-flex items-center justify-center flex-shrink-0">
                  <Icon />
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <h1 className="text-3xl font-bold leading-none tracking-tighter text-primary group-hover:text-white lg:text-3xl">
                    {currency.name}{" "}
                    <span className="font-medium text-lg text-[#BDBDBD]">
                      {currency.short}
                    </span>
                  </h1>
                  <p className="text-base leading-relaxed text-[#828282] group-hover:text-white">
                    {currency.description}
                  </p>

                  <Button className="hidden py-3 group-hover:flex items-center gap-x-2">
                    Start mining{" "}
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

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="none"
                    viewBox="0 0 64 64"
                    className="group-hover:hidden"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="31"
                      stroke="#2B076E"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                    ></circle>
                    <path
                      fill="#3671E9"
                      d="M29 42a2.001 2.001 0 01-1.42-3.42L34.2 32l-6.36-6.62a2 2 0 112.84-2.82l7.72 8a2 2 0 010 2.8l-8 8A2.001 2.001 0 0129 42z"
                    ></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoCurrencies;
