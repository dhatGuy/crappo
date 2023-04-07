import { BtcMask, EthMask } from "~/assets";
import Button from "../Button";

function CTA() {
  return (
    <section className="py-10 px-10 md:px-16 bg-gradient-to-b from-[#2B076E] to-primary">
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
    </section>
  );
}

export default CTA;
