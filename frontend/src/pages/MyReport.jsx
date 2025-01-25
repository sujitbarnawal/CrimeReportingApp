/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyReport = () => {
  const { url, token, setEditData, fetchAllReports } = useContext(StoreContext);
  const [myReports, setMyReports] = useState([]);

  const navigate = useNavigate();

  const fetchMyReports = async () => {
    try {
      const response = await axios.post(
        `${url}/api/report/my-reports`,
        {},
        {
          headers: { token },
        }
      );
      if (response.data.success) {
        setMyReports(response.data.reports);
      }
    } catch (error) {
      toast.error("Error fetching reports.");
      console.error("Fetch error:", error);
    }
  };

  const editReport = (report) => {
    setEditData({
      _id: report._id,
      title: report.title,
      description: report.description,
      location: report.location,
      category: report.category,
      image: report.image,
      date: report.date.split("T")[0],
    });
    navigate("/edit");
  };

  const deleteReport = async (id, image) => {
    try {
      const response = await axios.post(
        `${url}/api/report/delete`,
        { id, image },
        { headers: { token } }
      );
      if (response.data.success) {
        setMyReports(myReports.filter((report) => report._id !== id));
        toast.success("Report deleted successfully");
        fetchAllReports();
      }
    } catch (error) {
      toast.error("Error in deleting report", error);
    }
  };

  const trackReports = async () => {
    try {
      const response = await axios.post(
        `${url}/api/report/track`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setMyReports(response.data.reports);
        fetchMyReports();
        toast.success("Reports tracked successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error in tracking report", error);
    }
  };

  useEffect(() => {
    fetchMyReports();
  }, [token]);

  return (
    <>
      {myReports.length === 0 ? (
        <>
           <p className="mt-10 text-2xl">
          You haven’t reported any crimes yet, but your efforts can make a real
          difference in your community. It only takes a few moments to submit a
          report and help create awareness. Don’t hesitate to share important
          information—start by filing your first report today. Every report
          matters, and your actions could help prevent future incidents. Use the
          {`"`}Add{`"`} Report button to take the first step in contributing to a safer
          environment. This space is waiting for your input, so be the change
          and make a positive impact by adding your first crime report now!
        </p>
        <button className="m-auto mt-10 bg-[#D32F2F] text-white px-4 py-2 rounded" onClick={()=>navigate('/add')}>Add Report</button>
        </>
      ) : (
        <button
          onClick={trackReports}
          className="m-auto ml-2 mt-4 bg-[#D32F2F] text-white px-4 py-2 rounded  "
        >
          Track Reports
        </button>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] mt-[30px] gap-[30px] gap-y-[50px] ">
        {myReports.map((myReport, index) => {
          const { image, title, status, description, location } = myReport;

          return (
            <div key={index} className="mt-[30px]">
              <div className="w-full m-auto min-h-fit rounded-[15px] shadow-md shadow-[#00000015] transition-[0.3s] animate-fadeIn">
                <div className="relative">
                  <img
                    className="w-full h-[250px] rounded-[15px] rounded-b-none"
                    src={`${url}/images/${image}`}
                    alt={title || "Report image"}
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2.5">
                    <p className="text-xl font-[500]">{title}</p>
                  </div>
                  <p className="text-[16px] font-[500]">{status}</p>
                  <p className="text-[#676767] text-[14px]">{description}</p>
                  <p className="text-[#D32F2F] my-2.5 mx-0 font-[500] text-[22px]">
                    {location}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => editReport(myReport)}
                    className="m-auto  mb-4 bg-[#D32F2F] text-white px-4 py-2 rounded w-[90px] "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteReport(myReport._id, myReport.image)}
                    className="m-auto mb-4 bg-[#D32F2F] text-white px-4 py-2 rounded w-[90px] "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyReport;
