import { useEffect, useState } from "react";
import MainPageCard from "./HomeSections/MainPageCard";
import Banner from "./HomeSections/Banner";


const Home = () => {


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
