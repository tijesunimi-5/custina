import React, { Fragment } from "react";
import { Main } from "next/document";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="@fortawesome/fontawesome/css/fontawesome.css"
        />
      </Head>
      <MainHeader />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
