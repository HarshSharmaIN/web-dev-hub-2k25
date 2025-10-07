import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-[94vh]">
      <img
        className="hidden object-cover absolute w-full h-full sm:block"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
      <div className="fixed z-50 py-24 px-4 mt-6 w-full">
        <div className="max-w-[450px] h-[550px] mx-auto bg-black/50 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            {error ? (
              <p className="py-2 px-3 my-2 text-sm bg-red-400 rounded">
                {error}
              </p>
            ) : null}
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-4 mt-6 w-full text-lg"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 bg-[#333333] indent-4 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 bg-[#333333] indent-4 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="mt-5 bg-[#E50914] w-full py-2 rounded">
                Sign In
              </button>
              <div className="flex text-[#B3B3B3] justify-between items-center">
                <p className="flex items-center">
                  <input className="mr-1 w-4 h-4 " type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-10 text-[16px] text-[#B3B3B3] ">
                New to Netflix?
                <Link to="/signup">
                  <b className="ml-1 text-white hover:underline">
                    Sign up now.
                  </b>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
