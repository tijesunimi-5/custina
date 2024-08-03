import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import SiderProduct from "./SiderProduct";

const SideBar = () => {
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
  return (
    <div className="menu hidden absolute left-0 top-0 w-[600px] h-[100vh] backdrop-blur-[2px]  z-10 transition-all">
      <div
        onClick={stayOn}
        className="option text-2xl font-bold bg-white w-[600px] h-[1500px] z-30 pt-16"
      >
        <li
          className="list-none cursor-pointer pl-4 pt-4 pb-4 bg-slate-200 shadow-md rounded-r-md border-black border-t-2 border-b-2"
          onClick={sideProduct}
        >
          Products{" "}
          <FontAwesomeIcon
            className="justify-center pl-80 text-orange-400"
            icon={faLongArrowRight}
          />
        </li>
        <Link href={"/products"}></Link>

        <Link href={"/solutions"}>
          <li className="list-none cursor-pointer pl-4 pt-4 pb-4 bg-slate-200 shadow-md rounded-r-md border-black border-t-2 mt-2 border-b-2">
            Solutions{" "}
            <FontAwesomeIcon
              className="justify-center pl-[314px] text-orange-400"
              icon={faLongArrowRight}
            />
          </li>
        </Link>

        <Link href={"/resources"}>
          <li className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-4 pb-4 border-black border-t-2 mt-2 border-b-2">
            Resources{" "}
            <FontAwesomeIcon
              className="justify-center pl-[305px] text-orange-400"
              icon={faLongArrowRight}
            />
          </li>
        </Link>

        <Link href={"/customer"}>
          <li className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-4 pb-4 border-black border-t-2 mt-2 border-b-2">
            Customer{" "}
            <FontAwesomeIcon
              className="justify-center pl-[307px] text-orange-400"
              icon={faLongArrowRight}
            />
          </li>
        </Link>

        <Link href={"/pricing"}>
          <li className="list-none cursor-pointer bg-slate-200 shadow-md rounded-r-md pl-4 pt-4 pb-4 border-black border-t-2 mt-2 border-b-2">
            Pricing{" "}
            <FontAwesomeIcon
              className="justify-center pl-[337px] text-orange-400"
              icon={faLongArrowRight}
            />
          </li>
        </Link>

        <div className="flex text-xl font-medium mt-40 border-t-2 border-black justify-center">
          <button className="pt-1 mt-10 pb-1 pl-3 pr-3 rounded-md border-black border-2">
            Sign in
          </button>
          <button className="pt-1 mt-10 pb-1 pl-3 pr-3 rounded-md border-black border-2 ml-6">
            See a demo
          </button>
        </div>
        <SiderProduct />
      </div>
    </div>
  );
};

export default SideBar;
