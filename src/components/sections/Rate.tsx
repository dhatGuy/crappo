import Button from "../Button";

function Rate() {
  return (
    <section className="py-28 relative">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-bold text-4xl sm:text-2xl">
            Check how much you can earn
          </p>
          <p className="mt-3 text-lg text-[#E0E0E0]">
            Let&apos;s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      <div className="right-0 left-0 -bottom-96 rounded-xl mx-auto overflow-hidden max-w-2xl">
        <form className="bg-[#FBFCFE] flex flex-col md:flex-row justify-between p-4">
          <div className="flex flex-col md:flex-row flex-1 justify-between gap-8">
            <div className="relative z-0 mb-6 md:w-2/3">
              <input
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Enter your hash rate"
                required
              />
            </div>
            <div className="relative z-0 mb-6 md:w-1/3">
              <select
                id="rates"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
              >
                <option>TH/s</option>
                <option>GH/s</option>
                <option>MH/s</option>
                <option>kH/s</option>
              </select>
            </div>
          </div>

          <div className="mx-auto">
            <Button>Calculate</Button>
          </div>
        </form>

        <div className="bg-white p-4">
          <div className="text-[#3671E9] font-medium">
            ESTIMATED 24 HOUR REVENUE:
          </div>
          <h2 className="text-primary font-bold text-3xl">
            0.055 130 59 ETH<span className="text-[#3671E9]"> ($1275)</span>
          </h2>
          <span className="text-[#828282]">
            Revenue will change based on mining difficulty and Ethereum price.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Rate;
