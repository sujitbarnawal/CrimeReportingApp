/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"


const Report = ({id,title,description,image,location,status,reportedBy}) => {
  const {url}=useContext(StoreContext)
  return (
    <div className="w-full m-auto h-[500px] rounded-[15px] shadow-md shadow-[#00000015] transition-[0.3s] animate-fadeIn ">
      <div className="relative">
        <img
          className="w-full h-[250px] rounded-[15px] rounded-b-none"
          src={`${url}/images/${image}`}
          alt="image"
        />
        
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-xl font-[500] ">{title}</p>
        </div>
        <p className="text-[16px] font-[500] ">{status}</p>
        <p className="text-[#676767] text-[14px]">{description}</p>
        <p className="text-[#D32F2F] my-2.5 mx-0 font-[500] text-[22px] ">{location}</p>
        <p className="text-[#D32F2F] my-2.5 mx-0 font-[500] text-[22px] "><span className="text-black">Reported by</span> :{reportedBy}</p>
      </div>
    </div>
  )
}

export default Report
