import React, { useState } from "react";
import TextField from "../Global/TextField";
import { styles } from "../../styles/styles";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useFormik } from "formik";
import MessageReceivedModal from "../Global/MessageReceivedModal";
import Loader from "../Global/Loader";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 20) {
    errors.name = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.company) {
    errors.company = "Required";
  } else if (values.company.length > 25) {
    errors.company = "Must be 25 characters or less";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length > 600) {
    errors.message = "Must be 600 characters or less";
  }

  return errors;
};

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      // setLoading(true);
      // setTimeout(() => {
      //   setIsSent(true);
      //   setLoading(false);
      // }, 1000);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col items-start justify-center gap-y-6 md:gap-y-12`}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <TextField
            name={"name"}
            htmlFor={"name"}
            label={"Name"}
            type={"text"}
            value={formik.values.name}
            onchange={formik.handleChange}
            placeholder={"Write your name"}
          />
          {formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className="col-span-12 md:col-span-6">
          <TextField
            name={"email"}
            htmlFor={"email"}
            label={"Email"}
            type={"email"}
            value={formik.values.email}
            onchange={formik.handleChange}
            placeholder={"Where I can reply?"}
          />
          {formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-full">
        <TextField
          name={"company"}
          htmlFor={"company"}
          label={"Company"}
          type={"text"}
          value={formik.values.company}
          onchange={formik.handleChange}
          placeholder={"Your company or website"}
        />
        {formik.errors.company ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.company}
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor={"message"} className="text-lg font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={formik.values.message}
          onChange={formik.handleChange}
          placeholder="I want to build some..."
          className={`outline-none border-b-2 py-3 text-base md:text-lg font-normal`}
        ></textarea>
        <div className="w-full mt-1 flex items-center justify-between">
          {formik.errors.message ? (
            <div className="text-red-500 text-sm ">{formik.errors.message}</div>
          ) : null}
          <p className="text-sm text-gray-400">Max 600 characters</p>
        </div>
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
      {/* {loading && <Loader />} */}
      {isSent && <MessageReceivedModal />}
    </form>
  );
};

export default ContactForm;
