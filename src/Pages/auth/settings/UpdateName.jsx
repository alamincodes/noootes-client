import React, { useContext, useState } from "react";
import AnimatePage from "../../Shared/ANimatePage";
import { AUTH_CONTEXT } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
const UpdateName = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { updateName, user } = useContext(AUTH_CONTEXT);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.updateName.value;
    setIsLoading(true);
    updateName(name)
      .then(() => {
        console.log("success");
        setIsLoading(false);
        toast.success("Update name successfully", {
          style: {
            border: "1px solid #2dd4bf",
            padding: "16px",
            color: "#2dd4bf",
            background: "black"
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
      });

    console.log(name);
  };
  return (
    <AnimatePage>
      <div className="mt-20">
        <form onSubmit={handleSubmit}>
          <label>Update name</label>
          <input
            type="text"
            defaultValue={user?.displayName}
            className="w-full mt-2 py-3 rounded-md bg-transparent border outline-none px-10 border-gray-600 focus:border-gray-300"
            placeholder="Enter name"
            name="updateName"
          />
          <div className="relative mt-10 group">
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
                  "Updater name"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </AnimatePage>
  );
};

export default UpdateName;
