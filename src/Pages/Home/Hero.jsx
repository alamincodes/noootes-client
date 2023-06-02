import React, { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import mockup from "../../assets/mockup.png";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
const Home = () => {
  useTitle("Home");
  const { user } = useContext(AUTH_CONTEXT);
  return (
    <section className="lg:mt-[200px] mt-[120px]">
      <div className="container mx-auto">
        <div className="flex items-center lg:flex-row flex-col-reverse">
          {/* left */}
          <div className="lg:w-[50%] lg:mt-0 mt-24 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="md:text-5xl text-3xl bg-clip-text text-transparent bg-gradient-to-tl from-teal-300 to-violet-500 font-bold max-w-[500px]">
              Unleash your potential with our transformative note app.
            </h2>
            <p className="text-[15px] max-w-[420px] mt-5 text-gray-400">
              Unlock your potential with our powerful note app. Organize
              effortlessly, stay productive, and embrace limitless
              possibilities.
            </p>

            {/* btn */}
            {user ? (
              <Link to="/notes">
                <div className="relative mt-10 group w-[200px]">
                  <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
                  <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
                    <button className="bg-black w-full rounded backdrop-blur-xl py-4 px-5">
                      My notes
                    </button>
                  </div>
                </div>
              </Link>
            ) : (
              <Link to='/signUp'>
                <div className="relative mt-10 group w-[200px]">
                  <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
                  <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
                    <button className="bg-black w-full rounded backdrop-blur-xl py-4 px-5">
                      Create fee account
                    </button>
                  </div>
                </div>
              </Link>
            )}
          </div>
          {/* right */}
          <div className="lg:w-[50%]">
            <div className="relative ">
              <div className="absolute -z-10 top-20 left-5 lg:h-[500px] lg:w-[500px] lg:blur-[120px] md:blur-[100px] blur-[80px] -inset-1 bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
              <img
                src={mockup}
                alt=""
                className="lg:h-[700px]  object-cover w-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
