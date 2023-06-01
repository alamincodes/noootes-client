import React from "react";

const DeleteModal = ({ handelDelete, handleCloseModal, deleteLoading }) => {
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-100/20 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-100"
                      id="modal-title"
                    >
                      Are you sure delete the note?
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-gray-600/20 backdrop-blur-2xl  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={handelDelete}
                  className="inline-flex w-full justify-center rounded-md bg-red-200/20 hover:bg-red-200/30 px-3 py-2 text-sm font-semibold text-red-500 shadow-sm sm:ml-3 sm:w-auto"
                >
                  {deleteLoading ? "Deleting..." : "Delete"}
                </button>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="inline-flex w-full  md:mt-auto mt-1 justify-center rounded-md bg-gray-200/20 hover:bg-gray-200/30 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm sm:ml-3 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
