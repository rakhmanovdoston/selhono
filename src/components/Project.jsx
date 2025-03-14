import { useState, useEffect } from "react";
import { BathroomContext, BedroomContext } from "../AllContext";
import BathRooms from "./projectsComponents/BathRooms";
import BedRoom from "./projectsComponents/BedRoom";
import { NavLink } from "react-router-dom";

const Project = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  const [bedroomState, setBedroomState] = useState([]);
  const [bathroomState, setBathRoomState] = useState([]);

  useEffect(() => {
    async function fetchBedrooms() {
      try {
        const response = await fetch("http://localhost:3000/bedrooms", signal);

        if (!response.ok) {
          throw new Error("Network was not ok");
        }

        const bedroomsList = await response.json();
        setBedroomState(bedroomsList);
      } catch (error) {
        if (error.name == "AbortError") {
          console.log("Fetch is Cancelled");
        } else {
          console.error(error);
        }
      }
    }

    fetchBedrooms();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    async function fetchBathRooms() {
      try {
        const response = await fetch("http://localhost:3000/bathrooms", signal);

        if (!response.ok) {
          throw new Error("Network was not ok");
        }

        const bathroomsList = await response.json();
        setBathRoomState(bathroomsList);
      } catch (error) {
        if (error.name == "AbortError") {
          console.log("Fetch is Cancelled");
        } else {
          console.error(error);
        }
      }
    }
    fetchBathRooms();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <div className="ProjectsBg w-full h-[356px] pt-[180px] mt-20">
        <h1 className="DM font-normal text-7xl text-white leading-[87px] text-center tracking-widest">
          Our Project
        </h1>
      </div>
      <nav className="w-[880px] h-[75px] m-auto">
        <ul className="flex w-full h-[74px] border-2 border-solid border-[#CDA274] rounded-2xl  gap-3  text-center py-[0.5px] my-[40px]">
          <NavLink
            to={"bathrooms"}
            className="w-[219px] h-full py-[20px] Jost font-semibold text-lg leading-5 tracking-widest"
          >
            Bathroom
          </NavLink>
          <NavLink
            to={"bedrooms"}
            className="w-[219px] h-[73px] bg-[#CDA274] py-[20px] text-white rounded-[18px] Jost font-semibold text-lg leading-5 tracking-widest "
          >
            Bed Room
          </NavLink>
          <li className="w-[219px] h-full py-[20px] Jost font-semibold text-lg leading-5 tracking-widest">
            Kitchan
          </li>
          <li className="w-[219px] h-full py-[20px] Jost font-semibold text-lg leading-5 tracking-widest">
            Living Area
          </li>
        </ul>
      </nav>
      <div className="w-[1210px] h-auto m-auto my-[50px] flex flex-wrap gap-[40px]">
        <BathroomContext.Provider value={bathroomState}>
          <BathRooms />
        </BathroomContext.Provider>
        <BedroomContext.Provider value={bedroomState}>
          <BedRoom />
        </BedroomContext.Provider>
      </div>
    </main>
  );
};

export default Project;
