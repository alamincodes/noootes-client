import React from "react";
import { HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
const ForgetSuccessModal = () => {
  return (
    <AnimatePage>
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
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <HiCheck className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-100"
                        id="modal-title"
                      >
                        Check your email
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-300">
                          If you don't get the password reset email, please
                          check your spam folder.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-600/20 backdrop-blur-2xl px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Link to="/login">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-black shadow-sm sm:ml-3 sm:w-auto"
                    >
                      Okay
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default ForgetSuccessModal;
