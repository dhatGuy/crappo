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
    <section className="bg-[#2B076E]">
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
                  ? "md:flex-row-reverse md:px-0 items-center"
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
    </section>
  );
}

export default Features;
