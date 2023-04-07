import { BtcStats, DetailedStats, ProfitTable } from "~/assets";
import Button from "../Button";

const features = [
  {
    title: "Invest Smart",
    description:
      "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.",
    Img: BtcStats,
  },
  {
    title: "Detailed Statistics",
    description:
      "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
    Img: DetailedStats,
  },
  {
    title: "Grow your profit and track your investments",
    description:
      "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
    Img: ProfitTable,
  },
];

function Features() {
  return (
    <section className="bg-[#2B076E] relative">
      <div className="py-20">
        <h1 className="md:text-[40px] text-2xl md:leading-[60px] font-bold max-w-3xl text-center mx-auto mb-12">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h1>

        <div className="space-y-28">
          {features.map(({ Img, ...feature }, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-16 px-4 ${
                index === 1
                  ? "md:flex-row-reverse md:px-0 md:items-center"
                  : "md:px-28"
              }`}
            >
              <div className="space-y-4 md:w-1/2">
                <h2 className="font-bold text-3xl">{feature.title}</h2>
                <p className="text-[#E0E0E0] max-w-sm">{feature.description}</p>
                <Button>Learn More</Button>
              </div>
              <div className="md:w-1/2">
                <Img />
              </div>
            </div>
          ))}
        </div>
      </div>

      <svg
        width="320"
        height="336"
        viewBox="0 0 320 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 -mt-20 -ml-20"
      >
        <circle
          cx="344"
          cy="344"
          r="343"
          transform="rotate(-120 344 344)"
          fill="url(#paint0_angular_1_130)"
        />
        <defs>
          <radialGradient
            id="paint0_angular_1_130"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(344 344) rotate(90) scale(343)"
          >
            <stop stop-color="white" stop-opacity="0.1" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}

export default Features;
