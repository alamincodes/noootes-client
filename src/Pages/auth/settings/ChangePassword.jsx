import React, { useContext, useState } from "react";
import AnimatePage from "../../Shared/AnimatePage";
import { AUTH_CONTEXT } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const ChangePassword = () => {
  useTitle("update password");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { userUpdatePassword, user, loginUser, setLoading } =
    useContext(AUTH_CONTEXT);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.updatePassword.value;

    setErrorMessage("");
    if (currentPassword.length === 0 || newPassword.length === 0) {
      setErrorMessage("Password cannot be empty.*");
      return;
    }
    if (currentPassword.length < 6 || newPassword.length < 6) {
      setErrorMessage("Password should be at least 6 characters ");
      return;
    }
    setIsLoading(true);
    loginUser(user?.email, currentPassword)
      .then(() => {
        userUpdatePassword(newPassword)
          .then(() => {
            console.log("success");
            setIsLoading(false);
            setLoading(false);
            toast.success("Password update successfully", {
              style: {
                border: "1px solid #2dd4bf",
                padding: "16px",
                color: "#2dd4bf",
                background: "black",
              },
              iconTheme: {
                primary: "#2dd4bf",
                secondary: "#FFFAEE",
              },
            });
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
            setLoading(false);
          });
      })
      .catch((error) => {
        setIsLoading(false);
        setLoading(false);
        const errMessage = error.message;
        if (errMessage.includes("wrong-password")) {
          setErrorMessage("Wrong password");
          toast.error("Wrong password", {
            style: {
              border: "1px solid red",
              padding: "16px",
              color: "red",
              background: "black",
            },
            iconTheme: {
              primary: "red",
              secondary: "#FFFAEE",
            },
          });
        }
        if (errMessage.includes("too-many-requests")) {
          setErrorMessage(
            "Your account is temporarily disabled, Please try again later."
          );
          toast.error(
            "Your account is temporarily disabled, Please try again later.",
            {
              style: {
                border: "1px solid red",
                padding: "16px",
                color: "red",
                background: "black",
              },
              iconTheme: {
                primary: "red",
                secondary: "#FFFAEE",
              },
            }
          );
        }
        console.error(errMessage);
      });
  };

  return (
    <AnimatePage>
      <div className="mt-20">
        <form onSubmit={handleSubmit}>
          {/* old password */}
          <div>
            <label>Current password</label>
            <input
              type="password"
              className="w-full mt-2 py-3 rounded-md bg-transparent border outline-none px-10 border-gray-600 focus:border-gray-300"
              placeholder="Current password"
              name="currentPassword"
            />
          </div>
          {/* new password */}
          <div className="mt-5">
            <label>New password</label>
            <input
              type="password"
              className="w-full mt-2 py-3 rounded-md bg-transparent border outline-none px-10 border-gray-600 focus:border-gray-300"
              placeholder="New password"
              name="updatePassword"
            />
          </div>
          {/* error message */}
          <div>
            <p className="text-semibold text-red-500 mt-5">{errorMessage}</p>
          </div>
          {/* btn */}
          <div className="relative mt-10 group">
            <div className="absolute blur-xl -inset-0.5 group-hover:opacity-90 opacity-70 duration-200 rounded bg-gradient-to-tr from-[#AD44FF] via-[#448FFF] to-[#8BFF44] "></div>
            <div className="bg-gradient-to-tr p-[2px] rounded from-[#016eda] to-[#d900c0]">
              <button
                disabled={isLoading}
                type="submit"
                className="bg-black w-full rounded backdrop-blur-xl py-4 px-5"
              >
                Updater password
              </button>
            </div>
          </div>
        </form>
      </div>
    </AnimatePage>
  );
};

export default ChangePassword;
