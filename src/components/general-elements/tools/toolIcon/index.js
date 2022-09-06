import React from "react";

const ToolIcon = ({ title, iconClass, onClick }) => {
  return (
    <button
      type="button"
      title={title}
      className="w-8 h-8 flex items-center justify-center border border-gray-100 rounded bg-slate-500 text-white"
      onClick={onClick}
    >
      <i className={`bi ${iconClass}`}></i>
    </button>
  );
};

export default ToolIcon;
