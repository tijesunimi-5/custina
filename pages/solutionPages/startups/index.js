import React from "react";
import { Inter } from "next/font/google";
import { easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Card from "@/layout/Card";
import { FaEnvelope } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const index = () => {
  return (
    <div
      className={`startup  m-auto w-[996px] justify-center pr-12 align-center pl-2 ${inter.className} `}
    >
      <div className="bg-[#f0f8ff] pt-36 w-[996px] text-black h-[120vh] ml-[-10px] pl-16">
        <div>Image needed</div>
        <h1 className="text-7xl font-extrabold space-x-2 tracking-wide">
          The financial stack you can bank on.
        </h1>
        <p className="text-4xl pt-10 pl-8 font-semibold">
          Get business banking, card, bill pay, travel, and reimbursements --
          all in one scalable solution
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

      <div className="flex flex-col justify-between w-[720px] h-[400px] bg-[#f0f8ff] mt-48 m-auto text-center">
        <div className="text-center">image needed</div>
        <h1 className="text-3xl font-semibold">Testimony Section</h1>
        <p className="text-4xl font-semibold">
          Custina has helped me manage my financing in a very big way{" "}
        </p>
      </div>

      

      <div className="flex flex-col justify-start w-[995px] mt-32">
        <div>image needed</div>
        <div className="w-[890px] pl-20">
          <h1 className="text-6xl font-extrabold m-auto text-start">
            Make your money work harder with banking and treasury.
          </h1>
          <p className="pt-10 text-5xl letter-spacing-[5px] leading-[45px] font-medium text-start">
            Trusted by 1 in 3 venture-backed US startups, the Custina account
            gives you access to checking, treasury, and FDIC insurance all in
            one account.
          </p>
          <ul className="mt-9 text-4xl font-medium list-disc ml-6">
            <li className="pb-6">
              Send fast ACH, checks, and wires in 41 currencies
            </li>
            <li className="pb-6">
              Earn 4.89% yield on all of your operational cash
            </li>
            <li className="pb-6">
              Get up to $6M FDIC insurance through program banks*
            </li>
            <li className="pb-6">Sign up all online in just 10 minutes</li>
          </ul>

          <p className="text-red-400 text-4xl">
            Learn more about Custina business accounts{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>

        <div className="m-auto mt-20 w-[950px]">
          <h1 className="text-6xl font-extrabold text-center">
            The operating account for founders, by founders.
          </h1>

          <div className="m-auto ml-28">
            <Card>
              <h1 className="text-5xl font-bold pl-10 pt-6">
                Increase your spending power
              </h1>
              <p className="text-4xl font-medium pt-8 pl-10">
                Extend your runway with instant Custina card payments and up to
                20x higher limits with a Custina business account.
              </p>
            </Card>

            <Card>
              <h1 className="text-5xl font-bold pl-10 pt-6">
                Earn yield, stay liquid
              </h1>
              <p className="text-4xl font-medium pt-8 pl-10">
                Earn high yield on your operational cash with a fully integrated
                treasury account. No minimums or hidden fees, automated
                transfers, and 100% liquidity.
              </p>
            </Card>

            <Card>
              <h1 className="text-5xl font-bold pl-10 pt-6">
                Secure your captial
              </h1>
              <p className="text-4xl font-medium pt-8 pl-10">
                Safeguard your funds with customizable approval flows, 24/7
                support, and up to $6M in FDIC insurance (20x the standard
                protection) through our program banks*.
              </p>
            </Card>

            <Card>
              <h1 className="text-5xl font-bold pl-10 pt-6">
                Automated bill pay
              </h1>
              <p className="text-4xl font-medium pt-8 pl-10">
                Keep more cash on hand with a business account that allows you
                to settle bills up to 5 days sooner with integrated bill pay.
              </p>
            </Card>
          </div>
        </div>

        <div className="flex flex-col justify-between w-[996px] h-[400px] bg-[#f0f8ff] mt-48 m-auto text-center">
          <div className="text-center">image needed</div>
          <h1 className="text-3xl font-semibold">Testimony Section</h1>
          <p className="text-4xl font-semibold">
            Custina has helped me manage my financing in a very big way{" "}
          </p>
        </div>

        <div className="w-[980px] m-auto mt-28 pl-3">
          <div>image needed</div>
          <h1 className="text-6xl font-extrabold text-start">
            Give corporate cards to your crew.
          </h1>
          <p className="text-5xl font-bold mt-10">
            Unlock credit based on your business, not your credit score. And
            easily issue cards and reimbursements.
          </p>
          <ul className="mt-6 list-disc text-4xl ml-7">
            <li className="pb-6">No personal guarantee required</li>
            <li className="pb-6">Unlimited virtual and physical cards</li>
            <li className="pb-6">Rewards that grow your business</li>
            <li className="pb-6">24/7 fraud monitoring and protection</li>
            <li className="pb-6">Apple Pay and mobile wallet</li>
          </ul>
          <p className="text-red-400 text-4xl pl-[-25px] font-medium">
            Discover everything that Custina cards offer as you scale {""}
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>

        <div className="w-[950px] m-auto mt-28">
          <h1 className="text-6xl font-extrabold text-center">
            The card that manages expenses too.
          </h1>

          <div className="flex flex-col m-auto justify-between">
            <div className="border-[1px] border-black mb-6 p-10 rounded-lg mt-12">
              <h1 className="text-6xl font-bold font-sans pb-6">
                Built-in controls
              </h1>
              <p className="text-4xl font-semibold">
                Create spend limits (for employees, teams, even vendors) with
                auto-enforced rules to enable and control spending
              </p>
            </div>

            <div className="border-[1px] border-black mb-6 p-10 rounded-lg">
              <h1 className="text-6xl font-bold font-sans pb-6">
                Easy integrations
              </h1>
              <p className="text-4xl font-semibold">
                Automatically sync card expenses with the software you already
                use for <a className="underline">accounting,</a>{" "}
                <a className="underline">payroll,</a>{" "}
                <a className="underline">and benefits.</a>
              </p>
            </div>

            <div className="border-[1px] border-black mb-6 p-10 rounded-lg">
              <h1 className="text-6xl font-bold font-sans pb-6">
                AL-driven automation
              </h1>
              <p className="text-4xl font-semibold">
                Simplify expenses with real-time tracking and reporting, and
                auto-generated receipts and memos.
              </p>
            </div>

            <div className="border-[1px] border-black mb-6 p-10 rounded-lg">
              <h1 className="text-6xl font-bold font-sans pb-6">
                Reimbursements
              </h1>
              <p className="text-4xl font-semibold">
                Don't want to give 'em a card? that's okay. Issue hassle-free
                reimbursements for anyone on the team.
              </p>
            </div>
          </div>

          <div className="w-[940px] rounded-3xl mt-28 h-[500px] bg-[#f0f8ff] m-auto p-10 pt-16">
            <h1 className="text-6xl font-bold font-sans pb-6">
              The only financial stack that puts your name in lights.
            </h1>
            <p className="text-4xl font-medium pt-10 mb-6">
              Earn points onyour Custina card and redeem for billboards in
              places like Times Square and at prominent startup events.
            </p>
            <a href="" className="text-4xl font-bold text-red-500 ">
              Open an account
            </a>
          </div>
        </div>

        <div className="flex flex-col w-[996px] h-[840px] bg-[#f0f8ff] mt-44">
          <div>
            <span>Image</span>
            Testimonial
          </div>

          <span className="mt-32">Image</span>

          <div className="m-auto w-[950px]">
            <h1 className="text-6xl font-bold font-sans pb-6">
              Get more runaway for the ride.
            </h1>
            <p className="text-4xl font-bold">
              You're going places, and Custina has all the financial tools you
              need to reach your exit.
            </p>
            <ul className="list-disc text-4xl font-bold pl-6 pt-8 tracking-wider">
              <li className="pt-6">Automated tax and policy compliance</li>
              <li className="pt-6">
                Cards and reimbursements in local currency
              </li>
              <li className="pt-6">Enterprise-grade security & support</li>
              <li className="pt-6">
                Custom policies and expense approval chains
              </li>
              <li className="pt-6 mb-10">
                Over $400K in discounts on AI and SaaS tools
              </li>
            </ul>

            <a className="text-red-500 text-4xl font-semibold">
              Learn more about expense management{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        <div className="w-[996px] h-[700px] mt-44 ">
          <div className="w-[980px] m-auto">
            <h1 className="text-6xl font-bold font-sans pb-6">
              Your copilot at every stage.
            </h1>
            <p className="text-5xl font-bold mb-10">
              We serve founders as well as global companies with 10,000+
              employees. Everything you need is here, Whenever you're ready.
            </p>

            <ul className="list-disc text-4xl font-medium pl-6">
              <li className="pb-6">
                Enable your team to{" "}
                <a className="underline">book their own travel</a> right in
                Custina
              </li>
              <li className="pb-6">
                Use Custina <a className="underline">APIs</a> to build cutom
                tools and workflows
              </li>
              <li className="pb-6">
                Go <a className="underline">global</a> and operate in nearly any
                country and currency.
              </li>
              <li className="pb-6">
                Upgrade to advanced enterprise{" "}
                <a className="underline">expense management</a>
              </li>
            </ul>

            <a className="text-2xl text-red-500 font-semibold">
              Get started <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        <div className="w-[996px] h-[700px] mt-44 bg-gray-200">
          <div className="m-auto w-[600px] ">
            <h1 className="text-6xl font-extrabold font-serif mt-16">
              Let's grow together
            </h1>
            <p className="text-4xl mt-10 font-bold mb-10">
              We love supporting founders by sharing our content, community, and
              connections.
            </p>
            <ul className="list-disc pl-6 font-medium text-4xl">
              <li className="pb-6">Attend founder events and webinars</li>
              <li className="pb-6">
                Meet industry experts, VCs, and accelerators
              </li>
              <li className="pb-6">
                Hire accountants and other service professionals
              </li>
            </ul>
            <a className="underline text-3xl text-red-500">
              Get our founder newsletter <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        <div className="w-full mt-44">
          <div>
            <div>Testimonials</div>

            <div className="mt-32">
              <h1 className="text-6xl font-bold text-center">
                Everything you'll need as you scale.
              </h1>
              <p className="text-center text-4xl font-medium mt-4">
                Don't waste time assembling disparate tools or switching
                providers every round. Get one unified stack you'll never
                outgrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
