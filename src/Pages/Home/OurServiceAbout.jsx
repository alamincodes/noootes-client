import React from "react";
import { HiOutlineUserPlus } from "react-icons/hi2";
import {
  MdOutlineSecurity,
  MdOutlineMobileFriendly,
  MdOutlineSupport,
} from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
const OurServiceAbout = () => {
  const boxStyle = {
    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
  };
  const cards = [
    {
      id: 1,
      icon: <HiOutlineUserPlus size={25} />,
      title: "Create free account",
      detail:
        "Users can sign up for a free account to access all app features and benefits.",
    },
    {
      id: 2,
      icon: <MdOutlineMobileFriendly size={25} />,
      title: "User friendly interface",
      detail:
        "The app has an intuitive interface that adapts to different devices, enhancing the user experience.",
    },
    {
      id: 3,
      icon: <IoAccessibility size={25} />,
      title: "Free access",
      detail:
        "Our app offers free access to all features, enabling efficient note-taking without financial limitations.",
    },
    {
      id: 4,
      icon: <RiUserLocationLine size={25} />,
      title: "Cross device syncing.",
      detail:
        "Seamless syncing across devices ensures a consistent note-taking experience anywhere, anytime.",
    },
    {
      id: 5,
      icon: <MdOutlineSecurity size={25} />,
      title: "Security and Privacy.",
      detail:
        "We prioritize user security by employing encryption and secure authentication methods to protect user data.",
    },
    {
      id: 6,
      icon: <MdOutlineSupport size={25} />,
      title: "Support for Additional Features.",
      detail:
        "Future updates will add reminders, task lists, collaboration tools, and productivity app integrations.",
    },
  ];
  return (
    <section className="mt-20 bg-[#13111C] md:py-24 py-10">
      <div className="mx-auto container">
        <div>
          <h2 className="lg:text-6xl text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-500 to-blue-500">
            Start effortlessly with us.
          </h2>
        </div>
        {/* cards */}
        <div className="grid lg:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:mt-20 mt-10 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              style={boxStyle}
              className="gap-10 p-6 rounded-xl overflow-hidden relative bg-[#13111C]/50 border border-blue-600/50"
            >
              <div className="absolute flex justify-center items-center border border-blue-600/50 h-[100px] w-[100px] rounded-full -right-5 -bottom-5">
                <span className="text-blue-600">{card.icon}</span>
              </div>
              <div className="max-w-[282px]">
                <h2 className="text-blue-400 text-lg font-bold uppercase">
                  {card.title}
                </h2>
                <p className=" text-gray-400 mt-2">{card.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServiceAbout;
