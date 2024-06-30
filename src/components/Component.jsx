import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./HomePage";
import Services from "./Services";
import Project from "./Project";
import NotFound from "./NotFound";
import logoImage from "../assets/SELHONO.svg";

import { FaSearch } from "react-icons/fa";
import BathRooms from "./projectsComponents/BathRooms";
import BedRoom from "./projectsComponents/BedRoom";

const Component = () => {
  return (
    <div>
      <Router>
        <header className="w-[1210px] h-16 flex items-center m-auto justify-around">
          <img src={logoImage} alt="Logo" />
          <nav className="flex items-center gap-5">
            <ul className=" flex gap-6">
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#CDA274" : "",
                  })}
                  to="/"
                  className={"nav_link"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#CDA274" : "",
                  })}
                  to="/services"
                  className={"nav_link"}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#CDA274" : "",
                  })}
                  to="/project"
                  className={"nav_link"}
                >
                  Project
                </NavLink>
              </li>
            </ul>
            <FaSearch className=" cursor-pointer hover:text-[#CDA274]" />
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/*" element={<Project />}>
            <Route path="bathrooms" element={<BathRooms />} />
            <Route path="bedrooms" element={<BedRoom />} />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Component;
