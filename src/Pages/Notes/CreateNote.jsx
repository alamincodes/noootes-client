import React, { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { franc, francAll } from "https://esm.sh/franc@6";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
const CreateNote = () => {
  useTitle("create note");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const [text, setText] = useState("");
  const [language, setLanguage] = useState("");

  const detectLanguage = (text) => {
    const languageCode = franc(text, { minLength: 0 });
    return languageCode;
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
    const detectedLanguage = detectLanguage(event.target.value);
    setLanguage(detectedLanguage);
    console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, note, language);
  };
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-7">
          <Link to="/notes">
            {" "}
            <h2 className="bg-gray-300/30  p-2 rounded">
              <HiOutlineChevronLeft size={30} />
            </h2>
          </Link>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-teal-300 cursor-pointer text-black font-semibold px-5 py-2 rounded"
          >
            Save
          </button>
        </div>
        <form className="flex flex-col">
          <input
            type="text"
            className={`bg-transparent ${
              language === "ben" ? "font-secondary" : "font-primary"
            } text-2xl py-[0.5rem] px-4 outline-none`}
            autoFocus
            name="title"
            onChange={handleTextChange}
            onBlur={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            name="note"
            onChange={handleTextChange}
            onBlur={(e) => setNote(e.target.value)}
            className={`bg-transparent ${
              language === "ben" ? "font-secondary" : "font-primary"
            } my-2 py-[0.5rem] px-4 outline-none`}
            placeholder="Note detail..."
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;