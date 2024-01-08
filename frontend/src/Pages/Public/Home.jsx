import { useEffect } from "react";
import MainPageCard from "./Cards/MainPageCard";
import { get } from "../../utilis/queries";

const Home = () => {
  useEffect(()=>{
    const {returnData} = get("products")
    console.log(returnData)
  },[])
  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <img className="h-96 w-full rounded-md object-cover object-center"
          src="Green.png"
        />
        <button className="absolute top-20 hover:text-white transition border-b-2 border-primary hover:bg-primary rounded-md cursor-pointer" >Get Started</button>
      </div>

      <div className="container mx-auto font-bold text-heading text-3xl text-center">
        <MainPageCard></MainPageCard>

        <div className="">

        </div>
      </div>
    </>
  );
};

export default Home;
