import svgimage from "../../assets/_.svg";
import { BedroomContext } from "../AllContext";
import { useContext } from "react";

const BedRoom = () => {
  const bedroom = useContext(BedroomContext);

  return (
    <main>
      <div className="w-[1210px] h-auto m-auto my-[50px] flex flex-wrap gap-[40px]">
        {bedroom.map((b) => {
          return (
            <div key={b.id}>
              <img src={b.img} alt={b.name} />
              <div className="flex justify-between w-[580px] h-[70px] my-8">
                <article>
                  <h4 className="DM font-normal text-[25px] leading-8 tracking-widest">
                    {b.name}
                  </h4>
                  <p>{b.category}</p>
                </article>
                <img src={svgimage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BedRoom;
