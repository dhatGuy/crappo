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
      <section className="">
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

          <div className="flex flex-col lg:flex-row gap-8">
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
      </section>
    </div>
  );
}

export default WhyCrappo;
