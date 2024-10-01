import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const index = () => {
  return (
    <div
      className={`startup  m-auto w-[996px] justify-center pr-12 align-center pl-2  `}
    >
      <div className="bg-[#f0f8ff] pt-36 w-[996px] text-black h-[120vh] ml-[-10px] pl-16">
        <div>Image needed</div>
        <h1 className="text-7xl font-extrabold space-x-2 tracking-wide">
          Startup banking that tekes every dollar furhter.
        </h1>
        <p className="text-4xl pt-10 pl-8 font-semibold">
          Modern checking, treasury, and vault in one place - with 4.51% yield
          earned* from your first dollar and no hidden fees.
        </p>

        <motion.form
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 1,
            ease: easeInOut,
          }}
          className="mt-10 ml-12 pl-0 mr-16 w-[722px] relative"
        >
          <span className="absolute flex justify-center align-middle mt-2 h-16 ml-2 text-black text-4xl border-r-2 pr-2 border-black">
            <FaEnvelope className="text-5xl mt-2" />
          </span>
          <input
            type="email"
            placeholder="Work email address"
            className="w-[750px] border-2 rounded-[20px] h-20 px-20 text-4xl border-black "
          />
          <button className="absolute right-[-24px] rounded-tr-[20px] rounded-br-[20px] top-[1.95px] bg-orange-500 h-[79px] w-64 text-white text-3xl font-semibold tracking-widest">
            Get started
          </button>
        </motion.form>
      </div>

      <div className="w-full">
        <div className="text-center w-[850px] ml-20 mt-10">
          <h1 className="leading-[70px]">
            Protect your cash and extend your runway
          </h1>

          <p className="text-4xl font-medium mt-12">
            Open an account in minutes to get the best of checking, treasury,
            and FDIC insurance - with 24/7 global support.
          </p>

          <div>Image</div>

          <div className="mt-32">
            <span className="text-3xl uppercase font-normal text-start justify-start flex ">
              checking
            </span>
            <h1 className="text-start ">Move money fast, worldwide.</h1>
            <p className="text-4xl font-medium mt-12 text-start">
              Banish hidden bank fees and simplify your deposits, payments, and
              payroll with Custina.
            </p>

            <li className="text-4xl font-medium text-start mt-10">
              Automate bills and payments with ACH and checks
            </li>
            <li className="text-4xl font-medium text-start mt-7">
              Send wires in over 40 currencies
            </li>
            <li className="text-4xl font-medium text-start mt-7">
              Automate spend controls and approval flows
            </li>
          </div>

          <div className="mt-32">
            <span className="justify-start text-3xl font-normal uppercase flex">
              treasury
            </span>
            <h1 className="text-start">Earn 4.51% yield from day one.</h1>
            <p className="text-start mt-12">
              Brex comes with access to yield-earning treasury from the day you
              open your business account.
            </p>

            <li className="text-4xl font-medium mt-10 text-start">
              Maximize earning with no minimums or transaction fees
            </li>
            <li className="text-4xl font-medium mt-5 text-start">
              Earn up to 4.51% yield with 100% liquidity
            </li>
            <li className="text-4xl font-medium mt-5 text-start">
              Use auto transfers to earn on unused operating cash
            </li>
          </div>

          <div className="mt-32">
            <span className="uppercase text-3xl flex justify-start font-normal">
              vault
            </span>
            <h1 className="text-start">Stash your cash with confidence.</h1>
            <p className="text-start mt-12">
              There's a better way to save - put it in the vault* for 20x FDIC
              protection and the diversification of a CFO's dreams.
            </p>

            <li className="text-start font-medium text-4xl mt-10">
              Get up to $6M in FDIC coverage through 20+ program banks
            </li>
            <li className="text-4xl mt-5 text-start font-medium">
              Enjoy 24/7 support and{" "}
              <span className="underline">enterprise grade security</span>
            </li>
            <li className="text-4xl font-medium mt-5 text-start">
              Transfer funds into your checking account anytime
            </li>
          </div>

          <div className="mt-52 ml-[-80px] bg-[#f0f8ff] w-[989px] ">
            <h1 className="text-start ml-5 pt-9">
              Bank on a financial stack that scales with you.
            </h1>
            <Link
              href={"/solutionPages/startups"}
              className="text-orange-500 text-4xl ml-5 font-medium flex mt-20"
            >
              Explore our startup stack <FaArrowRight className="ml-10 mt-1" />
            </Link>

            <div className="mt-20 ml-5 text-start w-[900px]">
              <h2>Get the world's most powerful card</h2>
              <p className="text-4xl font-medium mt-7">
                Get 40x higher credit limits by pairing a Custina business
                account with Custina corporate cards.
              </p>
              <Link href={"/credit-card"} className="flex text-4xl mt-8">
                Explore Custina cards
                <FaArrowRight className=" mt-1 ml-5" />
              </Link>
            </div>

            <div className="mt-10 ml-5 text-start">
              <h2>Pay bills without lifting a finger</h2>
              <p className="text-4xl font-medium mt-7">
                Never enter another invoice - automate your accounts payable
                process with integrated bill pay.
              </p>
              <Link href={"/bill-pay"} className="flex text-4xl mt-8">
                Meet the best bill pay
                <FaArrowRight className=" mt-1 ml-5" />
              </Link>
            </div>

            <div className="mt-10 ml-5 pb-10 text-start">
              <h2>Reduce manual accounting work</h2>
              <p className="text-4xl font-medium mt-7">
                Custina integrates with QuickBooks, Sage Intacct, NetSuite, &
                more to keep your transaction in sync.
              </p>
              <Link href={"/product/integrationn"} className="flex text-4xl mt-8">
                View 1,000s of integrations{" "}
                <FaArrowRight className=" mt-1 ml-5" />
              </Link>
            </div>

          </div>
            <h1>FAQ</h1>
        </div>
      </div>
    </div>
  );
};

export default index;
