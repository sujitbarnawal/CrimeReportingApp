/* eslint-disable react/prop-types */

import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import Report from "./Report"


const ReportDisplay = ({category}) => {

    const {reports}=useContext(StoreContext)

  return (
    <div className="mt-[30px]">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] mt-[30px] gap-[30px] gap-y-[50px] ">
        {reports.map((report, index) => {

          if(category==="All" || category===report.category){
            return (
              <Report
                key={index}
                id={report._id}
                title={report.name}
                description={report.description}
                image={report.image}
                location={report.location}
                date={report.date}
                status={report.status}
                reportedBy={report.reportedBy}
              />
            );
          }        
        })}
      </div>
    </div>
  )
}

export default ReportDisplay
