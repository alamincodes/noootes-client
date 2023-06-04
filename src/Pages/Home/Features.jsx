import React from "react";
import create from "../../assets/img/create.png";
import update from "../../assets/img/update.png";
import deleteImg from "../../assets/img/delete.png";
const Features = () => {
  return (
    <section className=" bg-purple-900/20 backdrop-blur-3xl py-16 md:my-36 my-20">
      <div className="container mx-auto md:mt-20">
        <h2 className="lg:text-6xl text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-500 to-red-500">
          Features
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {/* card */}
          <div className="flex items-center md:flex-row py-6 flex-col gap-10 md:col-span-2 rounded-xl md:px-[100px] px-6 overflow-hidden relative h-96 bg-gradient-to-br from-violet-900/20 to-blue-800/60">
            <div>
              {/* left */}
              <h2 className="md:text-5xl text-2xl font-bold uppercase">
                Create note
              </h2>
              <p className="text-gray-300 mt-2">
                Effortlessly create keynotes to effectively manage and organize
                your ideas.
              </p>
            </div>
            {/* right */}
            <div>
              <img
                src={create}
                className="absolute md:right-5 -right-5 md:top-20 top-52 w-[500px] rounded-2xl"
                alt=""
              />
            </div>
          </div>

          {/* card */}
          <div className="flex items-center flex-col py-6 gap-10 rounded-xl md:px-[100px] px-6 overflow-hidden relative h-96 bg-gradient-to-br from-violet-900/20 to-teal-800/60">
            <div>
              {/* left */}
              <h2 className="md:text-3xl text-2xl font-bold uppercase">
                Update note
              </h2>
              <p className="text-gray-300 mt-2">
                Easily edit your notes with simplicity and convenience, enabling
                quick modifications to keep your information up to date.
              </p>
            </div>
            {/* right */}
            <div>
              <img
                src={update}
                className="absolute -right-12  w-[500px] rounded-2xl"
                alt=""
              />
            </div>
          </div>
          {/* card */}
          <div className="flex items-center flex-col py-6 gap-10 rounded-xl md:px-[100px] px-6 overflow-hidden relative h-96 bg-gradient-to-br from-violet-900/20 to-yellow-800/60">
            <div>
              {/* left */}
              <h2 className="md:text-3xl text-2xl font-bold uppercase">
                Delete note
              </h2>
              <p className="text-gray-300 mt-2">
                Efficiently eliminate undesired notes using a straightforward
                and intuitive process, fostering optimal information management
                and decluttering.
              </p>
            </div>
            {/* right */}
            <div>
              <img
                src={deleteImg}
                className="absolute -right-12  w-[500px] rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
