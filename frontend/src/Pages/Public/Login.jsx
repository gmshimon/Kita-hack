import { IoMailSharp, IoLockClosedSharp } from "react-icons/io5";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-sm w-full flex flex-col items-center gap-2">
          <img src="/logo.png" className="max-w-40 mr-6" />
          {/* FORM CONTAINER */}
          <div className="w-full font-heading mt-6">
            <h1 className="text-center font-semibold text-4xl">Login</h1>
            <form className="mt-6">
              {/* EMAIL INPUT */}
              <div className="relative mb-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoMailSharp className="w-4 text-primary"></IoMailSharp>
                </div>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5"
                  placeholder="Your Email"
                ></input>
              </div>
              {/* PASSWORD INPUT */}
              <div className="relative mb-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoLockClosedSharp className="w-4 text-primary"></IoLockClosedSharp>
                </div>
                <input
                  type={seePassword ? "text" : "password"}
                  className="bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5"
                  placeholder="Your Password"
                ></input>
                <button
                  type="button"
                  className="absolute right-3 inset-y-0 text-xl text-gray-600"
                  onClick={() => {
                    setSeePassword(!seePassword);
                  }}
                >
                  {seePassword ? (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye></AiFillEye>
                  )}
                </button>
              </div>
              {/* SUBMIT BUTTON */}
              <button className="btn bg-primary text-white hover:bg-primary border-none block mx-auto w-1/2">
                Login
              </button>
            </form>
            <h1 className="text-center mt-10 font-semibold">
              {"Don't have an account? "}
              <Link className="link text-primary" to={"/register"}>
                Sign Up
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
