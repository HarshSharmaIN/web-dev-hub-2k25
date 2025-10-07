import React from "react";
import Logo from "../assets/netflix.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex absolute z-[100] justify-between py-6 px-6 w-full text-white">
      <Link to="/">
        <img className="w-24 h-10 md:w-40 md:h-16" src={Logo} alt="" />
      </Link>
      {user?.email ? (
        <div className="flex items-center space-x-4 ">
          <Link to="/account">
            <button className="text-[12px] md:text-[16px] py-1 px-2 md:px-4  text-[#E50914] rounded-sm h-fit">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="text-[12px] md:text-lg py-2 px-3  md:px-6  bg-[#E50914] rounded-sm h-fit "
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-4 ">
          <Link to="/login">
            <button className="text-[12px] md:text-[16px] py-1 px-2 md:px-4 bg-white/90 text-[#E50914] hover:bg-white rounded-sm h-fit">
              SIGN IN
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-[12px] md:text-[16px] py-1 px-2 md:px-4 bg-[#E50914]/90 hover:bg-[#E50914] rounded-sm h-fit ">
              JOIN NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
