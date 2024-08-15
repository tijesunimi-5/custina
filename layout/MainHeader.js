import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { faAlignJustify, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "@/component/SideBar";

const inter = Inter({ subsets: ["latin"] });

const MainHeader = (props) => {
  const { onclick } = props;
  const { click } = props;

  const custina = () => {
    const sideBar = document.querySelector(".menu");
    const close = document.querySelector(".close");
    const open = document.querySelector(".open");

    sideBar.style.display = "none";
    close.style.display = "none";
    open.style.display = 'inline-block'
  };

  return (
    <div className="fixed z-50">
      <header
        className={`flex w-full bg-slate-100 h-20 text-black  border-b-4 justify-between align-middle fixed right-0 left-0 top-0 ${inter.className} z-[100]`}
      >
        <div className="flex flex-row pt-3 justify-start mt-2 ml-9">
          <h1 className={` font-semibold text-4xl ${inter.className}`}>
            <span className="mr-4 cursor-pointer">
              <span onClick={onclick} className="icon ">
                <FontAwesomeIcon className="open" icon={faAlignJustify} />
              </span>
              <span className="close hidden " onClick={click}>
                <FontAwesomeIcon icon={faClose} />
              </span>
            </span>

            <Link href={"/"} onClick={custina}>
              Custina.
            </Link>
          </h1>

          <div className="hidden ml-10 mt-2 font-medium text-[1em] lg:block">
            <span className="mr-10 cursor-pointer">Solution </span>
            <span className="mr-10 cursor-pointer">Products </span>
            <span className="mr-10 cursor-pointer">Resources </span>
            <span className="mr-10 cursor-pointer">Customers </span>
            <span className="mr-10 cursor-pointer">Pricing </span>
          </div>
        </div>

        <div className="flex justify-center font-medium">
          <Link href={"/"} className="hidden mt-4 mr-10 lg:block">
            Sign In
          </Link>
          <Link href={"/"} className="hidden mt-4 mr-10 lg:block">
            See a demo
          </Link>
          <button className="w-32 bg-orange-400 mr-10 h-10 m-auto text-white font-semibold rounded-md">
            Get started
          </button>
        </div>
      </header>

      <SideBar />
    </div>
  );
};

export default MainHeader;
