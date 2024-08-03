

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-40 p-auto flex flex-col w-[620px]">
      <div className=" text-5xl font-bold mt-8 ml-6 mb-6">Custina</div>

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

          <div className="ml-32">
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

        <div className="w-[200px] flex justify-start mb-10">
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

          <div className="ml-32">
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

      <div className="w-80 h-10 text-white">
         
        
      </div>
    </footer>
  );
};

export default Footer;
