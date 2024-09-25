import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { easeOut, motion } from "framer-motion";
import { FaPen, FaRegQuestionCircle } from "react-icons/fa";

const SiderResources = () => {
  const closeResources = () => {
    const resources = document.querySelector(".resources");

    resources.style.display = "none";
  };
  return (
    <motion.div
      initial={{
        x: -800,
      }}
      whileInView={{
        x: 0,
      }}
      transition={{
        duration: 0.2,
        ease: easeOut,
      }}
      exit={{
        x: -800,
      }}
      className="resources absolute top-0 left-0 w-[996px] h-[180vh] backdrop-blur-[2px]  z-30 hidden overflow-y-scroll overflow-x-hidden"
    >
      <div className="flex flex-col  bg-white w-[996px] h-[200vh] z-30 pt-16">
        <span
          className="mainmenu pl-6 mt-6 text-5xl text-orange-500 border-black border-b-2 pr-[340px] pb-6 "
          onClick={closeResources}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100  text-5xl font-bold pl-8 pt-8 pb-6">
          Customer Hub
        </span>

        <div>
          <div className="h-28 mt-0 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
            <div className="flex align-middle text-center pl-10">
              <FaRegQuestionCircle className="text-6xl " />
              <span className="text-6xl font-bold pl-4 ">Help Center</span>
            </div>
            <p className="pl-8  font-medium text-4xl pt-4 w-[600px]">
              Find answers to common questions.
            </p>
          </div>
        </div>

        <div>
          <div className=" mt-16 w-[996px]">
            <span className="bg-gray-100 text-5xl  font-bold pl-8 pt-6  pb-2 w-[720px] pr-[595px]">
              Resource Center
            </span>

            <div className="h-36 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div className="flex pl-10">
                <FaPen className="text-6xl " />
                <span className="text-6xl font-bold pl-4 ">Blog</span>
              </div>
              <p className="pl-8 text-4xl pt-4 font-medium  w-[600px]">
                Get insights, tips, news and advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SiderResources;
