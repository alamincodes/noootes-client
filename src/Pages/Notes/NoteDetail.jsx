import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiOutlineChevronLeft, HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";
import DeleteModal from "../Notes/DeleteModal";
const NoteDetail = () => {
  const [note, setNote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const handelDelete = () => {
    setDeleteLoading(true);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          navigate("/notes");
          setDeleteLoading(false);
        }
      });
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/note/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNote(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-7">
          <Link to="/notes">
            {" "}
            <h2 className="bg-gray-300/30  p-2 rounded">
              <HiOutlineChevronLeft size={30} />
            </h2>
          </Link>
          <div className="flex items-center space-x-5">
            <div
              onClick={() => setOpenModal(true)}
              className="bg-red-300/20 cursor-pointer text-black font-semibold p-3 rounded-full"
            >
              <span>
                {" "}
                <HiOutlineTrash
                  size={25}
                  className="text-red-600 hover:text-red-800"
                />
              </span>
            </div>
            <div className="bg-teal-300/20 cursor-pointer text-black font-semibold p-3 rounded-full">
              <span>
                {" "}
                <MdOutlineEdit
                  size={25}
                  className="text-teal-300 hover:text-teal-500"
                />
              </span>
            </div>
          </div>
        </div>
        {/* loading skeleton */}
        {isLoading && (
          <div>
            <div className="w-[300px]">
              <Skeleton baseColor="#202020" highlightColor="#444" />
            </div>
            <div className="mt-2 w-full">
              <Skeleton baseColor="#202020" highlightColor="#444" />
              <Skeleton baseColor="#202020" highlightColor="#444" />
              <Skeleton baseColor="#202020" highlightColor="#444" />
            </div>
          </div>
        )}
        <h2 className="text-xl">{note.title}</h2>
        <h2 className="text-gray-300 mt-2">{note.note}</h2>
      </div>
      {openModal && (
        <DeleteModal
          handelDelete={handelDelete}
          handleCloseModal={handleCloseModal}
          deleteLoading={deleteLoading}
        />
      )}
    </section>
  );
};

export default NoteDetail;
