import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <main className="main mb-[100px]">
      <div className="ServicesBg w-full h-[356px] pt-[180px] mt-20">
        <h1 className="DM font-normal text-7xl text-white leading-[87px] text-center tracking-widest ">
          Services
        </h1>
      </div>
      <div className="w-[1205px] h-[705px] m-auto mt-20">
        <div className="flex w-[1158px] h-[391px] mt-28 m-auto gap-11 items-center">
          <div className="transition w-[358px] h-full text-center flex flex-col gap-4 items-center hover:bg-gray-100  hover:text-[#C76904] pt-7 cursor-pointer rounded-[10px]">
            <h2 className="DM font-normal text-2xl leading-8 text-center ">
              Project Plan
            </h2>
            <p className="Jost text-xl leading-8 tracking-widest ">
              There are many variations of the <br /> passages of lorem Ipsum
              from
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
          <div className="w-[358px] h-full text-center flex flex-col gap-4 items-center hover:bg-gray-100 hover:text-[#C76904] pt-7 transition cursor-pointer rounded-[10px]">
            <h2 className="DM font-normal text-2xl leading-8 text-center ">
              Interior Work
            </h2>
            <p className="Jost text-xl leading-8 tracking-widest ">
              There are many variations of the <br /> passages of lorem Ipsum
              from
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
          <div className="w-[358px] h-full text-center flex flex-col gap-4 items-center hover:bg-gray-100 hover:text-[#C76904] pt-7 transition cursor-pointer rounded-[10px]">
            <h2 className="DM font-normal text-2xl leading-8 text-center ">
              Retail Design
            </h2>
            <p className="Jost text-xl leading-8 tracking-widest ">
              There are many variations of the <br /> passages of lorem Ipsum
              from
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

        <br />

        <div className="flex w-[1158px] h-[391px] mt-28 m-auto gap-11 items-center">
          <div className="w-[358px] h-full text-center flex flex-col gap-4 items-center pt-7 hover:bg-gray-100 hover:text-[#C76904] transition cursor-pointer rounded-[10px]">
            <h2 className="DM font-normal text-2xl leading-8 text-center ">
              2d/3d Art Work
            </h2>
            <p className="Jost text-xl leading-8 tracking-widest ">
              There are many variations of the <br /> passages of lorem Ipsum
              from
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
          <div className="w-[358px] h-full text-center flex flex-col gap-4 items-center bg-gray-100 text-[#C76904] pt-7 rounded-[10px] hover:bg-white hover:text-black transition cursor-pointer">
            <h2 className="DM font-normal text-2xl leading-8 text-center ">
              Interior Work
            </h2>
            <p className="Jost text-xl leading-8 tracking-widest ">
              There are many variations of the <br /> passages of lorem Ipsum
              from
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
          <div className="w-[358px] h-full text-center flex flex-col gap-4 items-center pt-7 hover:bg-gray-100 hover:text-[#C76904] transition cursor-pointer rounded-[10px]">
            <h2 className="DM font-normal text-2xl leading-8 text-center ">
              Decoration Work
            </h2>
            <p className="Jost text-xl leading-8 tracking-widest ">
              There are many variations of the <br /> passages of lorem Ipsum
              from
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
      </div>
    </main>
  );
};

export default Services;
