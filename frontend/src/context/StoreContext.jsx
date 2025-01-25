/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState("");
  const [reports, setReports] = useState([]);
  const [editData, setEditData] = useState({});

  
  const fetchAllReports = async () => {
    const response = await axios.post(`${url}/api/report/list`);
    if (response.data.success) {
      setReports(response.data.reports);
    }
  };

  const value = { url, token, setToken, reports, editData, setEditData,fetchAllReports };
  
  useEffect(() => {
    function loadData() {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
    fetchAllReports();
  }, []);

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
