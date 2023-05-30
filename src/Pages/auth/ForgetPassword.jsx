import React, { useContext, useState } from "react";
import useTitle from "../../hooks/useTitle";
import AnimatePage from "../Shared/ANimatePage";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import ForgetSuccessModal from "./ForgetSuccessModal";
const ForgetPassword = () => {
  useTitle("forget password");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrormessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { forgetPassword } = useContext(AUTH_CONTEXT);
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    if (email.length === 0) {
      setErrormessage("Please provide email");
      return;
    }
    setErrormessage("");
    setIsLoading(true);
    forgetPassword(email)
      .then(() => {
        console.log("reset successfully");
        setIsLoading(false);
        setOpenModal(true);
      })
      .catch((error) => {
        console.error(error);
        if (error.message.includes("user-not-found")) {
          setErrormessage("User not found");
        }
      });
    setIsLoading(false);
    console.log(email);
  };
  return (
    <AnimatePage>
      <div className="container mx-auto">
        <div className="grid place-content-center mt-52">
          <form onSubmit={handleSubmit} className="md:w-96 w-[290px]">
            <input
              type="email"
              className="w-full mt-2 py-3 rounded-md bg-transparent border outline-none px-10 border-gray-600 focus:border-gray-300"
              placeholder="Enter email"
              name="email"
            />
            {/* error */}
            <p className="mt-2 text-red-500 font-bold">{errorMessage}</p>
            {/* btn */}
            <div className="relative mt-5 group">
              <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
              <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-black w-full rounded backdrop-blur-xl py-4 px-5"
                >
                  {isLoading ? (
                    <div className="flex justify-center item-center">
                      <div className=" h-5 w-5 border-2 border-white rounded-full border-dotted animate-spin"></div>
                    </div>
                  ) : (
                    "Reset password"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        {openModal && <ForgetSuccessModal />}
      </div>
    </AnimatePage>
  );
};

export default ForgetPassword;
