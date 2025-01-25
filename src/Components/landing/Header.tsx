import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Primary, CEM, Lycee } from "../../Types/constants";

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const dropdownAnimation = "transition-all duration-300 transform scale-95";

  return (
    <header className="bg-main-color font-poppins relative z-30 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <div className="text-xl text-[#77E0DF] ml-2">Dz Teacher</div>
        </div>
        {/* Navigation Buttons with Dropdown Menus */}
        <nav>
          <ul className="flex space-x-16 text-xl text-nowrap">
            {/* Primary */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("primary")}
                className="flex items-center hover:text-gray-300"
              >
                Primaire{" "}
                <span className="ml-2 text-2xl font-mono transform rotate-90">
                  &gt;
                </span>
              </button>
              {activeMenu === "primary" && (
                <ul
                  className={`absolute left-0 mt-2 bg-secondary-color text-main-color shadow-md rounded-md ${dropdownAnimation}`}
                >
                  {Object.values(Primary).map((level, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 font-light"
                    >
                      <a href={`#primaire-${index + 1}`}>{level}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* CEM */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("cem")}
                className="flex items-center hover:text-gray-300"
              >
                Collège{" "}
                <span className="ml-2 text-2xl font-mono transform rotate-90">
                  &gt;
                </span>
              </button>
              {activeMenu === "cem" && (
                <ul
                  className={`absolute left-0 mt-2 bg-secondary-color text-main-color shadow-md rounded-md ${dropdownAnimation}`}
                >
                  {Object.values(CEM).map((level, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 font-light"
                    >
                      <a href={`#college-${index + 1}`}>{level}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Lycee */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("lycee")}
                className="flex items-center hover:text-gray-300"
              >
                Lycée{" "}
                <span className="ml-2 text-2xl font-mono transform rotate-90">
                  &gt;
                </span>
              </button>
              {activeMenu === "lycee" && (
                <ul
                  className={`absolute left-0 mt-2 bg-secondary-color text-main-color shadow-md rounded-md ${dropdownAnimation}`}
                >
                  {Object.values(Lycee).map((level, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 font-light"
                    >
                      <a href={`#lycee-${index + 1}`}>{level}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
        {/* Login Button */}
        <div>
          <button className="bg-light text-white text-xl mr-4 ml-52 px-8 py-1 rounded-xl hover:bg-gray-200 hover:text-light">
            <Link to={"/auth/signin"} className="w-full h-full">
              Login
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
