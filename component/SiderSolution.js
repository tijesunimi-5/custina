import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { easeIn, motion } from "framer-motion";
import Link from "next/link";

const SiderSolution = (props) => {
  const { dashoff } = props;

  const closeMenu = ( ) => {
    const sideSolution = document.querySelector(".sidesolution");

    sideSolution.style.display = 'none'
  }

  const closeSolution = () => {
    const sideSolution = document.querySelector(".sidesolution");
    const menu = document.querySelector(".menu");
    const open = document.querySelector(".open");
    const close = document.querySelector(".close");

    sideSolution.style.display = "none";
    menu.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
    open.style.display = "inline-block";
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
        ease: easeIn,
      }}
      exit={{
        x: -800,
      }}
      className="sidesolution absolute top-0 left-0 w-[996px] h-[260vh] backdrop-blur-[2px]  z-30 hidden overflow-y-scroll overflow-x-hidden bg-white "
    >
      <div className="flex flex-col  bg-white w-[996px] h-[260vh] z-30 pt-16">
        <span
          className="mainmenu pl-6 mt-6 text-5xl text-orange-500 border-black border-b-2 pr-[340px] pb-6 "
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100  text-5xl font-bold pl-8 pt-8 pb-2">
          Solutions
        </span>

        <div className="w-[900px]"> 
          <div className="h-36 mt-5 pb-6 pt-4 m-auto text-2xl w-full">
            <Link
              href={`/solutionPages/startups`}
              className="startup"
              onClick={closeSolution}
            >
              <span className="text-6xl font-semibold pl-12 ">
                Startups
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-6 transition-all hover:pl-2"
              />
            </Link>
            <p className="pl-8 text-4xl font-medium  pt-4 w-[800px]">
              Get the only complete financial stack designed to help start and
              scale your business.
            </p>
          </div>

          <div className="h-36 mt-14 pb-6 pt-4 m-auto text-2xl">
            <Link
              href={"/solutionPages/companysize"}
              className="companySize"
              onClick={closeSolution}
            >
              <span className="text-6xl font-semibold pl-12 ">
                Mid-size companies
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-6 transition-all hover:pl-2"
              />
            </Link>
            <p className="pl-8 text-4xl font-medium pt-4 w-[800px]">
              Simplify travel and expenses with automation that makes it easy
              for employees to comply.
            </p>
          </div>

          <div className="h-36 mt-14 pb-6 pt-4 m-auto text-2xl">
            <Link href={'/solutionPages/enterprise'} className="enterprise" onClick={closeSolution}>
              <span className="text-6xl font-semibold pl-12 ">
                Enterprise
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-6 transition-all hover:pl-2"
              />
            </Link>
            <p className="pl-8 text-4xl font-medium pt-4 w-[800px]">
              Transform finance operations and improve productivity for your
              global workforce.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SiderSolution;
