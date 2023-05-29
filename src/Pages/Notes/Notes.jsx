import React from "react";
import { data } from "../../data";
import { HiOutlinePlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Notes = () => {
  return (
    <section className="">
      <div className="container mx-auto relative h-screen">
        <h2 className="text-2xl my-3 font-bold">My Notes</h2>
        <div className="grid gap-4 md:grid-cols-5 grid-cols-2">
          {data.map((note) => (
            <div key={note.id} className="bg-gray-500/50 rounded note py-4 px-2">
              <h2>{note.title}</h2>
            </div>
          ))}
        </div>
        <Link to='/create-note'>
          <div
            title="Create note"
            className="md:bottom-[4rem] md:right-[7rem] bottom-[4rem] right-[1rem] fixed"
          >
            <button className="bg-white/75 text-black backdrop-blur-3xl p-2 rounded-[10px] flex items-center justify-center">
              <HiOutlinePlus size={30} />
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Notes;
