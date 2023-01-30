import React from "react";

const White = ({ name, ...props }) => {
  return (
    <button type="submit" {...props} className="px-32 mt-12 mb-12 rounded-lg py-2 mx-auto block border-2 border-black ">
      {name}
    </button>
  );
};

export default White;
