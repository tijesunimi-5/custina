import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SiderSolution = () => {
  const closeSolution = () => {
    const sideSolution = document.querySelector('.sidesolution');

    sideSolution.style.display = 'none'
  }
  return (
    <div className="sidesolution absolute top-0 left-0 w-[800px] h-[150vh] backdrop-blur-[2px]  z-30 hidden overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col  bg-white w-[800px] h-[100vh] z-30 pt-16">
        <span
          className="mainmenu pl-6 mt-2 text-orange-500 border-black border-b-2 pr-[340px] pb-6 "
          onClick={closeSolution}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100  text-2xl font-bold pl-8 pt-8 pb-2">
          Solutions
        </span>

        <div>
          <div className="h-36 mt-5 pb-6 pt-4 m-auto text-2xl">
            <div>
              <span className="text-[1.3em] font-semibold pl-12 ">
                Startups
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-6 transition-all hover:pl-2"
              />
            </div>
            <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
              Get the only complete financial stack designed to help start and
              scale your business.
            </p>
          </div>

          <div className="h-36 mt-10 pb-6 pt-4 m-auto text-2xl">
            <div>
              <span className="text-[1.3em] font-semibold pl-12 ">
                Mid-size companies
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-6 transition-all hover:pl-2"
              />
            </div>
            <p className="pl-8 text-2xl font-light pt-4 w-[600px]">
              Simplify travel and expenses with automation that makes it easy
              for employees to comply.
            </p>
          </div>

          <div className="h-36 mt-10 pb-6 pt-4 m-auto text-2xl">
            <div>
              <span className="text-[1.3em] font-semibold pl-12 ">
                Enterprise
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-6 transition-all hover:pl-2"
              />
            </div>
            <p className="pl-8 text-2xl font-light pt-4 w-[600px]">
              Transform finance operations and improve productivity for your
              global workforce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderSolution;
