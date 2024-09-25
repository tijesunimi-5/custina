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
      className="sideproduct absolute top-0 left-0 w-[996px] h-[260vh] backdrop-blur-[2px]  z-30 hidden overflow-y-scroll overflow-x-hidden"
    >
      <div className="flex flex-col  bg-white w-[999px] h-[260vh] z-30 pt-16">
        <span
          onClick={mainmenu}
          className="mainmenu pl-6 mt-6 text-orange-500 border-black border-b-2 pr-[336px] pb-6 text-5xl"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100 text-5xl font-bold pl-8 pt-3 pb-2">
          Products
        </span>

        <div>
          <div>
            <div className="h-36 border-b-2 border-black border-t-2 pt-4 m-auto text-2xl">
              <div className="flex align-middle text-center p-auto">
                <FaCreditCard className="text-6xl ml-8" />
                <span className="text-6xl font-bold pl-8 ">Corporate card</span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium">
                Get 10-20x higher credit limits
              </p>
            </div>

            <div className="h-36 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div className="flex align-middle text-center p-auto">
                <FaSearchDollar className="text-6xl ml-8" />
                <span className="text-6xl font-bold pl-8 ">
                  Expense management
                </span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium">
                Simplify expenses and reimbursements
              </p>
            </div>

            <div className="h-36 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div className="flex align-middle text-center p-auto">
                <FaFileExport className="text-6xl ml-8" />
                <span className="text-6xl font-bold pl-8 ">Bill pay</span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium">
                Pay vendors faster and easier
              </p>
            </div>

            <div className="h-36 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div className="flex align-middle text-center p-auto">
                <FaBookOpen className="text-6xl ml-8" />
                <span className="text-6xl font-bold pl-8 ">
                  Accounting automation
                </span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium">
                Close the books in minutes
              </p>
            </div>

            <div className="h-36 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div className="flex align-middle text-center p-auto">
                <FaBroadcastTower className="text-6xl ml-8" />
                <span className="text-6xl font-bold pl-8 ">
                  Product releases
                </span>
              </div>
              <p className="pl-8 text-4xl pt-2 font-medium">
                See what's new at Custina
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="  bg-white w-[996px] h-[150vh]">
              <span className="bg-gray-100 text-5xl font-bold pl-8 pt-6 pb-2  pr-[800px]">
                Platform
              </span>

              <div className="h-36 border-b-2 border-black pt-1 m-auto text-2xl mt-2">
                <div className="flex align-middle text-center p-auto">
                  <FaExclamationCircle className="text-6xl ml-8" />
                  <span className="text-6xl font-bold pl-8 ">Spend limits</span>
                </div>
                <p className="pl-8 text-4xl pt-2 font-medium">
                  Custom limits with built-in controls
                </p>
              </div>

              <div className="h-36 border-b-2 border-black pt-1 m-auto text-2xl mt-2">
                <div className="flex align-middle text-center p-auto">
                  <FaPuzzlePiece className="text-6xl ml-8" />
                  <span className="text-6xl font-bold pl-8 ">
                    Native integrations
                  </span>
                </div>
                <p className="pl-8 text-4xl pt-2 font-medium">
                  ERP, HRIS, productivity, security
                </p>
              </div>

              <div className="h-36 border-b-2 border-black pt-1 m-auto text-2xl mt-2">
                <div className="flex align-middle text-center p-auto">
                  <FaMobile className="text-6xl ml-8" />
                  <span className="text-6xl font-bold pl-8 ">Mobile</span>
                </div>
                <p className="pl-8 text-4xl pt-2 font-medium">
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
