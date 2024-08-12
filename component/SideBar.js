import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Sider from "@/layout/Sider";
import { easeOut, motion } from "framer-motion";

const SideBar = () => {
  const closeDash = () => {
    const startup = document.querySelector(".startup");

    const sideBar = document.querySelector(".menu");
    const sideSolution = document.querySelector(".sidesolution");

    sideBar.style.display = "none";
    sideSolution.style.display = "none";

    console.log(startup);
  };
  const turnOff = (e) => {
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".close");
    const open = document.querySelector(".open");
    e.preventDefault;

    menu.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
    open.style.display = "inline-block";
  };

  const stayOn = () => {
    const option = document.querySelector(".option");

    option.style.display = "block";
  };

  const sideProduct = () => {
    const sideproduct = document.querySelector(".sideproduct");

    sideproduct.style.display = "block";
  };

  const sideSolution = () => {
    const sidesolution = document.querySelector(".sidesolution");

    sidesolution.style.display = "block";
  };

  const sideResources = () => {
    const sideresources = document.querySelector(".resources");

    sideresources.style.display = "block";
  };

  const turnOffSideProduct = () => {
    const mainMenu = document.querySelector(".mainmenu");
    const sideproduct = document.querySelector(".sideproduct");

    sideProduct.style.display = "none";
    console.log("working");
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
      className="menu hidden  left-0 top-0 w-[800px] h-[900px] backdrop-blur-[2px]  z-50 transition-all"
    >
      <div
        onClick={stayOn}
        className="option text-2xl font-bold bg-white w-[800px] h-[150vh] z-50 pt-16 mt-9 "
      >
        <li
          className="list-none cursor-pointer pl-4 pt-8 pb-8 bg-slate-200 shadow-md rounded-r-md border-black border-t-2 border-b-2 text-4xl font-semibold"
          onClick={sideProduct}
        >
          Products{" "}
          <FontAwesomeIcon
            className="justify-center pl-[500px] text-orange-400"
            icon={faLongArrowRight}
          />
        </li>

        <li
          className="list-none cursor-pointer pl-4 pt-8 pb-8 bg-slate-200 shadow-md rounded-r-md border-black border-t-2 mt-2 border-b-2 text-4xl font-semibold"
          onClick={sideSolution}
        >
          Solutions{" "}
          <FontAwesomeIcon
            className="justify-center pl-[495px] text-orange-400"
            icon={faLongArrowRight}
          />
        </li>

        <li
          className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-8 pb-8 border-black border-t-2 mt-2 border-b-2 text-4xl font-semibold"
          onClick={sideResources}
        >
          Resources{" "}
          <FontAwesomeIcon
            className="justify-center pl-[487px] text-orange-400"
            icon={faLongArrowRight}
          />
        </li>

        <Link href={"/customer"}>
          <li className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-8 pb-8 border-black border-t-2 mt-2 border-b-2 text-4xl font-semibold">
            Customer{" "}
            {/* <FontAwesomeIcon
              className="justify-center pl-[490px] text-orange-400"
              icon={faLongArrowRight}
            /> */}
          </li>
        </Link>

        <Link href={"/pricing"}>
          <li className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-8 pb-8 border-black border-t-2 mt-2 border-b-2 text-4xl font-semibold">
            Pricing{" "}
            {/* <FontAwesomeIcon
              className="justify-center pl-[518px] text-orange-400"
              icon={faLongArrowRight}
            /> */}
          </li>
        </Link>

        <div className="flex align-middle text-xl  font-medium mt-[350px] border-t-2 border-black justify-center bg-white m-auto">
          <button className="pt-1 mt-10 pb-1 pl-3 pr-3 rounded-md border-black border-2">
            Sign in
          </button>
          <button className="pt-1 mt-10 pb-1 pl-3 pr-3 rounded-md border-black border-2 ml-6 mr-24">
            See a demo
          </button>
        </div>
        <Sider onClick={turnOffSideProduct} dashoff={closeDash}/>
      </div>
    </motion.div>
  );
};

export default SideBar;
