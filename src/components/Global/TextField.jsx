import React from "react";
import { styles } from "../../styles/styles";

const TextField = ({ htmlFor, label, type, name, value, placeholder }) => {
  return (
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor={htmlFor} className="text-xl font-bold">
        {label}
      </label>
      <input
        autoComplete="off"
        required
        type={type}
        name={name}
        // value={value}
        placeholder={placeholder}
        className={`outline-none border-b-2 py-3 text-xl font-medium ${styles.secondaryText}`}
      />
    </div>
  );
};

export default TextField;
