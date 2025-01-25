import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import test from "../../assets/Qualification.png";
import { SideBarItemType } from "../../Types/types";
import { CgProfile } from "react-icons/cg";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { useState } from "react";
import { UserType } from "../../Types/constants";

const SidebarItem = ({
  item,
  path,
}: {
  item: SideBarItemType;
  path: string;
}) => {
  const isActive = path === item.url;
  return (
    <Link
      className={`h-14 w-full flex items-center gap-4 ${isActive ? " text-white" : ""
        }`}
      to={item.url}
    >
      <p
        className={`text-xl font-semibold w-40 ${isActive ? "text-white" : "text-ternary-dark-color"
          }`}
      >
        {item.name}
      </p>
      <item.Icon
        className={`size-8 ${isActive ? "text-white" : "text-ternary-dark-color"
          }`}
      />
    </Link>
  );
};

const siderBarItems: Array<SideBarItemType> = [
  {
    name: "Cours",
    Icon: MdLibraryBooks,
    url: "/main/student/courses",
  },
  {
    name: "Paiements",
    Icon: FaMoneyCheckDollar,
    url: "/main/student/payments",
  },
  {
    name: "Documents",
    Icon: IoDocumentText,
    url: "/main/student/documents",
  },
];

const profile = {
  name: "Profile",
  Icon: CgProfile,
  url: "/main/teacher/profile",
};

const Sidebar = () => {
  const location = useLocation();
  const [Role] = useState(UserType.teacher);

  return (
    <div className="flex flex-col bg-ternary-extra-light-color w-80">
      <div className="flex items-center h-16 bg-main-color pl-6">
        <img src={logo} alt="dz-teacher-logo-image" className="size-20 pt-4" />
        <h1 className="text-2xl font-poppins text-[#77E0DF] ml-[-20px]">
          Dz Teacher
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between flex-grow">
        <div className="h-60 flex flex-col justify-center items-center w-full">
          <div className="w-full relative flex flex-col justify-center items-center h-1/2">
            <img
              src={test}
              alt="user-profile-image"
              className="rounded-full size-28 z-10"
            />
            <div className="h-1 w-10/12 mx-auto bg-ternary-dark-color rounded-xl absolute z-0"></div>
          </div>
          <div>
            <p className="text-3xl font-semibold text-ternary-dark-color">
              Name
            </p>
            <p className="text-lg font-normal text-ternary-dark-color">
              Description
            </p>
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-3">
          {siderBarItems.map((item, index) => (
            <SidebarItem key={index} item={item} path={location.pathname} />
          ))}
          {Role === UserType.teacher ? (
            <SidebarItem item={profile} path={location.pathname} />
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center justify-center p-4">
          <button className="w-40 h-11 bg-ternary-light-color text-white text-2xl rounded-lg">
            Déconnecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
