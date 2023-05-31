import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="grid place-content-center h-screen">
      <div className="h-9 w-9 border-2 rounded-3xl border-dashed animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
