import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <main className=" w-[1210px] h-full m-auto mt-28 mb-[100px] ">
      <div className="HeroWrapper w-full h-[758px] p-9">
        <article className="flex flex-col gap-8 mt-10">
          <h1 className="DM text-6xl font-normal text-white leading-[82px] ">
            Let's make your <br /> home beautiful together
          </h1>
          <p className="Inter text-[22px] leading-8 tracking-widest text-[#FFFFFF] font-light ">
            There are many variations of the passages <br /> of lorem Ipsum
            fromavailable, majority.
          </p>
          <button className="Inter text-white w-[230px] h-[75px] flex items-center gap-2 justify-center bg-[#CDA274] rounded-[18px]  font-semibold text-lg tracking-widest ">
            Get Started <FaArrowRight />
          </button>
        </article>
      </div>
      <div className="flex w-[1158px] h-[225px] mt-28 m-auto gap-11 items-center">
        <div className="w-[358px] h-full text-center flex flex-col gap-4 items-center  hover:bg-gray-100  hover:text-[#C76904]  cursor-pointer transition rounded-[10px]">
          <h2 className="DM font-normal text-2xl leading-8 text-center ">
            Project Plan
          </h2>
          <p className="Jost text-xl leading-8 tracking-widest ">
            There are many variations of the <br /> passages of lorem Ipsum from
            <br />
            available, majority.
          </p>
          <a
            href="/#"
            className="Jost flex items-center gap-2 m-auto font-semibold text-lg leading-5 tracking-widest"
          >
            Read More <FaArrowRight />
          </a>
        </div>
        <div className="w-[358px] h-full text-center flex flex-col gap-4 items-center  hover:bg-gray-100  hover:text-[#C76904]  cursor-pointer transition rounded-[10px]">
          <h2 className="DM font-normal text-2xl leading-8 text-center ">
            Interior Work
          </h2>
          <p className="Jost text-xl leading-8 tracking-widest ">
            There are many variations of the <br /> passages of lorem Ipsum from
            <br />
            available, majority.
          </p>
          <a
            href="/#"
            className="Jost flex items-center gap-2 m-auto font-semibold text-lg leading-5 tracking-widest"
          >
            Read More <FaArrowRight />
          </a>
        </div>
        <div className="w-[358px] h-full text-center flex flex-col gap-4 items-center  hover:bg-gray-100  hover:text-[#C76904]  cursor-pointer transition rounded-[18px]">
          <h2 className="DM font-normal text-2xl leading-8 text-center ">
            Realization
          </h2>
          <p className="Jost text-xl leading-8 tracking-widest ">
            There are many variations of the <br /> passages of lorem Ipsum from
            <br />
            available, majority.
          </p>
          <a
            href="/#"
            className="Jost flex items-center gap-2 m-auto font-semibold text-lg leading-5 tracking-widest"
          >
            Read More <FaArrowRight />
          </a>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
