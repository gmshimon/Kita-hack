import { GrProjects } from "react-icons/gr";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-4 md:py-20">
        {/* CONTENT */}
        <div className="flex-1 p-10 rounded-xl shadow-xl bg-white">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
            Sustainable <span className="text-accent">Energy</span> Through
            <span className="text-primary"> Agricultural Waste</span> Solutions
          </h3>
          <p className="text-sm md:text-lg font-heading text-gray-600 mb-6 md:mb-10">
            Revolutionizing Energy Production: Co-firing agricultural waste with
            coal through our bidding platform for cleaner, sustainable power
            generation. Join us in transforming waste into renewable energy.
          </p>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-2">
            <Link to={"/solution"}>
              <button className="btn w-full bg-accent hover:bg-accent flex-nowrap whitespace-nowrap hover:shadow-xl border-none">
                Explore Our Solution
                <GrProjects className="text-lg"></GrProjects>
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="btn w-full bg-primary hover:bg-primary flex-nowrap whitespace-nowrap text-white hover:shadow-xl border-none">
                Get Involved
                <MdEnergySavingsLeaf className="text-2xl"></MdEnergySavingsLeaf>
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <img src="banner.png" className="w-full max-w-xs" />
        </div>
      </div>
    </>
  );
};

export default Banner;
