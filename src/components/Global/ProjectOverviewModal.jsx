import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const ProjectOverviewModal = ({ showOverview, setShowOverview }) => {
  return (
    showOverview && (
      <div className="w-full h-screen z-50 fixed inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center overflow-y-scroll">
        <div className="w-[90%] lg:w-2/3 h-[80vh] bg-white rounded-2xl p-10 flex flex-col items-center justify-center gap-2 relative">
          <button
            type="button"
            onClick={() => setShowOverview(!showOverview)}
            className="w-6 h-6 rounded-full bg-gray-200 p-1 absolute top-5 right-5"
          >
            <IoClose className="w-full h-full" />
          </button>
          <IoIosCheckmarkCircle className="text-6xl" />
          <h2 className="font-bold text-xl mt-1">Message Sent</h2>
          <p className="text-base text-gray-500">
            I will get back to you as soon as possible.
          </p>
        </div>
      </div>
    )
  );
};

export default ProjectOverviewModal;
