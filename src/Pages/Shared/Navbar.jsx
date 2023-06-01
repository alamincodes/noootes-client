import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars2, HiOutlineXMark } from "react-icons/hi2";
import { RiSettings5Line } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AUTH_CONTEXT);
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  // console.log(user);
  const handleLogOut = () => {
    logOut();
    setOpenProfile(false);
    localStorage.removeItem('noooteToken')
  };
  return (
    <>
      <div className="bg-white/10 z-20 fixed top-0 w-full backdrop-blur-xl text-white py-4">
        <div className="container mx-auto relative">
          <nav className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link to="/">
                {" "}
                <h2 className="text-2xl font-bold select-none">
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
                  isActive
                    ? "rounded  bg-gradient-to-br from-teal-500 to-black"
                    : undefined
                }
              >
                <li className="cursor-pointer py-1 px-2">Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "rounded  bg-gradient-to-br from-red-500 to-black"
                    : undefined
                }
              >
                <li className="cursor-pointer py-1 px-2">About</li>
              </NavLink>
              <NavLink
                to="/notes"
                className={({ isActive }) =>
                  isActive
                    ? "rounded  bg-gradient-to-br from-violet-500 to-black"
                    : undefined
                }
              >
                <li className="cursor-pointer py-1 px-2">Notes</li>
              </NavLink>
            </ul>

            {/* btn */}
            <div className="flex items-center space-x-3">
              {user?.uid ? (
                <>
                  <div
                    onClick={() => setOpenProfile(!openProfile)}
                    className="bg-gradient-to-tr cursor-pointer flex justify-center items-center md:w-9 md:h-9 w-7 h-7 rounded-full from-teal-400 to-purple-600"
                  >
                    <span className="md:text-2xl text-xl select-none uppercase">
                      {user?.displayName?.[0]}
                    </span>
                  </div>
                  {openProfile && (
                    <div
                      className="absolute border border-gray-600 md:right-14 right-1 md:top-6 top-7 bg-[#1A1A1A] w-[200px] text-base z-10 list-none divide-y divide-gray-100 rounded shadow-boxShadow my-4"
                      id="dropdown"
                    >
                      <div className="px-4 py-3">
                        <h2 className="font-bold text-md">
                          <span className="relative text-white">
                            {user?.displayName}
                          </span>
                        </h2>
                        <p className="block text-sm font-medium truncate">
                          {user?.email}
                        </p>
                      </div>
                      <ul className="py-1" aria-labelledby="dropdown">
                        <Link
                          onClick={() => setOpenProfile(false)}
                          to="/settings/updateName"
                          className="text-sm hover:text-teal-600 font-medium block px-4 py-2"
                        >
                          <li className="flex items-center cursor-pointer">
                            <RiSettings5Line size={18} className="mr-1" />{" "}
                            <span>Settings</span>
                          </li>
                        </Link>

                        <li
                          onClick={handleLogOut}
                          className="flex items-center cursor-pointer text-sm font-bold hover:text-red-500 text-red-700 border-t px-4 py-2"
                        >
                          <VscSignOut size={18} className="mr-1" /> Sign out
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <div className="relative group">
                  <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
                  <Link to="/login">
                    <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
                      <button className="bg-black rounded backdrop-blur-xl py-1 px-5">
                        Login
                      </button>
                    </div>
                  </Link>
                </div>
              )}

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
        className={`w-full  bg-gradient-to-tr from-teal-500 to-fuchsia-500 p-1 transition-all text-white fixed z-10 left-0 h-fit  lg:hidden flex justify-center text-center duration-500 ${
          openMenu ? "top-[64px] " : "top-[-100%]"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-2xl w-full py-12 rounded-md">
          <ul className="flex flex-col justify-center items-center space-y-4 py-4">
            <Link to="/">
              <li onClick={() => setOpenMenu(false)}>Home</li>
            </Link>
            <Link to="/about">
              <li onClick={() => setOpenMenu(false)}>About</li>
            </Link>
            <Link to="/notes">
              <li onClick={() => setOpenMenu(false)}>Notes</li>
            </Link>
            {!user?.uid && (
              <div className="relative group">
                <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>

                <Link to="/signUp">
                  <div
                    onClick={() => setOpenMenu(false)}
                    className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]"
                  >
                    <button className="bg-black rounded backdrop-blur-xl py-1 px-5">
                      Sign up
                    </button>
                  </div>
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
