import { Bitcoin, Ethereum, LiteCoin } from "~/assets";

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
    <section className="bg-white">
      <div>
        <h2 className="md:text-[40px] text-2xl md:leading-[60px] text-primary py-20 font-bold max-w-2xl text-center mx-auto">
          Trade securely and market the high growth cryptocurrencies.
        </h2>
      </div>

      <div>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3 justify-items-center">
            {currencies.map(({ icon: Icon, ...currency }) => (
              <div
                className="p-6 flex flex-col justify-center text-center max-w-sm gap-8"
                key={currency.name}
              >
                <div className="inline-flex items-center justify-center flex-shrink-0">
                  <Icon />
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <h1 className="text-3xl font-bold leading-none tracking-tighter text-primary lg:text-3xl">
                    {currency.name}{" "}
                    <span className="font-medium text-lg text-[#BDBDBD]">
                      {currency.short}
                    </span>
                  </h1>
                  <p className="text-base leading-relaxed text-[#828282]">
                    {currency.description}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="none"
                    viewBox="0 0 64 64"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoCurrencies;
