import React from "react";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  return (
    <Link to={`/note/${note._id}`} className="relative bg-gray-600/50 rounded note py-2 px-2">
      <div>
        <h2 className="mb-10 text-xl">
          {note.title.length > 50
            ? note.title.substr(0, 40) + "..."
            : note.title}
        </h2>
        <h2 className="absolute text-xs bottom-2">{note.date}</h2>
      </div>
    </Link>
  );
};

export default Note;
