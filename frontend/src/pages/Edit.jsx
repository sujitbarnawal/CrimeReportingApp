import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { upload_area } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";

const Edit = () => {
  const { editData, url, token } = useContext(StoreContext);

  const navigate = useNavigate();

  const [image, setImage] = useState(editData.image);
  const [preview, setPreview] = useState(image ? `${url}/images/${image}` : upload_area); 
  const [data, setData] = useState({
    title: editData.title,
    description: editData.description,
    category: editData.category,
    location: editData.location,
    date: editData.date,
  });

  const onChangeHandler = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); 
    }
  };

  const updateReport = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("category", data.category);
    formData.append("date", data.date);
    formData.append("_id", editData._id);
    try {
      const response = await axios.post(`${url}/api/report/edit`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token,
        },
      });

      console.log("Response from server:", response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/my-reports");
      } else {
        toast.error(response.data.message || "Update failed");
      }
    } catch (error) {
      console.error("Error during API call:", error); 
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,_25px)] mt-[50px] text-[#6d6d6d] text-[16px] ">
      <form onSubmit={updateReport} autoComplete="off" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img className="w-[120px]" src={preview} alt="image-preview" /> 
          </label>
          <input
            onChange={onImageChange} 
            type="file"
            id="image"
            hidden
            required={!image}
          />
        </div>
        <div className="flex flex-col gap-2.5 w-[max(40%,_280px)] ">
          <p>Title</p>
          <input
            onChange={onChangeHandler}
            value={data.title}
            className="p-2.5"
            type="text"
            name="title"
            placeholder="Write name here"
            required
          />
        </div>
        <div className="flex flex-col gap-2.5 w-[max(40%,_400px)] ">
          <p>Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="p-2.5"
            rows="4"
            name="description"
            placeholder="Write content here"
            required
          />
        </div>
        <div className="flex gap-[30px] ">
          <div className="flex flex-col gap-2.5">
            <p>Category</p>
            <select
              value={data.category}
              onChange={onChangeHandler}
              className="max-w-[120px] p-2.5"
              name="category"
              required
            >
              <option value=""></option>
              <option value="Theft">Theft</option>
              <option value="Robbery">Robbery</option>
              <option value="Assault">Assault</option>
              <option value="Fraud">Fraud</option>
              <option value="Cyber crime">Cyber crime</option>
              <option value="Harassment">Harassment</option>
              <option value="Vandalism">Vandalism</option>
              <option value="Drug related">Drug related</option>
              <option value="Domestic violence">Domestic violence</option>
              <option value="Missing Persons">Missing Persons</option>
              <option value="Hate Crime">Hate Crime</option>
              <option value="Arson">Arson</option>
              <option value="Human Trafficking">Human Trafficking</option>
              <option value="Suspicious Activity">Suspicious Activity</option>
              <option value="Illegal Dumping">Illegal Dumping</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <p>Location</p>
          <input
            value={data.location}
            onChange={onChangeHandler}
            className="max-w-[250px] p-2.5"
            type="text"
            name="location"
            placeholder="Lainchaur,Kathmandu"
            required
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <p>Date</p>
          <input
            value={data.date}
            onChange={onChangeHandler}
            className="max-w-[200px] p-2.5"
            type="date"
            name="date"
            required
          />
        </div>
        <button
          type="submit"
          className="max-w-[120px] border-none p-2.5 bg-black text-white cursor-pointer rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
