import profile_icon from "../assets/profile_icon.jpg"

const Navbar = () => {

  return (
    <div className="flex justify-between items-center py-[8px] px-[4%] ">
      <div className=" w-[max(10%,_80px)]">
        <p  className="cursor-pointer text-[#D32F2F] text-[27px] font-bold ">
          CrimeConnect
        </p>
        <p className="text-xl">Admin</p>
      </div>
      <img className="w-[100px] rounded-full" src={profile_icon} />
    </div>
  );
};

export default Navbar;
