import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MessageReceivedModal = ({ isSent, setIsSent }) => {
  return (
    isSent && (
      <div className="w-full h-screen z-50 fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
        <div className="w-[440px] h-[240px] bg-white rounded-2xl p-10 flex flex-col items-center justify-center gap-2 relative">
          <button
            type="button"
            onClick={() => setIsSent(!isSent)}
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

export default MessageReceivedModal;
