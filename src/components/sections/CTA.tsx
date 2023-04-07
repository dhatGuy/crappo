import { BtcMask, EthMask } from "~/assets";
import Button from "../Button";

function CTA() {
  return (
    <section className="py-10 px-10 md:px-16 bg-gradient-to-b from-[#2B076E] to-primary relative">
      <div className="p-10 my-10 mx-auto lg:flex lg:items-center lg:justify-between gap-x-20 bg-[#3671E9] rounded-lg relative overflow-hidden">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold tracking-tight xl:text-3xl text-white">
            Start mining now
          </h2>

          <p className="mt-3 max-w-xs">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-2/4">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2 gap-x-5">
            <input
              id="email"
              type="text"
              className="flex-1 py-2 bg-transparent border-0 border-b border-[rgba(255, 255, 255, 0.4)] placeholder:text-white sm:mx-2 focus:outline-none"
              placeholder="Email Address"
            />

            <Button className="bg-[#fff]">
              <span className="text-primary">Get Started</span>
            </Button>
          </div>
        </div>

        <BtcMask className="absolute right-0 md:bottom-0" />
        <EthMask className="absolute left-0 md:bottom-0 top-0" />
      </div>

      <svg
        width="849"
        height="392"
        viewBox="0 0 849 392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden xl:block absolute bottom-0 right-0"
      >
        <rect
          y="56.4214"
          width="200"
          height="1000"
          transform="rotate(-45 0 56.4214)"
          fill="url(#paint0_linear_1_446)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_446"
            x1="100"
            y1="464.124"
            x2="100"
            y2="1918.64"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="1" stop-color="white" stop-opacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width="849"
        height="392"
        viewBox="0 0 849 392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden xl:block absolute bottom-0 -left-30"
      >
        <rect
          y="56.4214"
          width="200"
          height="1000"
          transform="rotate(-45 0 56.4214)"
          fill="url(#paint0_linear_1_446)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_446"
            x1="100"
            y1="464.124"
            x2="100"
            y2="1918.64"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="1" stop-color="white" stop-opacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}

export default CTA;
