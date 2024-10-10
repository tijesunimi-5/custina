import React from "react";
import { motion, easeInOut } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
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
          This is automated bill pay made better.
        </h1>
        <p className="text-4xl pt-10 font-semibold">
          Eliminate data entry, automate approvals, and spin up virtual cards in
          one click to maximize your rewards.
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
            <FaEnvelope />
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

      <div className="w-full">
        <div className="mt-56 text-center">
          <h1>Save hours with bill pay automation.</h1>
          <p className="mt-10">
            Designed with AI to free up your AP team for higher-impact work
          </p>
        </div>

        <div className="ml-10 mt-44">
          <h1>Onboard vendors with ease.</h1>
          <p className="mt-10">
            Enter your vendor's email address and Custina will send a secure
            link where they can upload their payment details. Say goodbye to
            manual data entry and the risk of human error.
          </p>
        </div>

        <div className="ml-10 mt-44">
          <h1>Capture itemized invoices easily.</h1>
          <p className="mt-10">
            Easily import your invoices by forwarding, emailing, or upgrading,
            including bulk uploads. Then Custina AI will capture every itemized
            detail, suggest the matching PO, and draft a payment.
          </p>
        </div>

        <div className="ml-10 mt-44">
          <h1>Route to the right approvers.</h1>
          <p className="mt-10">
            Tailor multi-level approval flows based on amount, vendor, employee
            role, and more - and Custina will route for you automatically to
            ensure the right people sign off every time.
          </p>
        </div>

        <div className="ml-10 mt-44">
          <h1>Pay your way, and earn rewards.</h1>
          <p className="mt-10">
            Create a virtual card instantly to pay by card and earn rewards.
            Send ACH, checks, and wires from any bank account or a Custina
            business account for even faster payments in more currencies.
          </p>
          <Link
            href={"/solutionPages/startups/business-account"}
            className="flex text-4xl text-orange-500 mt-32"
          >
            View Custina business account <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>

        <div className="ml-10 mt-44">
          <h1>Seamlessly sync with your ERP.</h1>
          <p className="mt-10">
            Easily integrate your bill, payment, and vendor data with your ERP
            accounting systems to eliminate manual data entry, import and match
            purchase orders, and close the books faster.
          </p>
          <Link
            href={"/product/integrationn"}
            className="flex text-4xl text-orange-500 mt-32"
          >
            View integrations <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>

        <div className="bg-gray-200 rounded-xl ml-24 mt-44 w-[780px]">
          <div className="w-[650px] ml-14 py-7">
            <h1>Control payments proactively.</h1>
            <p className="mt-8">
              Custina makes it easy to enable vendor spend and ensure payments
              are in policy - before they happen.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-xl ml-24 mt-44 w-[780px]">
          <div className="w-[650px] ml-14 py-7">
            <h1>Enable procurement spend.</h1>
            <p className="mt-8">
              Issue a spend limit for a PO, vendor, or contract to enable ACH,
              check, or wire payments. Never send more than the contracted
              amount again.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-xl ml-24 mt-44 w-[780px]">
          <div className="w-[650px] ml-14 py-7">
            <h1>Embed custom controls.</h1>
            <p className="mt-8">
              Require an invoice and enforce categories, vendors, limits, and
              more automatically - ensuring every payment is in-policy.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-xl ml-24 mt-44 w-[780px]">
          <div className="w-[650px] ml-14 py-7">
            <h1>Track actuals vs. budget.</h1>
            <p className="mt-8">
              View payables and payments in real time to keep AP teams
              accountable and on budget. Run custom AP reports on demand.
            </p>
          </div>
        </div>

        <div className="mt-48 text-center w-[800px] ml-20">
          <h1>Manage all your bills in one place.</h1>
          <p className="mt-10">
            View all invoices, payables, and payments for any period, anytime.
          </p>
        </div>

        <div className="mt-48 text-center w-[800px] ml-20">
          <h1>Bill pay is better with Custina.</h1>
          <p className="mt-10">
            Bill pay, cards, reimbursements, expense management, and travel. All
            in one place.
          </p>
        </div>

        <div className="ml-10 mt-44">
          <h1>Bill pay built for scale.</h1>
          <p className="mt-10">
            Automate payables, approvals, and payments with advanced controls at any stage of growth. Ready to shorten your to-do list?
          </p>
          <div className="text-start mt-20">
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
