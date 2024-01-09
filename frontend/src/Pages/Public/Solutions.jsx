import { IoMdLeaf } from "react-icons/io";

const Solutions = () => {
  return (
    <>
      <div className="min-h-screen container px-4 mx-auto py-10">
        <div className="flex flex-col items-center mb-10">
          <IoMdLeaf className="text-primary text-5xl"></IoMdLeaf>
          <h2 className="font-semibold text-4xl font-heading">Our Solution</h2>
        </div>
        {/* STEP - 1 */}
        <div className="my-10">
          <div className="flex justify-center gap-2 items-center">
            <div>
              <img src="worker.png" className="flex-1 max-w-xs object w-full" />
            </div>
            <div>
              <img src="waste.png" className="flex-1 max-w-lg object w-full" />
            </div>
          </div>
          <h1 className="font-heading font-semibold mt-10 mb-2 text-center text-base md:text-3xl white">
            Sellers put their waste up for auction!
          </h1>
          <p className="max-w-lg text-center font-text text-gray-600 mx-auto text-xs md:text-base">
            Sellers add listings specifying the type of waste available (e.g.,
            coconut waste, palm oil biomass), the quantity, initial price and
            any specific terms or conditions
          </p>
        </div>

        {/* STEP - 2 */}
        <div className="my-10">
          <div className="flex justify-center gap-2 items-center">
            <div>
              <img
                src="plantworker.png"
                className="flex-1 max-w-xs object w-full"
              />
            </div>
            <div>
              <img src="coal.png" className="flex-1 max-w-xs  object w-full" />
            </div>
          </div>
          <h1 className="font-heading font-semibold mt-10 mb-2 text-center text-base md:text-3xl white">
            Buyers bid on the listings to compete for prices!
          </h1>
          <p className="max-w-lg text-center font-text text-gray-600 mx-auto text-xs md:text-base">
            Place competitive bids on the agricultural waste listings that match
            their requirements which allows them to get access to these
            resources at lower prices
          </p>
        </div>
        {/* STEP - 3 */}
        <div className="my-10">
          <div className="flex justify-center gap-2 items-center">
            <img
              src="logo.png"
              className="flex-1 p-8 max-w-xs object w-full -ml-10"
            />
          </div>
          <h1 className="font-heading font-semibold mt-10 mb-2 text-center text-base md:text-3xl white">
            The Impact
          </h1>
          <p className="max-w-2xl text-center font-text text-gray-600 mx-auto text-xs md:text-base">
            Plant owners experience the profound impact of reduced operational
            costs, securing agricultural waste at lower prices compared to coal.
            Through co-firing, they embrace a cleaner, eco-conscious approach,
            consuming less coal and significantly decreasing carbon emissions.
            Simultaneously, farmers find a new avenue for waste utilization,
            earning revenue while contributing to a greener environment. This
            harmonious partnership not only fuels a paradigm shift towards
            sustainability but also fosters economic growth while championing
            renewable resources
          </p>
        </div>
      </div>
    </>
  );
};

export default Solutions;
