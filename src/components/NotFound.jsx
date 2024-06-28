import { FaArrowRight } from "react-icons/fa";

const NotFound = () => {
  return (
    <main>
      <img src="/Rectangle 40.png" alt="" className="mx-52 my-20 " />
      <div className="mx-[800px] my-[-200px]  mb-[120px] ">
        <h1 className="DM font-normal text-[250px] leading-[312px] text-[#CDA274]">
          404
        </h1>
        <p className="DM w-[569px] font-normal text-[35px] leading-10 tracking-widest mb-10">
          We are sorry, but the page <br /> you requested was not found
        </p>
        <a href="/" className="items-center">
          <button className=" flex items-center w-[254px] h-[75px] bg-[#292F36] text-white text-center rounded-[18px] px-[50px] gap-2">
            Back To Home <FaArrowRight className="text-[#CDA274]" />
          </button>
        </a>
      </div>
    </main>
  );
};

export default NotFound;
