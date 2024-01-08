import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext, useState } from "react";
import { FaSignOutAlt, FaTimes, FaUserAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLogOut = () =>
    logOut()
      .then(() => console.log("User logged out"))
      .catch((error) => console.log(error));

  console.log(user);

  const navItems = (
    <>
      <div className="lg:hidden block absolute top-24 w-full left-0 right-0 transition bg-white">
        <ul className="text-center text-xl px-10">
          <li>
            <div>
              {user ? (
                <>
                  <div className="gap-2 flex flex-col md:flex-row items-center hover:bg-primary  rounded-lg ">
                    <div className=" flex justify-center ">
                      <div className="dropdown dropdown-bottom dropdown-center text-text">
                        <label tabIndex={0} className=" m-1">
                          <img
                            className="relative  inline-block w-12 aspect-square rounded-md object-cover object-center "
                            alt="Image placeholder"
                            src={user.photoURL}
                          />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <h2 className="px-2 rounded-lg">
                              <FaUserAlt />
                              {user.displayName}
                            </h2>
                          </li>
                          <Link to="/dashboard">
                            {" "}
                            <li>
                              <button className="  px-2 rounded-lg">
                                <MdDashboard />
                                DashBoard
                              </button>
                            </li>
                          </Link>
                          <li>
                            <button
                              className="  px-2 rounded-lg"
                              onClick={handleLogOut}
                            >
                              <FaSignOutAlt />
                              Sign Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="my-4 py-4 border-b font-semibold hover:text-white border-primary">
                  <label tabIndex={0} className=" m-1">
                    <img
                      className="relative  inline-block h-6 w-6 rounded-md object-cover object-center "
                      alt="Image placeholder"
                      src="logo.png"
                    />
                  </label>
                </div>
              )}
            </div>
          </li>

          <NavLink>
            <li className="my-4 py-4 border-b font-semibold hover:text-white border-primary hover:bg-primary hover:rounded">
              Home
            </li>
          </NavLink>
          <NavLink>
            <li className="my-4 py-4 border-b font-semibold hover:text-white border-primary hover:bg-primary hover:rounded">
              Bidding
            </li>
          </NavLink>
          <NavLink>
            <li className="my-4 py-4 border-b font-semibold hover:text-white border-primary hover:bg-primary hover:rounded">
              About
            </li>
          </NavLink>
          <NavLink>
            <li className="my-4 py-4 border-b font-semibold hover:text-white border-primary hover:bg-primary hover:rounded">
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="fixed top-0 w-full h-24 flex justify-between z-50 text-text  lg:py-5 md:px-20 px-5 py-4 ">
        <div className="flex items-center ">
          <Logo></Logo>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="">
            <ul className="flex items-center gap-2 md:gap-4 lg:gap-8 mr-16 font-medium font-heading text-[18px]">
              <NavLink>
                <li className="hover:text-primary transition border-b-2 border-primary hover:border-primary cursor-pointer">
                  Home
                </li>
              </NavLink>
              <NavLink>
                <li className="hover:text-primary transition border-b-2 border-primary hover:border-primary cursor-pointer">
                  Bidding
                </li>
              </NavLink>
              <NavLink>
                <li className="hover:text-primary transition border-b-2 border-primary hover:border-primary cursor-pointer">
                  About
                </li>
              </NavLink>
              <NavLink>
                <li className="hover:text-primary transition border-b-2 border-primary hover:border-primary cursor-pointer">
                  Contact
                </li>
              </NavLink>

              {user ? (
                <>
                  <div className="gap-2 w-12 flex flex-col md:flex-row items-center hover:bg-primary  rounded-lg ">
                    <div className=" flex justify-center items-center ">
                      <div className="dropdown dropdown-bottom dropdown-end text-text">
                        <label tabIndex={0} className=" m-1">
                          <img
                            className="relative  inline-block w-10 aspect-square rounded-md object-cover object-center "
                            alt="Image placeholder"
                            src={user.photoURL}
                          />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <h2 className="px-2 rounded-lg">
                              <FaUserAlt />
                              {user.displayName}
                            </h2>
                          </li>
                          <Link to="/dashboard">
                            {" "}
                            <li>
                              <button className="  px-2 rounded-lg">
                                <MdDashboard />
                                DashBoard
                              </button>
                            </li>
                          </Link>
                          <li>
                            <button
                              className="  px-2 rounded-lg"
                              onClick={handleLogOut}
                            >
                              <FaSignOutAlt />
                              Sign Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  className="hover:bg-black  px-2 rounded-lg"
                  to="/register"
                >
                  Sign Up
                </NavLink>
              )}
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        <div>{click && navItems}</div>

        <button className="block sm:hidden transition " onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
