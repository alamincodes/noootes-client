import React, { useContext, useState } from "react";
import AnimatePage from "../Shared/AnimatePage";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineAtSymbol, HiFingerPrint } from "react-icons/hi2";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import useToken from "../../hooks/useToken";
const Login = () => {
  useTitle("Login");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jwtEmail, setJwtEmail] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { loginUser } = useContext(AUTH_CONTEXT);
  const [token] = useToken(jwtEmail);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log(jwtEmail);
  if (token) {
    navigate(from, { replace: true });
  }
  const handleSignUp = (data) => {
    setErrorMessage("");
    setIsLoading(true);
    // console.log(data);

    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        setJwtEmail(data.email);
        // navigate(from, { replace: true });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        const errMessage = error.message;
        if (errMessage.includes("user-not-found")) {
          setErrorMessage("User not found");
        } else if (errMessage.includes("user-disabled")) {
          setErrorMessage("Your account disabled");
        } else if (errMessage.includes("wrong-password")) {
          setErrorMessage("Wrong password");
        } else if (errMessage.includes("too-many-requests)")) {
          setErrorMessage(
            "Your account is temporarily disabled, Please try again later."
          );
        } else {
          setErrorMessage(error.message);
        }
        setIsLoading(false);
      });
  };
  return (
    <AnimatePage>
      <div className="container mx-auto mt-48">
        <div className="grid place-content-center">
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col items-center md:w-96 w-[290px]"
          >
            {/* email */}
            <div className="w-full">
              <label>
                <span className="font-[400]">Your email</span>
              </label>
              <div className="relative flex items-center ">
                <div className="absolute ml-3">
                  <HiOutlineAtSymbol size={23} />
                </div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="border pl-10 py-4 border-gray-600 focus:border-gray-300 rounded-md bg-transparent w-full outline-none font-normal p-2"
                />
              </div>

              {errors.email?.type === "required" && (
                <p className="text-red-600 font-semibold">
                  Please provide email*
                </p>
              )}
            </div>
            {/* password */}
            <div className="my-5 w-full">
              <label>
                <span className="font-[400]">Password</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute ml-3">
                  <HiFingerPrint size={25} />
                </div>
                <input
                  type="password"
                  {...register("password", {
                    required: "Please provide password",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 character",
                    },
                  })}
                  placeholder="Enter your password"
                  className="border pl-10 border-gray-600 focus:border-gray-300 relative flex items-center  py-4 rounded-md bg-transparent w-full outline-none font-normal p-2"
                />
              </div>
              {errors?.password && (
                <p className="text-red-600 font-semibold">
                  {errors?.password?.message}
                </p>
              )}
              {/* forget password  */}
              <Link to="/forgetPassword">
                <p className="text-right font-normal hover:underline select-none">
                  Forget password?
                </p>
              </Link>
              {/* error message */}
              <div className="flex justify-start w-full text-left ">
                <p className="font-bold text-red-600">{errorMessage}</p>
              </div>
              {/* login btn */}
              <div className="relative mt-5 group">
                <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
                <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
                  <button
                    disabled={isLoading}
                    className="bg-black w-full rounded backdrop-blur-xl py-4 px-5"
                  >
                    {isLoading ? (
                      <div className="flex justify-center item-center">
                        <div className=" h-5 w-5 border-2 border-white rounded-full border-dotted animate-spin"></div>
                      </div>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </div>
              <h3 className="w-full text-left mt-5">
                New to nootes?{" "}
                <Link to="/signup" className="text-teal-400 font-bold">
                  {" "}
                  <span>Sign up</span>{" "}
                </Link>{" "}
              </h3>
            </div>
          </form>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Login;
