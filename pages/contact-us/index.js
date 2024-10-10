import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const index = () => {
  return (
    <div className="mt-48 w-[996px]">
      <div className="ml-20">
        <h1>Contact us</h1>

        <div className="w-[800px] mt-20">
          <h2>Customer support</h2>
          <p>
            If you're a Custina customer, you can reach us using live chat in
            your dashboard or by phone 24/7.
          </p>
          <Link
            href={"/live-chat"}
            className="text-orange-500 text-4xl flex mt-7"
          >
            Live chat <FaArrowRight className="ml-5 mt-1" />
          </Link>
          <Link
            href={"/live-chat"}
            className="text-orange-500 text-4xl flex mt-5"
          >
            +234-70-1826-8171 <FaArrowRight className="ml-5 mt-1" />
          </Link>
          <Link
            href={"/help-center"}
            className="text-orange-500 text-4xl flex mt-5"
          >
            Help center <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>

        <div className="mt-20">
          <h2>Learn more</h2>
          <p>
            Want to learn more about what we offer? Request a demo from our
            team.
          </p>
          <Link
            href={"/demo"}
            className="text-orange-500 text-4xl flex mt-5"
          >
            Request a demo <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>
        
        <div className="mt-20">
          <h2>Work with us</h2>
          <p>
            Empowering our customers starts with empowering our team. We offer industry-leading benefits, including competitive compensation, generous vacation time and parental leave, and other perks to support remote work.
          </p>
          <Link
            href={"/404"}
            className="text-orange-500 text-4xl flex mt-5"
          >
            See open roles <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>

        <div className="mt-20">
          <h2>Let's connect</h2>
          <a href="https://linkedIn" className="text-4xl text-orange-500 mt-5 flex">LinkedIn <FaArrowRight className="ml-3 mt-1" /></a>
          <a href="https://instagram" className="text-4xl text-orange-500 mt-5 flex">Instagram <FaArrowRight className="ml-3 mt-1" /></a>
          <a href="https://facebook" className="text-4xl text-orange-500 mt-5 flex">Facebook <FaArrowRight className="ml-3 mt-1" /></a>
          <a href="https://twitter" className="text-4xl text-orange-500 mt-5 flex">Twitter <FaArrowRight className="ml-3 mt-1" /></a>
        </div>
      </div>
    </div>
  );
};

export default index;
