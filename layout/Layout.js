import React, { Fragment } from "react";
import { Main } from "next/document";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import SideBar from "@/component/SideBar";

const Layout = (props) => {
  const headerOn = () => {
    const sideBar = document.querySelector(".menu");
    const close = document.querySelector(".close");
    const open = document.querySelector(".open");
    const homePage = document.querySelector(".home");

    sideBar.style.display = "block";
    close.style.display = "block";
    close.style.display = "inline-block";
    open.style.display = "none";
    // homePage.style.overflowY = "hidden";

    console.log(homePage);
  };

  const headerOff = () => {
    const sideBar = document.querySelector(".menu");
    const close = document.querySelector(".close");
    const open = document.querySelector(".open");
    const sideProduct = document.querySelector(".sideproduct");
    const homePage = document.querySelector(".home"); 
    const sideSolution = document.querySelector(".sidesolution"); 
    const sideResources = document.querySelector(".resources"); 

    sideBar.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
    open.style.display = "inline-block";
    sideProduct.style.display = "none";
    homePage.style.width = "600px";
    sideSolution.style.display = 'none'
    sideResources.style.display = 'none'
  };
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="@fortawesome/fontawesome/css/fontawesome.css"
        />
      </Head>
      <MainHeader onclick={headerOn} click={headerOff} />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
