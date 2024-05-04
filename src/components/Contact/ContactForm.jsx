import React from "react";
import TextField from "../Global/TextField";
import { styles } from "../../styles/styles";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ContactForm = () => {
  return (
    <form
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col items-start justify-center gap-y-6 md:gap-y-12`}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <TextField
            name={"name"}
            htmlFor={"name"}
            label={"Name"}
            type={"text"}
            placeholder={"John Dow"}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <TextField
            name={"email"}
            htmlFor={"email"}
            label={"Email"}
            type={"email"}
            placeholder={"Where I can reply?"}
          />
        </div>
      </div>
      <TextField
        name={"company"}
        htmlFor={"company"}
        label={"Company"}
        type={"text"}
        placeholder={"Your company or website"}
      />
      <div className="w-full flex flex-col">
        <label htmlFor={"message"} className="text-lg font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="I want to build some..."
          className={`outline-none border-b-2 py-3 text-base md:text-lg font-normal`}
        ></textarea>
      </div>
      <div className="w-full flex justify-end items-center py-6 md:pt-0">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex items-center justify-center gap-x-2 rounded-full px-3 md:px-6 py-4 text-lg md:text-lg font-semibold bg-black text-white w-40"
        >
          Submit <FiArrowRight className="text-xl" />
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;
