/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [reports, setReports] = useState([]);

  // Fetch all reports
  const fetchReports = async () => {
    try {
      const response = await axios.get(`${url}/api/report/list-all`);
      if (response.data.success) {
        setReports(response.data.reports);
        console.log(response.data.reports);
      }
    } catch (error) {
      toast.error("Error occurred while fetching reports", error);
    }
  };

  // Update report status
  const updateStatus = async (id) => {
    const reportToUpdate = reports.find((r) => r._id === id); // Find the specific report
    const { status } = reportToUpdate;

    try {
      const response = await axios.post(`${url}/api/report/update-status`, {
        id,
        status, // Send the updated status
      });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error occurred while updating status", error);
    }
  };

  // Fetch reports on component mount
  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="w-[90%] m-auto grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] mt-[30px] gap-[30px] gap-y-[50px]">
      {reports.map((report, index) => {
        const { image, title, status, description, location, _id } = report;

        return (
          <div key={index} className="mt-[30px] ">
            <div className="w-full m-auto min-h-fit max-h-[800px] rounded-[15px] shadow-md shadow-[#00000015] transition-[0.3s] animate-fadeIn">
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
              <div className="flex items-center ">
                <select
                  value={status} // Use the report's current status
                  onChange={(e) => {
                    const updatedReports = reports.map((r) =>
                      r._id === _id ? { ...r, status: e.target.value } : r
                    );
                    setReports(updatedReports); // Update the specific report's status
                  }}
                  className="px-2 py-1 rounded border border-gray-300"
                >
                  <option value="Pending">Pending</option>
                  <option value="Under-Investigation">Under Investigation</option>
                  <option value="Resolved">Resolved</option>
                </select>
                
              </div>
              <button
                  onClick={() => updateStatus(_id)} 
                  className="min-w-fit ml-2 mb-4 mt-4 bg-[#D32F2F] text-white px-4 py-2 rounded w-[90px]"
                >
                  Update Status
                </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
