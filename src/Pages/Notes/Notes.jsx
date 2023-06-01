import React, { useContext, useEffect, useRef, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import AnimatePage from "../Shared/AnimatePage";
import useTitle from "../../hooks/useTitle";
import Note from "./Note";
import SkeletonCard from "../Shared/SkeletonCard";
const Notes = () => {
  useTitle("Notes");
  const { user, logOut } = useContext(AUTH_CONTEXT);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://noootes-server.vercel.app/notes?email=${user?.email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("noooteToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("accessToken");
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setIsLoading(false);
        setNotes(data.reverse());
      });
  }, []);
  return (
    <AnimatePage>
      <section className="">
        <div className="container mx-auto relative h-screen">
          <h2 className="text-2xl my-3 font-bold">My Notes</h2>

          <div className="grid gap-4 md:grid-cols-5 grid-cols-2">
            {isLoading && <SkeletonCard cards={20} />}
            {notes.map((note) => (
              <Note key={note._id} note={note} />
            ))}
          </div>
          {notes.length === 0 && (
            <div className="text-center">
              <h2 className="mt-52 text-2xl font-bold">No notes</h2>
              <Link to="/create-note">
                <span className="mt-52 text-teal-400 ">Create note yet </span>
              </Link>
            </div>
          )}
          {/* create note */}
          <Link to="/create-note">
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
    </AnimatePage>
  );
};

export default Notes;
