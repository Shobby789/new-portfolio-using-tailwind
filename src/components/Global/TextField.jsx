import React from "react";
import { styles } from "../../styles/styles";

const TextField = ({
  htmlFor,
  label,
  type,
  name,
  value,
  placeholder,
  onchange,
}) => {
  return (
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor={htmlFor} className="text-lg font-semibold">
        {label}
      </label>
      <input
        autoComplete="off"
        // required
        type={type}
        name={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        className={`outline-none border-b-2 py-3 text-base md:text-lg font-normal`}
      />
    </div>
  );
};

export default TextField;
