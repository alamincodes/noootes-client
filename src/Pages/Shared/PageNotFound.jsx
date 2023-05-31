import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="grid place-content-center mt-[400px]">
      <div className="flex justify-center items-center flex-col">
        <h1 className="tracking-widest text-gray-500 uppercase">
          404 | Not Found
        </h1>
        <Link>
          <button className="flex items-center border hover:border-gray-300 border-gray-600 mt-2 px-3 py-2">
            {" "}
            Back To Home <HiOutlineChevronRight size={15} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
