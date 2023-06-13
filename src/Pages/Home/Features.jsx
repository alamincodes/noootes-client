import React from "react";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlinePencilAlt,
} from "react-icons/hi";

const Features = () => {
  const boxStyle = {
    boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px",
  };
  return (
    <section className="bg-purple-900/20 py-16 border-t border-gray-900">
      <div className="container mx-auto md:mt-20">
        <h2 className="lg:text-6xl text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-fuchsia-400 to-fuchsia-800">
          Features
        </h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {/* card */}
          <div
            style={boxStyle}
            className="flex items-center justify-center text-center py-6 flex-col gap-10 lg:col-span-2 rounded-xl md:px-[100px] px-6 overflow-hidden relative md:h-96 h-60 bg-[#13111C]/50 border border-fuchsia-600/50"
          >
            <div className="absolute bg-purple-700/20 inset-10 blur-3xl"></div>
            <div className="absolute flex justify-center items-center border border-fuchsia-600/50 md:h-[200px] h-[150px] md:w-[200px] w-[150px] rounded-full -right-10 -bottom-10">
              <HiOutlinePencil size={30} className="text-fuchsia-600" />
            </div>
            <div>
              {/* left */}
              <h2 className="md:text-5xl text-fuchsia-400 text-2xl font-bold uppercase">
                Create note
              </h2>
              <p className="text-gray-300 mt-2">
                Effortlessly create keynotes to effectively manage and organize
                your ideas.
              </p>
            </div>
          </div>

          {/* card */}
          <div
            style={boxStyle}
            className="flex items-center justify-center text-center py-6 flex-col gap-10 lg:col-span-1 rounded-xl md:px-[100px] px-6 overflow-hidden relative md:h-96 h-60 bg-[#13111C]/50 border-[1px] border-fuchsia-600/50"
          >
            <div className="absolute bg-purple-700/20 inset-10 blur-3xl"></div>
            <div className="absolute flex justify-center items-center border border-fuchsia-600/50 md:h-[200px] h-[150px] md:w-[200px] w-[150px] rounded-full -right-10 -bottom-10">
              <HiOutlinePencilAlt size={30} className="text-fuchsia-600" />
            </div>
            <div>
              <h2 className="md:text-3xl text-fuchsia-400 text-2xl font-bold uppercase">
                Update note
              </h2>
              <p className="text-gray-300 mt-2">
                Easily edit your notes with simplicity and convenience, enabling
                quick modifications to keep your information up to date.
              </p>
            </div>
          </div>
          {/* card */}
          <div
            style={boxStyle}
            className="flex items-center justify-center text-center py-6 flex-col gap-10 lg:col-span-1 rounded-xl md:px-[100px] px-6 overflow-hidden relative md:h-96 h-60 bg-[#13111C]/50 border-[1px] border-fuchsia-600/50"
          >
            <div className="absolute bg-purple-700/20 inset-10 blur-3xl"></div>
            <div className="absolute flex justify-center items-center border border-fuchsia-600/50 md:h-[200px] h-[150px] md:w-[200px] w-[150px] rounded-full -right-10 -bottom-10">
              <HiOutlineTrash size={30} className="text-fuchsia-600" />
            </div>
            <div>
              <h2 className="md:text-3xl text-fuchsia-400 text-2xl font-bold uppercase">
                Delete note
              </h2>
              <p className="text-gray-300 mt-2">
                Efficiently eliminate undesired notes using a straightforward
                and intuitive process, fostering optimal information management
                and decluttering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
