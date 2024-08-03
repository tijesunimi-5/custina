import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBusinessTime,
  faPlaneCircleExclamation,
  faMessage,
  faBroadcastTower
} from "@fortawesome/free-solid-svg-icons";
import { FaceControls } from "@react-three/drei";

const SiderProduct = (props) => {
  const { onclick } = props;
  const mainmenu = () => {
    const sideProduct = document.querySelector(".sideproduct");
    const mainMenu = document.querySelector(".mainmenu");

    sideProduct.style.display = "none";
    console.log("mainmenu");
  };
  return (
    <div className="sideproduct absolute top-0 left-0 w-[700px] h-[100vh] backdrop-blur-[2px]  z-10 hidden">
      <div className="flex flex-col bg-white w-[700px] h-[1500px] z-30 pt-16">
        <span
          onClick={mainmenu}
          className="mainmenu pl-6 mt-2 text-orange-500 border-black border-b-2 pr-[336px] pb-6"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100 text-2xl font-bold pl-8 pt-3 pb-2">Products</span>

        <div>
          <div className="h-28 border-b-2 border-black border-t-2 pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon className="mr-8" icon={faBusinessTime} />
              Corporate card
            </span>
            <p className="pl-8 pt-2 font-medium">
              Get 10-20x higher credit limits
            </p>
          </div>

          <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon icon={faMessage} className="mr-8" />
              Expense management
            </span>
            <p className="pl-8 pt-2 font-medium">
              Simplify expenses and reimbursements
            </p>
          </div>

          <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon
                icon={faPlaneCircleExclamation}
                className="mr-6"
              />
              Travel
            </span>
            <p className="pl-8 pt-2 font-medium">
              Book and manage global travel
            </p>
          </div>

          <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon icon={faBroadcastTower} className="mr-8" />
              Bill pay
            </span>
            <p className="pl-8 pt-2 font-medium">
              Pay vendors faster and easier
            </p>
          </div>

          <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon icon={faBroadcastTower} className="mr-8" />
              Business banking
            </span>
            <p className="pl-8 pt-2 font-medium">
              Earn yield and move money fast
            </p>
          </div>

          <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon icon={faBroadcastTower} className="mr-8" />
              Accounting automation
            </span>
            <p className="pl-8 pt-2 font-medium">Close the books in minutes</p>
          </div>

          <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon icon={faBroadcastTower} className="mr-8" />
              Product releases
            </span>
            <p className="pl-8 pt-2 font-medium">See what's new at Custina</p>
          </div>
          <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon icon={faBroadcastTower} className="mr-8" />
              Product releases
            </span>
            <p className="pl-8 pt-2 font-medium">See what's new at Custina</p>
          </div>
          <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
            <span className="text-[1.5em] font-bold pl-8 ">
              <FontAwesomeIcon icon={faBroadcastTower} className="mr-8" />
              Product releases
            </span>
            <p className="pl-8 pt-2 font-medium">See what's new at Custina</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderProduct;
