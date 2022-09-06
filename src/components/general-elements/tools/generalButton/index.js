import React from "react";

const GeneralButton = ({ buttonText, onClick }) => {
  return (
    <button
      type="button"
      className="border border-gray-100 rounded bg-slate-500 text-white p-2 uppercase text-xs tracking-widest"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default GeneralButton;
