import React, { useContext, useState } from "react";
import AnimatePage from "../Shared/AnimatePage";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";
import {
  HiOutlineAtSymbol,
  HiFingerPrint,
  HiOutlineUser,
} from "react-icons/hi2";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import useToken from "../../hooks/useToken";
const SignUp = () => {
  useTitle("Sign up");
  const { createUser, updateName } = useContext(AUTH_CONTEXT);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jwtEmail, setJwtEmail] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(jwtEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/notes");
  }

  const handleSignUp = (data) => {
    console.log(data);

    const userInfo = {
      name: data.name,
      email: data.email,
    };
    setErrorMessage("");
    setIsLoading(true);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        updateName(data.name);
        console.log(user);
        fetch("https://noootes-server.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              setIsLoading(false);
              setJwtEmail(user?.email);
            }
          });
      })
      .catch((error) => {
        console.error(error);
        const errMessage = error.message;
        if (errMessage.includes("email-already-in-use")) {
          setErrorMessage("Email already used, try another email.");
        }
        setIsLoading(false);
      });
  };

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }
  return (
    <AnimatePage>
      <div>
        <div className="container mx-auto md:mt-48 ">
          <div className="grid place-content-center">
            <Link to="/">
              <h2 className="text-2xl font-bold ">
                {" "}
                <span className="text-teal-500 ">N</span>ooote
              </h2>
            </Link>
            <h2 className="md:text-4xl text-2xl font-semibold my-7">
              Create free account
            </h2>
            <form
              onSubmit={handleSubmit(handleSignUp)}
              className="flex flex-col items-center  md:w-96 w-[290px]"
            >
              {/* name */}
              <div className="w-full">
                <label>
                  <span className="font-[400]">Name</span>
                </label>
                <div className="relative flex items-center ">
                  <div className="absolute ml-3">
                    <HiOutlineUser size={25} />
                  </div>

                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Enter your name"
                    className={`border pl-10 py-4 ${
                      errors.name ? "border-red-600" : "border-gray-600"
                    } focus:border-gray-300 rounded-md bg-transparent w-full outline-none font-normal p-2`}
                  />
                </div>

                {errors.name?.type === "required" && (
                  <p className="text-red-600 font-semibold">
                    Name cannot be empty.*
                  </p>
                )}
              </div>
              {/* email */}
              <div className="w-full">
                <label>
                  <span className="font-[400]">Your email</span>
                </label>
                <div className="relative flex items-center ">
                  <div className="absolute ml-3">
                    <HiOutlineAtSymbol size={25} />
                  </div>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                    className={`border pl-10 py-4 ${
                      errors.email ? "border-red-600" : "border-gray-600"
                    } focus:border-gray-300 rounded-md bg-transparent w-full outline-none font-normal p-2`}
                  />
                </div>

                {errors.email?.type === "required" && (
                  <p className="text-red-600 font-semibold">
                    Email cannot be empty.*
                  </p>
                )}
              </div>

              {/*  password */}
              <div className=" w-full">
                <label>
                  <span className="font-[400]">Password</span>
                </label>
                <div className="relative flex items-center ">
                  <div className="absolute ml-3">
                    <HiFingerPrint size={25} />
                  </div>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password cannot be empty.*",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 character",
                      },
                    })}
                    placeholder="Enter your password"
                    className={`border pl-10 py-4 ${
                      errors.password ? "border-red-600" : "border-gray-600"
                    } focus:border-gray-300 rounded-md bg-transparent w-full outline-none font-normal p-2`}
                  />
                </div>
                {errors?.password && (
                  <p className="text-red-600 font-semibold">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
              {/* error message */}
              <div className="flex justify-start w-full text-left mt-2">
                <p className="font-bold text-red-600">{errorMessage}</p>
              </div>
              {/* sign up btn */}
              <div className="relative mt-5 w-full">
                <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
                <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
                  <button
                    disabled={isLoading}
                    className="bg-black w-full rounded backdrop-blur-xl py-4 px-5"
                  >
                    {isLoading ? (
                      <div className="flex justify-center item-center">
                        <svg
                          className="h-5 w-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    ) : (
                      "Sign up"
                    )}
                  </button>
                </div>
              </div>
              <h3 className="w-full text-left mt-5">
                Already have an account?{" "}
                <Link to="/login" className="text-teal-400 font-bold">
                  {" "}
                  <span>login</span>{" "}
                </Link>{" "}
              </h3>
            </form>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default SignUp;
