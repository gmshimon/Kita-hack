import { useEffect } from "react";
import MainPageCard from "./HomeSections/MainPageCard";
import Banner from "./HomeSections/Banner";
import { get } from "../../utilis/queries";

const Home = () => {
  useEffect(() => {
    const { returnData } = get("products");
    console.log(returnData);
  }, []);

  return (
    <>
      <div className="bg-[url('/bannerbg.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="container mx-auto px-4">
          <Banner></Banner>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="my-10">
          <MainPageCard></MainPageCard>
        </div>
      </div>
    </>
  );
};

export default Home;
