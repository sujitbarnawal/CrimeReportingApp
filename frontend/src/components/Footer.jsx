import { facebook_icon, twitter_icon, linkedin_icon } from "../assets/assets";
const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-[20px] px-[8vw] pt-[80px] mt-[100px] ">
      <div className="w-full grid grid-cols-[2fr_1fr] gap-20 max-750:flex max-750:flex-col max-750:gap=[35px] ">
        <div className="flex flex-col items-start gap-5 ">
          <p className="text-[#D32F2F] text-3xl font-bold w-[150px] ">
            CrimeConnect
          </p>{" "}
          <p>
            CrimeConnect provides a platform where your concerns matter. Report
            incidents, share critical information, and help build safer
            neighborhoods for everyone. Our mission is to empower communities by
            promoting transparency, fostering collaboration, and ensuring that
            every voice is heard. Together, we can take meaningful steps toward
            reducing crime and creating a more secure environment for future
            generations
          </p>
          <div className="flex">
            <img
              className="w-10 mr-[15px]"
              src={facebook_icon}
              alt="facebook"
            />
            <img
              className="w-10 mr-[15px]"
              src={linkedin_icon}
              alt="linkedIn"
            />
            <img className="w-10 mr-[15px]" src={twitter_icon} alt="twitter" />
          </div>
        </div>

        

        <div className="flex flex-col items-start gap-5 ">
          <h2 className="text-white text-2xl font-semibold">CONTACT US</h2>
          <ul>
            <li className="mb-2.5 cursor-pointer">+977-9800000000</li>
            <li className="mb-2.5 cursor-pointer">crimeconnect@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="w-full h-[2px] my-5 mx-0 bg-gray-200 border-none" />
      <p className="max-750:text-center">
        Copyright {new Date().getFullYear()} &#169; CrimeConnect.com - All Rights
        Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
