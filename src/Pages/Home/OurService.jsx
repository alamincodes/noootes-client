import React from "react";
import { HiOutlineUserPlus } from "react-icons/hi2";
import {
  MdOutlineSecurity,
  MdOutlineMobileFriendly,
  MdOutlineSupport,
} from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
const OurService = () => {
  const cards = [
    {
      id: 1,
      icon: <HiOutlineUserPlus size={30} />,
      title: "Create free account",
      detail:
        "Users can easily sign up for an account at no cost, allowing them to access the full range of features and benefits provided by the app.",
    },
    {
      id: 2,
      icon: <MdOutlineMobileFriendly size={30} />,
      title: "User friendly interface",
      detail:
        "The app offers an intuitive and visually appealing interface that seamlessly adapts to various screen sizes and devices, enhancing the overall user experience.",
    },
    {
      id: 3,
      icon: <IoAccessibility size={30} />,
      title: "Free access",
      detail:
        "Our app allows users to create an account and access all features without any charges, ensuring efficient note-taking without financial constraints.",
    },
    {
      id: 4,
      icon: <RiUserLocationLine size={30} />,
      title: "Cross device syncing.",
      detail:
        "Seamless syncing across devices ensures a consistent note-taking experience anywhere, anytime.",
    },
    {
      id: 5,
      icon: <MdOutlineSecurity size={30} />,
      title: "Security and Privacy.",
      detail:
        "We prioritize user security and privacy by employing encryption and secure authentication methods to safeguard all user data.",
    },
    {
      id: 6,
      icon: <MdOutlineSupport size={30} />,
      title: "Support for Additional Features.",
      detail:
        "Future updates will bring additional features like reminders, task lists, collaboration tools, and integrations with productivity applications.",
    },
  ];
  return (
    <section className="mt-20">
      <div className="mx-auto container">
        <div>
          <h2 className="lg:text-6xl text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-500 to-blue-500">
            Start effortlessly with us.
          </h2>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:mt-20 mt-10 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-tr from-blue-600/10 to-violet-600/50 p-5 rounded-lg border border-gray-800"
            >
              <h2 className="p-2 w-9 h-9  flex items-center justify-center rounded-full bg-gradient-to-t from-blue-300/30 to-violet-500/30">
                {/* {" "}
                <HiOutlineUserPlus
                  className="p-2 rounded-full bg-gradient-to-t from-blue-300/30 to-violet-500/30"
                  size={40}
                /> */}
                {card.icon}
              </h2>
              <div className="mt-14">
                <h2 className="text-2xl mb-5">{card.title}</h2>
                <p className="text-gray-500">{card.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
