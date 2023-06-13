import React from "react";
import useTitle from "../../hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <section
      className="container mx-auto 
  "
    >
      <h2 className="md:text-5xl text-3xl  bg-clip-text text-transparent bg-gradient-to-tl from-teal-300 to-violet-500 font-bold ">
        About us
      </h2>
      <div className="relative mt-10">
        <div className="absolute -inset-1 blur-3xl bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
        <div className="relative">
          Welcome to our{" "}
          <span className="font-bold text-teal-400 underline decoration-wavy">noootes</span> web app! We
          are excited to introduce ourselves and provide you with a glimpse into
          who we are and what we aim to accomplish. At our core, we are a team
          of dedicated individuals passionate about productivity, organization,
          and simplifying your life through effective note-taking. Our goal is
          to empower you to capture ideas, organize thoughts, and access
          information effortlessly. We understand the challenges that come with
          managing information in today's fast-paced world. With the constant
          influx of data and the need to juggle multiple tasks, staying
          organized and being able to retrieve important information quickly is
          essential. That's where our note-taking web app comes in.
        </div>
      </div>
    </section>
  );
};

export default About;
