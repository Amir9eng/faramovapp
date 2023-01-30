// @ts-check

import { useField } from "formik";
import React from "react";
// @ts-ignore
import arrow from "../assets/arrow.svg";
import { SelectStyles } from "./styles";

const Select = ({ name, options, label, ...props }) => {
  // console.log(props)
  return (
    <div>
      <label htmlFor={name}>
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="w-[33rem] relative">
        <select name={name} className={SelectStyles} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <img src={arrow} className="w-[1.75rem] h-[0.7375rem] absolute right-[18.5px] top-[50%] translate-y-[-50%]" alt="arrow" />
      </div>
    </div>
  );
};

export default Select;
