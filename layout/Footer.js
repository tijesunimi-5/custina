
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black  text-white mt-40 p-auto flex flex-col w-[999px] ">
      <div className=" text-7xl font-bold mt-8 ml-6 mb-6">Custina.</div>

      <div className="flex ml-10 flex-col ">
        <div className="w-[200px] flex justify-start mb-10">
          <div>
            <h1 className="text-5xl font-bold mb-4">Product</h1>
            <ul className="w-[350px] text-gray-300 text-[1.9em] font-medium ">
              <li className="hover:text-orange-300">
                <Link href={"/"}>Corporate card</Link>
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
                <Link href={"/"}>Startups</Link>
              </li>
            </ul>
          </div>

          <div className="ml-[250px]">
            <h1 className="text-5xl  font-bold mb-4">Platform</h1>
            <ul className="w-[350px] text-gray-300 text-[1.9em] font-medium ">
              <li className="hover:text-orange-300">
                <Link href={"/"}>Native integrations</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>API</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[200px] h-[320px] flex justify-start mb-10">
          <div>
            <h1 className="text-5xl font-bold mb-4">Company</h1>
            <ul className="w-[350px] text-gray-300 text-[1.9em] font-medium ">
              <li className="hover:text-orange-300">
                <Link href={"/"}>About Custina</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Contact</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Press</Link>
              </li>
            </ul>
          </div>

          <div className="ml-[250px]">
            <h1 className="text-5xl font-bold mb-4">Resources</h1>
            <ul className="w-[350px] text-gray-300 text-[1.9em] font-medium ">
              <li className="hover:text-orange-300">
                <Link href={"/"}>Help center</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link href={"/"}>Resource center & blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-[480px] mt-5 mb-10 ml-9 justify-between h-10 text-white text-5xl z-[110]">
        <FaFacebookF />
        <FaWhatsapp />
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
      </div>
    </footer>
  );
};

export default Footer;
