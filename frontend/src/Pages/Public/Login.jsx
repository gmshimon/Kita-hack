import { IoMailSharp, IoLockClosedSharp } from "react-icons/io5";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Pages/Private/providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);

  const { signInWithGoogle, signInUser } = useContext(AuthContext);

  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();



  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user)
        setSuccess('Logged In Successfully')
        e.target.reset();
        navigate('/')
      })
      .catch(error => {
        console.error(error);
        if (error.code === 'auth/invalid-login-credentials') {
          setLoginError("Invalid email or password. Please check your credentials.");
        } else {
          setLoginError(error.message);
        }
      });

    setLoginError('');
    setSuccess('');

    if (!email) {
      setLoginError("Email does not match");
      return;
    }

    if (!password) {
      setLoginError("Password does not match")
      return;
    }

  }



  return (
    <>
      <div className="min-h-screen flex justify-center p-24">
        <div className="max-w-sm w-full flex flex-col items-center gap-2">
          <img src="/logo.png" className="max-w-40 mr-6" />
          {/* FORM CONTAINER */}
          <div className="w-full font-heading mt-6">
            <h1 className="text-center font-semibold text-4xl mb-6">Login</h1>
            <hr className="mb-3" />

            <form onSubmit={handleLogin} className="mt-6">
              {/* EMAIL INPUT */}
              <div className="relative mb-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoMailSharp className="w-4 text-primary"></IoMailSharp>
                </div>
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
            <h1 className="text-center mt-3 font-semibold">
              {"Don't have an account? "}
              <Link className="link text-primary" to={"/register"}>
                Sign Up
              </Link>
            </h1>
            <hr className="my-6" />
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="btn mx-auto bg-transparent hover:bg-base-200 border-primary mt-3 flex items-center hover:border-primary"
              >
                <FcGoogle className="text-2xl"></FcGoogle> Login With Google
              </button>
            </div>
          </div>
          {
            loginError && <p className="text-red-500">{loginError}</p>
          }
          {
            success && <p className="text-green-500">{success}</p>
          }
        </div>
      </div>
    </>
  );
};

export default Login;
