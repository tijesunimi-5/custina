import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import Button from "@/layout/Button";

const index = () => {
  const buttonClick = (e) => {
    const input = document.querySelector("input");

    e.preventDefault();
    console.log(input.value);
  };

  return (
    <div className="creditCard m-auto w-[996px] justify-center pr-12 align-center pl-2 pt-10">
      <div className="bg-[#f0f8ff] pt-28 w-[996px] text-black h-[110vh] ml-[-10px] pl-10">
        <h1 className="text-7xl font-extrabold space-x-2 tracking-wide">
          Finally, a corporate card companies can trust.
        </h1>
        <p className="text-4xl pt-10 font-semibold">
          Where higher spending power meets smarter controls - and expense
          reports do themselves.
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
          className="mt-16 m-auto pl-6 w-[700px] relative"
        >
          <span className="absolute justify-center align-middle mt-2 h-9 ml-2 text-4xl border-r-2 pr-2 border-black">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <input
            type="email"
            placeholder="Work email address"
            className="w-[700px] border-2 rounded-md h-14 px-16 text-3xl border-black"
          />
          <button
            className="absolute right-[-22px] rounded-tr-md rounded-br-md top-[1.95px] bg-orange-500 h-[52px] w-60 text-white text-3xl font-semibold tracking-widest"
            onClick={buttonClick}
          >
            Get started
          </button>
        </motion.form>
      </div>

      <div className="w-[996px] pt-32  flex flex-col bg-[#f0f8ff]">
        <h1 className="text-6xl text-center font-bold">
          Corporate credit cards for startups and enterprises.
        </h1>

        <div className="flex w-[996px] text-center  flex-col">
          <div className="bg-gray-200 ml-20 w-[820px] h-[320px] mt-20 rounded-3xl">
            <h1 className="text-5xl pt-10 text-center font-bold">
              Worldwide card acceptance.
            </h1>
            <p className="mt-20 ml-20 text-4xl text-left font-semibold w-[690px]">
              Physical and virtual cards issued on the leading worldwide
              network, Mastercard.
            </p>
          </div>

          <div className="bg-gray-200 ml-20 w-[820px] h-[320px] mt-20 rounded-3xl">
            <h1 className="text-5xl pt-10 text-center font-bold">
              5-star app on IOS and Android.
            </h1>
            <p className="mt-10 ml-20 text-4xl text-left font-semibold w-[690px]">
              Manage your card from your phone. Pay with Apple Pay, cancel your
              card, and view your spend all in one app.
            </p>
          </div>

          <div className="bg-gray-200 ml-20 w-[820px] h-[320px] mt-20 rounded-3xl">
            <h1 className="text-5xl pt-10 text-center font-bold">
              Get rewarded for spending.
            </h1>
            <p className="mt-10 ml-20 text-4xl text-left font-semibold w-[690px]">
              Earn up to 7x back, redeem for cash back, credits, or even
              billboards.
            </p>
          </div>

          <div className="bg-gray-200 ml-20 w-[820px] h-[320px] mt-20 rounded-3xl">
            <h1 className="text-5xl pt-10 text-center font-bold">
              Credit limits that work for you.
            </h1>
            <p className="mt-10 ml-20 text-4xl text-left font-semibold w-[690px]">
              Get a card limit appropriate to your business based on financial
              factors such as revenue or dollars raised.
            </p>
          </div>

          <div className="bg-gray-200 ml-20 w-[820px] h-[320px] mt-20 rounded-3xl">
            <h1 className="text-5xl pt-10 text-center font-bold">
              24/7 customer support.
            </h1>
            <p className="mt-10 ml-20 text-4xl text-left font-semibold w-[690px]">
              Call or chat live 24/7 from anywhere, with notification by Slack,
              text, email, WhatsApp - whatever you prefer.
            </p>
          </div>

          <div className="bg-gray-200 ml-20 w-[820px] h-[320px] mt-20 rounded-3xl">
            <h1 className="text-5xl pt-10 text-center font-bold">
              Enterprise-grade security.
            </h1>
            <p className="mt-10 ml-20 text-4xl text-left font-semibold w-[690px]">
              Chip and PIN, fraud protection, and more on World Elite Matercard.
            </p>
          </div>

          <div className="flex flex-col w-full justify-center mt-32">
            <h1 className="text-6xl font-bold">
              The only corporate card that does it all.
            </h1>

            <p className="text-4xl pl-10 w-[950px] text-left font-medium mt-9">
              Enable spend for travel, procurement, and more with worldwide card
              acceptance and local cards in 20+ currencies and counting.
            </p>

            <div className="text-start ml-10 mt-5">
              <Button>Learn more</Button>
            </div>
          </div>

          <div className="border border-black flex flex-col mt-44 w-[820px] justify-center rounded-3xl ml-20 text-left">
            <h1 className="text-6xl font-bold pl-10 pt-5">T&E cards</h1>

            <p className="mt-10 font-medium text-4xl pl-10">
              Enable travel expenses and ensure policy compliance with automated
              controls, receipts, and memos.
            </p>

            <div className="text-orange-400 flex text-4xl align-middle pl-10 pt-10 pb-5">
              <Link href={"#"} className="text-3xl pb-1 pr-5">
                Learn more{" "}
              </Link>
              <FaArrowRight className="pt-2 text-4xl" />
            </div>
          </div>

          <div className="border border-black flex flex-col mt-20 w-[820px] justify-center rounded-3xl ml-20 text-left">
            <h1 className="text-6xl font-bold pl-10 pt-5">Vendor cards</h1>

            <p className="mt-10 font-medium text-4xl pl-10">
              Designate spend limits for specific vendor expenses, and set to
              recur or expire, to avoid being overcharged.
            </p>

            <div className="text-orange-400 flex text-4xl align-middle pl-10 pt-10 pb-5">
              <Link href={"#"} className="text-3xl pb-1 pr-5">
                Learn more{" "}
              </Link>
              <FaArrowRight className="pt-2 text-4xl" />
            </div>
          </div>

          <div className="border border-black flex flex-col mt-20 w-[820px] justify-center rounded-3xl ml-20 text-left">
            <h1 className="text-6xl font-bold pl-10 pt-5">Purchase cards</h1>

            <p className="mt-10 font-medium text-4xl pl-10">
              Instantly issue purchase cards with per-transaction AP controls
              and PO-like approval flows.
            </p>

            <div className="text-orange-400 flex text-4xl align-middle pl-10 pt-10 pb-5">
              <Link href={"#"} className="text-3xl pb-1 pr-5">
                Learn more{" "}
              </Link>
              <FaArrowRight className="pt-2 text-4xl" />
            </div>
          </div>

          <div className="border border-black flex flex-col mt-20 w-[820px] justify-center rounded-3xl ml-20 text-left">
            <h1 className="text-6xl font-bold pl-10 pt-5">Benefits cards</h1>

            <p className="mt-10 font-medium text-4xl pl-10">
              Set up recurring or one-time employee stipend cards with embedded
              policies - and only pay for what's used.
            </p>

            <div className="text-orange-400 flex text-4xl align-middle pl-10 pt-10 pb-5">
              <Link href={"#"} className="text-3xl pb-1 pr-5">
                Learn more{" "}
              </Link>
              <FaArrowRight className="pt-2 text-4xl" />
            </div>
          </div>

          <div className="border border-black flex flex-col mt-20 w-[820px] justify-center rounded-3xl ml-20 text-left">
            <h1 className="text-6xl font-bold pl-10 pt-5">You name it</h1>

            <p className="mt-10 font-medium text-4xl pl-10">
              Provision spend limits for any need, and your policy will be
              auto-applied with every Custina card swipe.
            </p>

            <div className="text-orange-400 flex text-4xl align-middle pl-10 pt-10 pb-5">
              <Link href={"#"} className="text-3xl pb-1 pr-5">
                Learn more{" "}
              </Link>
              <FaArrowRight className="pt-2 text-4xl" />
            </div>
          </div>

          <div className="mt-32">
            <h1 className="text-6xl text-center font-bold">
              With controls at every swipe.
            </h1>
            <p className="text-4xl font-medium mt-10">
              Custina cards have expense management built in - because a card
              without controls is, well, out of control.
            </p>

            <div className="mt-10 ">
              <Button>Explore expense management</Button>
            </div>
          </div>

          <div className="border  flex flex-col mt-20 w-[820px] justify-center bg-gray-200 rounded-3xl ml-20 text-left">
            <h1 className="text-6xl font-bold pl-10 pt-5">
              Automate employee compliance.
            </h1>

            <p className="mt-10 font-medium text-4xl pl-10 pb-5">
              Custina cards automatically collect itemized receipts compliant
              with IRS or local tax laws, generate memos, and categorize to the
              right GL and/or project - including at international entities.
            </p>
          </div>

          <div className="border bg-gray-200 flex flex-col mt-20 w-[820px] justify-center rounded-3xl ml-20 text-left">
            <h1 className="text-6xl font-bold pl-10 pt-5">
              Customize limits and controls.
            </h1>

            <p className="mt-10 font-medium text-4xl pl-10 pb-5">
              Issue spend limits with embedded controls for category, merchant,
              and more. Transfer cards in one click or automatically when an
              employee leaves.
            </p>
          </div>

          <div className="border bg-gray-200 pb-10 flex flex-col mt-20 w-[820px] justify-center rounded-3xl ml-20 text-left">
            <h1 className="text-6xl font-bold pl-10 pt-5">
              Track expenses in real time.
            </h1>

            <p className="mt-10 font-medium text-4xl pl-10 pb-5">
              Monitor card limits and expenses in real time, by team,
              individual, and global subsidiary, all in a single console to
              increase accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
