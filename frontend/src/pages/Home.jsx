/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import ReportDisplay from "../components/ReportDisplay";
import { report_category_list } from "../assets/assets";

const Home = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { token } = useContext(StoreContext);
  const [category, setCategory] = useState("All");

  const handleCategoryToggle = (selectedCategory) => {
    setCategory((prev) =>
      prev === selectedCategory ? "All" : selectedCategory
    );
  };

  return (
    <div className="mt-4 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">About Us</h2>
      <p className="text-xl w-full">
        Join CrimeConnect to report crimes, raise awareness, and stay informed
        about the safety of your community. Be a part of a proactive network
        where your voice matters, and your actions make a difference. Share
        incidents, collaborate with others, and access real-time updates to stay
        one step ahead. Together, we can foster a culture of vigilance,
        accountability, and solidarity, creating safer neighborhoods and a
        brighter future for everyone.
      </p>
      {!token ? (
        <button
          onClick={() => setShowLogin(true)}
          className="font-[400] cursor-pointer p-2 px-5 w-[150px]
            bg-[#d32f2f] mt-6 rounded-[18px] text-[20px] text-white max-480:text-[14px] max-480:px-4 "
        >
          Add Report
        </button>
      ) : (
        <button
          onClick={() => navigate("/add")}
          className="font-[400] cursor-pointer p-2 px-5 w-[150px]
            bg-[#d32f2f] mt-6 rounded-[18px] text-[20px] text-white max-480:text-[14px] max-480:px-4 "
        >
          Add Report
        </button>
      )}
      <h2 className="text-2xl font-semibold mt-6">Recent Posts</h2>
      <div className="flex justify-start items-center gap-4 my-5 overflow-x-scroll hide-scrollbar">
        {report_category_list.map((report, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 rounded-lg min-w-fit ${
              category === report.category_name
                ? "bg-[#d32f2f] text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleCategoryToggle(report.category_name)}
          >
            {report.category_name}
          </div>
        ))}
      </div>
      <hr className="my-2.5 mx-0 h-[2px] bg-[#e2e2e2] border-none " />
      <ReportDisplay category={category} />
    </div>
  );
};

export default Home;
