/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

import { logout_icon, profile_icon, report_icon } from "../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center font-bold">
      <p
        onClick={() => navigate("/")}
        className="cursor-pointer text-2xl text-[#D32F2F] max-480:text-[23px] max-480:mt-1 "
      >
        CrimeConnect
      </p>
      {!token ? (
        <button
          onClick={() => setShowLogin(true)}
          className="font-[400] cursor-pointer mt-2 py-2 px-5 bg-[#d32f2f] rounded-[18px] text-[20px] text-white max-480:text-[14px] max-480:px-4"
        >
          Sign in
        </button>
      ) : (
        <div className="relative group ">
          <img
            className="cursor-pointer mt-2"
            src={profile_icon}
            alt="logged-in-icon"
          />
          <ul className="absolute hidden right-0 z-10 w-[120px] group-hover:flex group-hover:flex-col group-hover:gap-2.5 group-hover:bg-[#fff2ef] group-hover:py-3 group-hover:px-[15px] group-hover:rounded group-hover:border-[1px] group-hover:border-solid group-hover:border-[#D32F2F] group-hover:outline-[2px] group-hover:outline-white ">
            <li
              onClick={() => navigate("/my-reports")}
              className="cursor-pointer flex items-center gap-2.5 hover:text-[#D32F2F] "
            >
              <img className="w-5" src={report_icon} alt="" />
              <p>My Reports</p>
            </li>
            <hr />
            <li
              onClick={logout}
              className="cursor-pointer flex items-center gap-2.5 hover:text-[#D32F2F] "
            >
              <img className="w-5" src={logout_icon} alt="" />
              <p>Logout</p>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
