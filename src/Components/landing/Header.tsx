import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Primary, CEM, Lycee } from "../../Types/constants";

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
            {/* Primary Dropdown */}
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
                      <button
                        onClick={() =>
                          navigate(
                            `/subjects/primary/${encodeURIComponent(level)}`
                          )
                        }
                        className="w-full text-left"
                      >
                        {capitalizeFirstLetter(level)} année
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* CEM Dropdown */}
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
                      <button
                        onClick={() =>
                          navigate(`/subjects/cem/${encodeURIComponent(level)}`)
                        }
                        className="w-full text-left"
                      >
                        {capitalizeFirstLetter(level)} année
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Lycee Dropdown */}
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
                      <button
                        onClick={() =>
                          navigate(
                            `/subjects/lycee/${encodeURIComponent(level)}`
                          )
                        }
                        className="w-full text-left"
                      >
                        {capitalizeFirstLetter(level)} année
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <div>
          <Link
            to="/auth/signin"
            className="bg-light text-white text-xl mr-4 ml-52 px-8 py-1 rounded-xl hover:bg-gray-200 hover:text-light"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
