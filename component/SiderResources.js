import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SiderResources = () => {
  const closeResources = () => {
    const resources = document.querySelector(".resources");

    resources.style.display = "none";
  };
  return (
    <div className="resources absolute top-0 left-0 w-[800px] h-[150vh] backdrop-blur-[2px]  z-30 hidden overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col  bg-white w-[800px] h-[180vh] z-30 pt-16">
        <span
          className="mainmenu pl-6 mt-2 text-orange-500 border-black border-b-2 pr-[340px] pb-6 "
          onClick={closeResources}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100  text-2xl font-bold pl-8 pt-8 pb-6">
          Customer Hub
        </span>

        <div>
          <div className="h-28 mt-0 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
            <div>
              <span className="text-[1.2em] font-bold pl-12 ">Help Center</span>
            </div>
            <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
              Find answers to common questions.
            </p>
          </div>

          <div className="h-28 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
            <div>
              <span className="text-[1.2em] font-bold pl-12 ">
                Implementation guides
              </span>
            </div>
            <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
              Learn how to set up key features.
            </p>
          </div>

          <div className="h-28 mt-5 border-t-[1px] border-b-[1px] border-black pb-6 pt-4 m-auto text-2xl">
            <div>
              <span className="text-[1.2em] font-bold pl-12 ">
                Product releases
              </span>
            </div>
            <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
              See what's new at Custina
            </p>
          </div>
        </div>

        <div>
          <div className=" mt-10 w-[720px]">
            <span className="bg-gray-100 text-2xl  font-bold pl-8 pt-6 pb-2 pr-[505px]">
              Resource Center
            </span>

            <div className="h-28 mt-5 border-t-[1px]  border-black pb-6 pt-4 m-auto text-2xl">
              <div>
                <span className="text-[1.2em] font-bold pl-12 ">
                  White papers and e-books
                </span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                Access exclusive research and reports.
              </p>
            </div>

            <div className="h-28 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div>
                <span className="text-[1.2em] font-bold pl-12 ">Webinars</span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                Tune in for actionable insights.
              </p>
            </div>

            <div className="h-28 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div>
                <span className="text-[1.2em] font-bold pl-12 ">
                  Customer stories
                </span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                See how top companies use Custina.
              </p>
            </div>

            <div className="h-28 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div>
                <span className="text-[1.2em] font-bold pl-12 ">Blog</span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                Get insights, tips, news and advice.
              </p>
            </div>

            <div className="h-28 mt-5 border-t-[1px] border-b-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div>
                <span className="text-[1.2em] font-bold pl-12 ">Events</span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                Connect with us at an event near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderResources;
