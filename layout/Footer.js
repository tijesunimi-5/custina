

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black  text-white mt-40 p-auto flex flex-col w-[704.5px] ">
      <div className=" text-5xl font-bold mt-8 ml-6 mb-6">Custina.</div>

      <div className="flex ml-10 flex-col ">
        <div className="w-[200px] flex justify-start mb-10">
          <div>
            <h1 className="text-2xl font-bold mb-4">Product</h1>
            <ul className="w-[200px] text-gray-300 text-[1em] font-medium ">
              <li className="hover:text-orange-300">
                <Link href={"/"}>Corporate card</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>business account </Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Expense management</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Accounting automation</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Bill pay</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Travel</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Startups</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Financial modeling</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Release notes</Link>
              </li>
            </ul>
          </div>

          <div className="ml-[200px]">
            <h1 className="text-2xl  font-bold mb-4">Platform</h1>
            <ul className="w-[200px] text-gray-300 text-[1em] font-medium ">
              <li className="hover:text-orange-300">
                <Link href={"/"}>Custina AI</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Global ready</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Native integrations</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>live budgets</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>mobile app</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>API</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[200px] h-[600px] flex justify-start mb-10">
          <div>
            <h1 className="text-2xl font-bold mb-4">Company</h1>
            <ul className="w-[200px] text-gray-300 text-[1em] font-medium ">
              <li className="hover:text-orange-300">
                <Link href={"/"}>About Custina</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Careers</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Contact</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Partner portal</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Press</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Security</Link>
              </li>
            </ul>
          </div>

          <div className="ml-[200px]">
            <h1 className="text-2xl font-bold mb-4">Resources</h1>
            <ul className="w-[200px] text-gray-300 text-[1em] font-medium ">
              <li className="hover:text-orange-300">
                <Link href={"/"}>Customer hub</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Help center</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Resource center & blog</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Accounting services</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Status</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Legal agreement</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Privacy</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Cookie preferences</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-80 h-10 text-white z-[110]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          width='54'
          height='54'
          color="white"
          className="text-white"
        >
          <path
            d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
