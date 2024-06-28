import svgImage from "../assets/_.svg";

const Project = () => {
  return (
    <main>
      <div className="ProjectsBg w-full h-[356px] pt-[180px] mt-20">
        <h1 className="DM font-normal text-7xl text-white leading-[87px] text-center tracking-widest">
          Our Project
        </h1>
      </div>
      <nav className="w-[880px] h-[75px] m-auto">
        <ul className="flex w-full h-[74px] border-2 border-solid border-[#CDA274] rounded-2xl  gap-3  text-center py-[0.5px] my-[40px]">
          <li className="w-[219px] h-full py-[20px] Jost font-semibold text-lg leading-5 tracking-widest">
            Bathroom
          </li>
          <li className="w-[219px] h-[73px] bg-[#CDA274] py-[20px] text-white rounded-[18px] Jost font-semibold text-lg leading-5 tracking-widest ">
            Bed Room
          </li>
          <li className="w-[219px] h-full py-[20px] Jost font-semibold text-lg leading-5 tracking-widest">
            Kitchan
          </li>
          <li className="w-[219px] h-full py-[20px] Jost font-semibold text-lg leading-5 tracking-widest">
            Living Area
          </li>
        </ul>
      </nav>
      <div className=" w-[1210px] h-auto m-auto my-[50px] flex flex-wrap gap-[40px]">
        <div>
          <img src="/Rectangle 27.png" alt="" />
          <div className="flex justify-between w-[580px] h-[70px] my-8 ">
            <article>
              <h4 className="DM font-normal text-[25px] leading-8 tracking-widest">
                Minimal Bedroom
              </h4>
              <p>Decor / Artchitecture</p>
            </article>
            <img src={svgImage} alt="" />
          </div>
        </div>

        <div>
          <img src="/Rectangle 28.png" alt="" />
          <div className="flex justify-between w-[580px] h-[70px] my-8 ">
            <article>
              <h4 className="DM font-normal text-[25px] leading-8 tracking-widest">
                Minimal Bedroom
              </h4>
              <p>Decor / Artchitecture</p>
            </article>
            <img src={svgImage} alt="" />
          </div>
        </div>

        <div>
          <img src="/Rectangle 29.png" alt="" />
          <div className="flex justify-between w-[580px] h-[70px] my-8 ">
            <article>
              <h4 className="DM font-normal text-[25px] leading-8 tracking-widest">
                Minimal Bedroom
              </h4>
              <p>Decor / Artchitecture</p>
            </article>
            <img src={svgImage} alt="" />
          </div>
        </div>

        <div>
          <img src="/Rectangle 30.png" alt="" />
          <div className="flex justify-between w-[580px] h-[70px] my-8 ">
            <article>
              <h4 className="DM font-normal text-[25px] leading-8 tracking-widest">
                Minimal Bedroom
              </h4>
              <p>Decor / Artchitecture</p>
            </article>
            <img src={svgImage} alt="" />
          </div>
        </div>

        <div>
          <img src="/Rectangle 31.png" alt="" />
          <div className="flex justify-between w-[580px] h-[70px] my-8 ">
            <article>
              <h4 className="DM font-normal text-[25px] leading-8 tracking-widest">
                Minimal Bedroom
              </h4>
              <p>Decor / Artchitecture</p>
            </article>
            <img src={svgImage} alt="" />
          </div>
        </div>

        <div>
          <img src="/Rectangle 32.png" alt="" />
          <div className="flex justify-between w-[580px] h-[70px] my-8 ">
            <article>
              <h4 className="DM font-normal text-[25px] leading-8 tracking-widest">
                Minimal Bedroom
              </h4>
              <p>Decor / Artchitecture</p>
            </article>
            <img src={svgImage} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
