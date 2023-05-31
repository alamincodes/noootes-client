import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineKey, HiOutlineUserCircle } from "react-icons/hi";
import AnimatePage from "../../Shared/AnimatePage";

const Settings = () => {
  return (
    <AnimatePage>
      <div className="container mx-auto">
        <div className="border-b border-gray-600 ">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
            <NavLink
              to="/settings/updateName"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-400 border-b-2 border-teal-500 font-bold"
                  : undefined
              }
            >
              <li className="mr-2">
                <h2 className="flex items-center p-4  rounded-t-lg ">
                  {" "}
                  <span>
                    {" "}
                    <HiOutlineUserCircle size={20} className="mr-1" />{" "}
                  </span>{" "}
                  Update name
                </h2>
              </li>
            </NavLink>
            <NavLink
              to="/settings/changePassword"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-400 border-b-2 border-teal-500 font-bold"
                  : undefined
              }
            >
              <li className="mr-2">
                <h2 className=" p-4  rounded-t-lg flex items-center">
                  {" "}
                  <span>
                    <HiOutlineKey size={20} className="mr-1" />
                  </span>{" "}
                  Change password
                </h2>
              </li>
            </NavLink>
          </ul>
        </div>
        <Outlet />
      </div>
    </AnimatePage>
  );
};

export default Settings;
