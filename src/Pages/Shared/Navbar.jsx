import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars2, HiOutlineXMark } from "react-icons/hi2";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="bg-white/10 z-20 fixed top-0 w-full backdrop-blur-xl text-white py-4">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link to="/">
                {" "}
                <h2 className="text-2xl font-bold">
                  {" "}
                  <span className="text-teal-500">N</span>oootes
                </h2>
              </Link>
            </div>
            {/* menu*/}
            <ul className="md:flex hidden items-center space-x-7">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "rounded underline" : undefined
                }
              >
                <li className="cursor-pointer py-1 px-2">Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "rounded underline" : undefined
                }
              >
                <li className="cursor-pointer py-1 px-2">About</li>
              </NavLink>
              <NavLink
                to="/notes"
                className={({ isActive }) =>
                  isActive ? "rounded underline" : undefined
                }
              >
                <li className="cursor-pointer py-1 px-2">Notes</li>
              </NavLink>
            </ul>

            {/* btn */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
                <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
                  <button className="bg-black rounded backdrop-blur-xl py-1 px-5">
                   Login
                  </button>
                </div>
              </div>

              {/* bars */}
              <div
                className="md:hidden block"
                onClick={() => setOpenMenu(!openMenu)}
              >
                {openMenu ? (
                  <HiOutlineXMark className="" size={27} />
                ) : (
                  <HiBars2 className="" size={27} />
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`w-full bg-white/10 transition-all backdrop-blur-2xl text-white fixed z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center duration-500 ${
          openMenu ? "top-[64px] " : "top-[-100%]"
        }`}
      >
        <ul className="flex flex-col justify-center items-center space-y-4 py-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/notes">
            <li>Notes</li>
          </Link>
          <div className="relative group">
            <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
            <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
              <button className="bg-black rounded backdrop-blur-xl py-1 px-5">
                Sign up
              </button>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
