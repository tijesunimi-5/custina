import React from "react";
import { motion, easeInOut } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const index = () => {
  const buttonClick = (e) => {
    const input = document.querySelector("input");

    e.preventDefault();
    console.log(input.value);
  };

  return (
    <div className="creditCard m-auto w-[996px] justify-center pr-12 align-center pl-2 pt-10">
      <div className="bg-[#f0f8ff] pt-28 w-[996px] text-black h-[110vh] ml-[-10px] pl-10">
        <h1 className="text-7xl font-extrabold space-x-2 tracking-wide">
          Boost efficiency and accuracy with accounting automation.
        </h1>
        <p className="text-4xl pt-10 font-semibold">
          Save hours with AI-generated suggestions and close your books every
          day with native support for accuruals - even across multiple entities.
        </p>

        <motion.form
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 1,
            ease: easeInOut,
          }}
          className="mt-16 m-auto pl-6 w-[700px] relative"
        >
          <span className="absolute justify-center align-middle mt-2 h-9 ml-2 text-4xl border-r-2 pr-2 border-black">
            <FaEnvelope />
          </span>
          <input
            type="email"
            placeholder="Work email address"
            className="w-[700px] border-2 rounded-md h-14 px-16 text-3xl border-black"
          />
          <button
            className="absolute right-[-22px] rounded-tr-md rounded-br-md top-[1.95px] bg-orange-500 h-[52px] w-60 text-white text-3xl font-semibold tracking-widest"
            onClick={buttonClick}
          >
            Get started
          </button>
        </motion.form>
      </div>

      <div className="w-full">
        <div className="w-[800px] text-center mt-56 ml-20">
          <h1>Accounting automation that controllers love.</h1>
          <p className="mt-10 font-bold text-gray-600">
            Save hours and eliminate errors with AI-powered automation that
            keeps you in control.
          </p>
        </div>

        <div className="w-[800px] text-center mt-32 ml-20">
          <h1>Reduce busywork with help from AI.</h1>
          <p className="mt-10 font-bold text-gray-600">
            Accelerate GL coding and merchant mapping with AL-generated
            suggestions.
          </p>
        </div>

        <div className="w-[800px] text-center mt-32 ml-20">
          <h1>Increase accuracy with accruals accounting.</h1>
          <p className="mt-10 font-bold text-gray-600">
            Book accuruals even for incomplete transactions to enable continuous
            close.
          </p>
        </div>

        <div className="w-[890px] text-center mt-32 ml-10">
          <h1>Manage multiple entities on one platform.</h1>
          <p className="mt-10 font-bold text-gray-600">
            Streamline operations with multi-entity controls, localized policies, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
