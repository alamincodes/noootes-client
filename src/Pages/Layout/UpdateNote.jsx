import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCreateDate from "../../hooks/useCreateDate";
import { HiOutlineChevronLeft } from "react-icons/hi2";
const UpdateNote = () => {
  const [noteDetail, setNoteDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const note = form.note.value;

    const noteInfo = {
      title,
      note,
      date,
    };

    // console.log(title, note, noteInfo);
    setIsLoading(true);
    fetch(`https://noootes-server.vercel.app/update-note/${noteDetail._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("noooteToken")}`,
      },
      body: JSON.stringify(noteInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          setIsLoading(false);
          navigate("/notes");
        }
      });
  };

  useEffect(() => {
    fetch(`https://noootes-server.vercel.app/note/${id}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("noooteToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNoteDetail(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="">
      <div className="container mx-auto relative">
        <div className="flex justify-between items-center mb-7">
          <Link to="/notes">
            {" "}
            <h2 className="bg-gray-300/30  p-2 rounded">
              <HiOutlineChevronLeft size={30} />
            </h2>
          </Link>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            className={`bg-transparent text-2xl py-[0.5rem] px-4 outline-none`}
            name="title"
            autoFocus
            defaultValue={noteDetail.title}
            placeholder="Title"
          />
          <textarea
            name="note"
            defaultValue={noteDetail?.note}
            className="bg-transparent my-2 py-[0.5rem] px-4 outline-none"
            placeholder="Note detail..."
            cols="30"
            rows="10"
          ></textarea>

          <button
            type="submit"
            disabled={isLoading}
            className=" absolute top-[1px] md:right-12 right-3 bg-teal-300 disabled:bg-gray-300/30   cursor-pointer text-black font-semibold px-5 py-2 rounded"
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
