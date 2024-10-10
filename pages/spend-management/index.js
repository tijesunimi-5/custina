import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { FaBuilding, FaCheckCircle, FaDollarSign, FaEnvelope, FaFileAlt, FaFileInvoiceDollar, FaGlobe, FaPeopleCarry, FaRegCreditCard, FaSearchDollar } from "react-icons/fa";
import Link from "next/link";
import Button from "@/layout/Button";

const index = () => {
  return (
    <div
      className={`startup  m-auto w-[996px] justify-center pr-12 align-center pl-2 `}
    >
      <div className="bg-[#f0f8ff] pt-36 w-[996px] text-black h-[120vh] ml-[-10px] pl-16">
        <div>Image needed</div>
        <h1 className="text-7xl font-extrabold space-x-2 tracking-wide">
          The future of spend management.
        </h1>
        <p className="text-4xl pt-10 pl-8 font-semibold">
          Manage global spend and close the books in real time - with unmatched
          automation of manual expense work.
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
        <div className="text-center mt-20">
          <h1>All your spend, all in one place.</h1>
          <p className="mt-10 ">
            Control global spend smarter with a single source of truth.
          </p>
        </div>

        <Link href={"/credit-card"}>
          <div className="w-[820px] h-[400px] bg-gray-200 rounded-lg ml-20 mt-28">
            .
            <span className="">
              <FaRegCreditCard className="text-9xl ml-16 mt-10" />
            </span>
            <h1 className="pl-16 pt-12">Cards</h1>
          </div>
        </Link>

        <Link href={"/spend-management#reimbursements"}>
          <div className="w-[820px] h-[400px] bg-gray-200 rounded-lg ml-20 mt-28">
            .
            <span className="">
              <FaFileInvoiceDollar className="text-9xl ml-16 mt-10" />
            </span>
            <h1 className="pl-16 pt-12">Reimbursements</h1>
          </div>
        </Link>

        <Link href={"/bill-pay"}>
          <div className="w-[820px] h-[400px] bg-gray-200 rounded-lg ml-20 mt-28">
            .
            <span className="">
              <FaSearchDollar className="text-9xl ml-16 mt-10" />
            </span>
            <h1 className="pl-16 pt-12">Bill-pay</h1>
          </div>
        </Link>

        <Link href={"/solutionPages/startups/business-account"}>
          <div className="w-[820px] h-[400px] bg-gray-200 rounded-lg ml-20 mt-28">
            .
            <span className="">
              <FaBuilding className="text-9xl ml-16 mt-10" />
            </span>
            <h1 className="pl-16 pt-12">Business account</h1>
          </div>
        </Link>

        <div className="w-[750px] ml-28 mt-32">
          <h1>Embed your policy in every swipe.</h1>
          <p className="mt-16">
            You can't be everwhere, but with Custina your policy can. AI will
            auto-enforce your custom controls across Custina card,
            reimbursements, travel plaform, and invoices.
          </p>
        </div>

        <ul>
          <li className="flex justify-center text-5xl ml-28 mt-20 w-[800px]">
            <span className="text-8xl pt-8">
              <FaFileAlt />
            </span>
            <span className="text-[1em] pl-5 font-medium">
              Customize policies by use case, level, department, non-US entity,
              or anything else.
            </span>
          </li>

          <li className="flex justify-center text-5xl ml-28 mt-20 w-[800px]">
            <span className="text-8xl pt-8">
              <FaPeopleCarry />
            </span>
            <span className="text-[1em] pl-5 font-medium">
              Block or require approval to spend on specific
              categories/merchants.
            </span>
          </li>

          <li className="flex justify-center text-5xl ml-28 mt-20 w-[800px]">
            <span className="text-8xl pt-8">
              <FaCheckCircle />
            </span>
            <span className="text-[1em] pl-5 font-medium">
              Make easy-to-understand expense rules accessible at the time of
              purchase.
            </span>
          </li>
        </ul>

        <div className="pt-48 pl-32 w-[900px]">
          <h1>Increase accountability with LiveBidgets.</h1>
          <p className="w-[600px] mt-28 font-semibold">
            {" "}
            Set top-level budgets across departments and assign them to
            department heads. They can provision spend to individuals or teams,
            and track usage in real time.
          </p>

          <button className="rounded-xl border border-black text-4xl px-6 py-4 mt-24">
            Explore spend limits
          </button>
        </div>

        <div className="pt-48 pl-32 w-[900px]">
          <h1>End the month-end hassle.</h1>
          <p className="text-5xl mt-20 font-bold">
            Custina is built for continuous close.
          </p>
          <p className="w-[600px] font-semibold">
            {" "}
            <br />
            Custina integrates with top ERPs like QuickBooks and NetSuite,
            helping you close your books every day, enabling in-month reporting,
            and automating workflows.
          </p>

          <button className="rounded-xl border border-black text-4xl px-6 py-4 mt-24">
            Explore accounting automation
          </button>
        </div>

        <div className="pt-48 pl-32 w-[700px]">
          <h1>Insights you can act on.</h1>
          <p className="w-[600px] mt-28 font-semibold">
            {" "}
            Run real-time spend and budget reports across cards, reimbursements,
            travel, and payments to find ways to save and improve ROI.
          </p>
        </div>

        <div className="pt-48 pl-32 w-[900px]" id="reimbursements">
          <h1>Reimburse employees anywhere, fast.</h1>
          <p className="w-[600px] mt-28 font-semibold">
            {" "}
            US and international employees can get reimbursed in three days or
            less - and your policy will be auto-applied.
          </p>

          <ul>
            <li className="flex justify-center text-5xl  mt-20 w-[800px]">
              <span className="text-8xl pt-12">
                <FaGlobe />
              </span>
              <span className="text-[1em] pl-7 font-medium">
                Reimburse employees in their local currency and bank account -
                in 70 countries and counting.
              </span>
            </li>

            <li className="flex justify-center text-5xl mt-20 w-[800px]">
              <span className="text-8xl pt-8">
                <FaBuilding />
              </span>
              <span className="text-[1em] pl-7 font-medium">
                Subsidiaries can issue reimbursements from their local bank
                account to simplify accounting.
              </span>
            </li>

            <li className="flex justify-center text-5xl  mt-20 w-[800px]">
              <span className="text-8xl ">
                <FaDollarSign />
              </span>
              <span className="text-[1em] pl-7 font-medium">
                Unlimited reimbursements with no per-transaction fees.
              </span>
            </li>
          </ul>
        </div>

        <div className="pt-48 pl-32 w-[900px]">
          <h1>Manage spend globally, operate locally.</h1>
          
          <p className="w-[600px] mt-20 font-semibold">
            {" "}
            <br />
            Custina makes it easy to manage global spend across locations and operate in virtually any currency.
          </p>

          <button className="rounded-xl border border-black text-4xl px-6 py-4 mt-24">
            Explore global capabilities
          </button>
        </div>


        <div className="mt-32 w-[900px] text-center ml-10">
          <h1>Welcome to the future of spend management.</h1>
          <p className="mt-10 text-start">Let's talk about how Custina can help you automate control and compliance, and gain real-time insights to improve ROI,</p>

          <div className="mt-10 text-start">
            <Button>Get started</Button>
          </div>
        </div>

        <div>FAQ</div>
      </div>
    </div>
  );
};

export default index;
