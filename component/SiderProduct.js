import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { easeOut, motion } from "framer-motion";
import {
  FaBookOpen,
  FaBroadcastTower,
  FaCircleNotch,
  FaCreditCard,
  FaExclamationCircle,
  FaFileExport,
  FaGlobe,
  FaMobile,
  FaPuzzlePiece,
  FaRegStar,
  FaSearchDollar,
  FaShoppingBag,
  FaWarehouse,
} from "react-icons/fa";

const SiderProduct = () => {
  const mainmenu = () => {
    const sideProduct = document.querySelector(".sideproduct");

    sideProduct.style.display = "none";
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
      className="sideproduct absolute top-0 left-0 w-[996px] h-[260vh] backdrop-blur-[2px]  z-30 hidden overflow-y-scroll overflow-x-hidden md:h-[70vh]"
    >
      <div className="flex flex-col  bg-white w-[999px] h-[160vh] z-30 pt-16 md:h-[80vh]">
        <span
          onClick={mainmenu}
          className="mainmenu pl-6 mt-6 text-orange-500 border-black border-b-2 pr-[336px] pb-6 text-5xl md:mt-[-20px] md:text-4xl"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100 text-5xl font-bold pl-8 pt-3 pb-2 md:text-4xl">
          Products
        </span>

        <div>
          <div>
            <div className="h-36 border-b-2 border-black border-t-2 pt-4 m-auto text-2xl md:h-28">
              <div className="flex text-6xl align-middle text-center p-auto md:text-4xl">
                <FaCreditCard className="ml-8" />
                <span className=" font-bold pl-8 md:pl-2">Corporate card</span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium md:text-2xl">
                Get 10-20x higher credit limits
              </p>
            </div>

            <div className="h-36 border-b-2 border-black  pt-4 m-auto text-2xl md:h-28">
              <div className="flex text-6xl align-middle text-center p-auto md:text-4xl">
                <FaSearchDollar className=" ml-8" />
                <span className=" font-bold pl-8 md:pl-2 ">
                  Expense management
                </span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium md:text-2xl">
                Simplify expenses and reimbursements
              </p>
            </div>

            <div className="h-36 border-b-2 border-black  pt-4 m-auto text-2xl md:h-28">
              <div className="flex text-6xl align-middle text-center p-auto md:text-4xl">
                <FaFileExport className=" ml-8" />
                <span className=" font-bold pl-8 md:pl-2">Bill pay</span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium md:text-2xl">
                Pay vendors faster and easier
              </p>
            </div>

            <div className="h-36 border-b-2 border-black  pt-4 m-auto text-2xl md:h-28">
              <div className="flex text-6xl align-middle text-center p-auto md:text-4xl">
                <FaBookOpen className=" ml-8" />
                <span className=" font-bold pl-8 md:pl-2">
                  Accounting automation
                </span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium md:text-2xl">
                Close the books in minutes
              </p>
            </div>

            <div className="h-36 border-b-2 border-black  pt-4 m-auto text-2xl md:h-28">
              <div className="flex text-6xl align-middle text-center p-auto md:text-4xl">
                <FaBroadcastTower className=" ml-8" />
                <span className=" font-bold pl-8 md:pl-2">
                  Product releases
                </span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium md:text-2xl">
                See what's new at Custina
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="  bg-white w-[996px] h-[150vh] md:h-[50vh]">
              <span className="bg-gray-100 text-5xl font-bold pl-8 pt-6 pb-2  pr-[800px] md:text-4xl">
                Platform
              </span>

              <div className="h-36 border-b-2 border-black pt-1 m-auto text-2xl mt-2 md:h-28">
                <div className="flex text-6xl align-middle text-center p-auto md:text-4xl">
                  <FaExclamationCircle className="ml-8" />
                  <span className="font-bold pl-8 md:pl-2">Spend limits</span>
                </div>
                <p className="pl-8 text-4xl pt-2 font-medium md:text-2xl">
                  Custom limits with built-in controls
                </p>
              </div>

              <div className="h-36 border-b-2 border-black pt-1 m-auto text-2xl mt-2 md:h-28">
                <div className="flex text-6xl align-middle text-center p-auto md:text-4xl">
                  <FaPuzzlePiece className="ml-8" />
                  <span className="font-bold pl-8 md:pl-2">
                    Native integrations
                  </span>
                </div>
                <p className="pl-8 text-4xl pt-2 font-medium md:text-2xl">
                  ERP, HRIS, productivity, security
                </p>
              </div>

              <div className="h-36 border-b-2 border-black pt-1 m-auto text-2xl mt-2 md:h-28">
                <div className="flex text-6xl align-middle text-center p-auto md:text-4xl">
                  <FaMobile className="ml-8" />
                  <span className="font-bold pl-8 md:pl-2">Mobile</span>
                </div>
                <p className="pl-8 text-4xl pt-2 font-medium md:text-2xl">
                  Available on iOS and Android
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SiderProduct;
