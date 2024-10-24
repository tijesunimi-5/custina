import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Sider from "@/layout/Sider";
import { easeOut, motion } from "framer-motion";
import Button from "@/layout/Button";

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
      className="menu hidden  left-0 top-0 w-[900px] h-[150vh] backdrop-blur-[2px]  z-50 transition-all md:h-[120vh]"
    >
      <div
        onClick={stayOn}
        className="option relative text-2xl font-bold bg-white w-[996px] h-[260vh] z-50 pt-16 mt-9 md:h-[110vh]"
      >
        <li
          className="list-none cursor-pointer pl-4 pt-5 pb-5 bg-slate-200 shadow-md rounded-r-md border-black border-t-2 border-b-2 text-6xl font-semibold md:text-4xl"
          onClick={sideProduct}
        >
          Products{" "}
          <FontAwesomeIcon
            className="justify-center pl-[580px] text-orange-400 md:ml-[180px]"
            icon={faLongArrowRight}
          />
        </li>

        <li
          className="list-none cursor-pointer pl-4 pt-5 pb-5 bg-slate-200 shadow-md rounded-r-md border-black border-t-2 mt-2 border-b-2 text-6xl font-semibold md:text-4xl"
          onClick={sideSolution}
        >
          Solutions{" "}
          <FontAwesomeIcon
            className="justify-center pl-[560px] text-orange-400 md:ml-[189px]"
            icon={faLongArrowRight}
          />
        </li>

        <li
          className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-5 pb-5 border-black border-t-2 mt-2 border-b-2 text-6xl font-semibold md:text-4xl"
          onClick={sideResources}
        >
          Resources{" "}
          <FontAwesomeIcon
            className="justify-center pl-[540px] text-orange-400 md:ml-[195px]"
            icon={faLongArrowRight}
          />
        </li>

        <Link href={"/customer"}>
          <li className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-5 pb-5 border-black border-t-2 mt-2 border-b-2 text-6xl font-semibold md:text-4xl">
            Customer{" "}
          </li>
        </Link>

        <Link href={"/pricing"}>
          <li className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-5 pb-5 border-black border-t-2 mt-2 border-b-2 text-6xl font-semibold md:text-4xl">
            Pricing{" "}
          </li>
        </Link>

        <div className="flex align-middle text-3xl absolute bottom-32 right-0 left-0  font-medium  border-t-2 border-orange-500 justify-center bg-white w-[800px] pt-10 m-auto md:mt-[-200px]">
          <Button>Sign in</Button>

          <span className="ml-8">
            <Link href={"/"}>
              <Button>Contact team</Button>
            </Link>
          </span>
        </div>
        <Sider onClick={turnOffSideProduct} dashoff={closeDash} />
      </div>
    </motion.div>
  );
};

export default SideBar;
