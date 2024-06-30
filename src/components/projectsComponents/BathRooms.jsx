import { BathroomContext } from "../../AllContext";
import svgImage from "../../assets/_.svg";
import { useContext } from "react";

const BathRooms = () => {
  const bathRooms = useContext(BathroomContext);

  return (
    <main>
      <div className="w-[1210px] h-auto m-auto my-[50px] flex flex-wrap gap-[40px]">
        {bathRooms.map((b) => {
          return (
            <div key={b.id}>
              <img src={b.img} alt={b.name} className=" w-[580px] h-[700px]" />
              <div className="flex justify-between w-[580px] h-[70px] my-8">
                <article>
                  <h4 className="DM font-normal text-[25px] leading-8 tracking-widest">
                    {b.name}
                  </h4>
                  <p>{b.category}</p>
                </article>
                <img src={svgImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BathRooms;
