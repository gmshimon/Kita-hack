import { useState } from "react";
import Logo from "../Logo/Logo";
import { LayoutDashboard, HelpCircleIcon, LogOut, Gavel, BarChart2 } from 'lucide-react';
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";

const DashboardHome = () => {

  const navLinks = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Bidding',
      icon: Gavel
    },
    {
      name: 'Analytics',
      icon: BarChart2
    },
    {
      name: 'Help',
      icon: HelpCircleIcon,
    },
    {
      name: 'Logout',
      icon: LogOut,
    },
  ]

  const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "5%" }
  }

  const [isExpanded, setIsExpanded] = useState(true);
  const [activeNavIndex, setActiveNavIndex] = useState(0)

  return (
    <>
      <div>
        {/* Navigation */}

        <motion.div
          animate={isExpanded ? "expanded" : "nonExpanded"}
          variants={variants}
          className={`py-12 flex flex-col border border-r-1 w-1/5 h-screen relative ${isExpanded ? "px-10" : "px-4"
            }`}
        >



          <div className="flex space-x-3 items-center font-heading text-3xl font-bold text-primary">
            <img className="w-8" src="logo.png" alt="" />
            <span className={isExpanded ? "block" : "hidden"}>ReWaste</span>
          </div>

          <div onClick={() => setIsExpanded(!isExpanded)} className="w-5 h-5 bg-primary rounded-full absolute -right-[10.5px] top-14 flex items-center justify-center">
            <MdArrowForwardIos />
          </div>

          <div className="mt-10 flex flex-col space-y-8">
            {navLinks.map((item, index) =>
              <div key={index} className={"flex space-x-3 p-2 rounded" + (activeNavIndex === index ? " bg-primary text-white font-semibold" : "")} onClick={() => setActiveNavIndex(index)}>
                <item.icon />
                <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
              </div>)}
          </div>


        </motion.div>


        {/* Main  */}



      </div>
    </>
  );
};

export default DashboardHome;
