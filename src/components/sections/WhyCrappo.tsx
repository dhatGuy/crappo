import { BarChart, Earth, EthIllustration, Person } from "~/assets";
import Button from "../Button";

const numbers = [
  {
    title: "$30B",
    description: "Digital Currency Exchanged",
    icon: BarChart,
  },
  {
    title: "10M+",
    description: "Trusted Wallets Investor",
    icon: Person,
  },
  {
    title: "195",
    description: "Countries Supported",
    icon: Earth,
  },
];

function WhyCrappo() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {numbers.map(({ icon: Icon, ...number }) => (
              <div className="flex gap-8 items-center" key={number.title}>
                <Icon />

                <div>
                  <h1 className="text-4xl font-bold">{number.title}</h1>

                  <p className="mt-2 text-[#E0E0E0]">{number.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <EthIllustration />

            <div className="flex flex-col gap-4 max-w-md text-center lg:text-left m-auto">
              <h1 className="text-4xl font-bold lg:leading-[60px]">
                Why you should choose CRAPPO
              </h1>
              <p className="text-[#E0E0E0]">
                Experience the next generation cryptocurrency platform. No
                financial borders, extra fees, and fake reviews.
              </p>
              <Button className="rounded-full md:self-start">Learn More</Button>
            </div>
          </div>
        </div>

        <svg
          width="185"
          height="196"
          viewBox="0 0 185 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0"
        >
          <path
            d="M225.167 0.583308C242.406 30.4423 247.077 65.9264 238.154 99.2298C229.23 132.533 207.442 160.928 177.583 178.167C147.724 195.406 112.24 200.077 78.9368 191.154C45.6335 182.23 17.2391 160.442 7.6294e-06 130.583L112.583 65.5833L225.167 0.583308Z"
            fill="url(#paint0_linear_1_745)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_745"
              x1="20.2837"
              y1="147.05"
              x2="188.417"
              y2="147.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.08" />
              <stop offset="1" stop-color="#35068C" stop-opacity="0.01" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          width="154"
          height="120"
          viewBox="0 0 154 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0"
        >
          <path
            d="M240 0C240 31.826 227.357 62.3484 204.853 84.8528C182.348 107.357 151.826 120 120 120C88.174 120 57.6516 107.357 35.1472 84.8528C12.6428 62.3485 4.80559e-06 31.826 0 1.52588e-05L48 7.62939e-06C48 19.0956 55.5857 37.4091 69.0883 50.9117C82.5909 64.4143 100.904 72 120 72C139.096 72 157.409 64.4143 170.912 50.9117C184.414 37.4091 192 19.0956 192 0H240Z"
            fill="url(#paint0_linear_1_1288)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1288"
              x1="8.61478"
              y1="22.5256"
              x2="143.022"
              y2="100.126"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0625" stop-color="white" stop-opacity="0.08" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          width="522"
          height="448"
          viewBox="0 0 522 448"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0"
        >
          <rect
            x="461.326"
            y="0.798828"
            width="120"
            height="997.881"
            transform="rotate(60 461.326 0.798828)"
            fill="url(#paint0_linear_1_743)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_743"
              x1="521.326"
              y1="347.558"
              x2="521.326"
              y2="998.68"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" stop-opacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </section>
    </div>
  );
}

export default WhyCrappo;
