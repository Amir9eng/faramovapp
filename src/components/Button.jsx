import React from "react";

const Button = ({ name, ...props }) => {
  // console.log(props);
  return (
    <button type="submit" {...props} className="px-32 mt-12 mb-12 rounded-lg py-2 mx-auto block bg-[#FF385C] text-white">
      {name}
    </button>
  );
};

export default Button;
