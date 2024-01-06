import { useEffect, useState } from "react";
import { useRef } from "react";
import Logo from "../Logo/Logo";
import { LayoutDashboard, HelpCircleIcon, LogOut, Gavel, BarChart2 } from 'lucide-react';
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";




import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { GrAnalytics } from "react-icons/gr";
import { BsDatabaseAdd } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";


const DashboardHome = () => {

  const location = useLocation();

  const isRouteActive = (path) => {
    return location.pathname === path;
  };

  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();


  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);



  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };


  return (
    <>
      <div className="flex gap-5">

        <div>
          <div
            onClick={() => setOpen(false)}
            className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
              } `}
          ></div>
          <motion.div
            ref={sidebarRef}
            variants={Nav_animation}
            initial={{ x: isTabletMid ? -250 : 0 }}
            animate={open ? "open" : "closed"}
            className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
          >
            <div className="flex items-center gap-4 font-medium border-b py-3 border-slate-300  mx-3">
              <img
                src="logo.png"
                width={45}
                alt=""
              />
              <span className="text-xl font-bold font-heading whitespace-pre">ReWaste</span>
            </div>

            <div className="flex flex-col  h-full">
              <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-heading font-medium overflow-x-hidden    md:h-[68%] h-[70%]">
                <li>
                  <NavLink to={"/"} className={`link ${isRouteActive("/") ? "bg-primary" : ""}`}>
                    <AiOutlineAppstore size={23} className="min-w-max " />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/analytics"} className={`link ${isRouteActive("/dashboard/analytics") ? "bg-primary" : ""}`}>
                    <GrAnalytics size={23} className="min-w-max" />
                    Analytics
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/myBidding"} className={`link ${isRouteActive("/dashboard/myBidding") ? "bg-primary" : ""}`}>
                    <HiOutlineDatabase size={23} className="min-w-max" />
                    My Bidding
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/createBidding"} className={`link ${isRouteActive("/dashboard/createBidding") ? "bg-primary" : ""}`}>
                    <BsDatabaseAdd size={23} className="min-w-max" />
                    Create Bidding
                  </NavLink>
                </li>
              </ul>

              <div className="  whitespace-pre flex-1  z-50  max-h-48 my-auto  w-full   ">
                <div className="flex px-2.5 text-[0.9rem] py-5 flex-col gap-1 font-heading font-medium overflow-x-hidden  border-y border-slate-300 p-4 ">

                  <li className="link">
                    <CiLogout size={23} className="min-w-max" />
                    Log Out
                  </li>
                </div>
              </div>

            </div>
            <motion.div
              onClick={() => {
                setOpen(!open);
              }}
              animate={
                open
                  ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
                  : {
                    x: -10,
                    y: -200,
                    rotate: 180,
                  }
              }
              transition={{ duration: 0 }}
              className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
            >
              <IoIosArrowBack size={25} />
            </motion.div>
          </motion.div>
          <div className="p-3 md:hidden  " onClick={() => setOpen(true)}>
            <MdMenu size={25} />
          </div>
        </div>

        {/* main content */}

        <div className="max-w-5xl flex-1 mx-auto py-4">

          <Outlet></Outlet>
        </div>

      </div>

    </>
  );



};

export default DashboardHome;
