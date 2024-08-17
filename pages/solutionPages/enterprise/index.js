import React from "react";
import { motion, easeInOut } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div className="companysize m-auto w-[500px] justify-center pr-12 align-center pl-2 ">
      <div className="bg-[#f0f8ff] pt-28 w-[729px] text-black h-[90vh] ml-[-10px] pl-10">
        <h1 className="text-7xl font-extrabold space-x-2 tracking-wide">
          Optimize your spend on a global scale.
        </h1>
        <p className="text-4xl pt-10 font-semibold">
          Global travel and spend management for unmatched efficiency and
          control in any market.
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
          className="mt-24 ml-12 pl-0 mr-16 w-[550px] relative"
        >
          <span className="absolute justify-center align-middle mt-2 h-12 ml-2 text-black text-4xl border-r-2 pr-2 border-black">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <input
            type="email"
            placeholder="Work email address"
            className="w-[550px] border-2 rounded-[20px] h-16 px-14 border-black placeholder:text-3xl"
          />
          <button className="absolute right-[-24px] rounded-tr-[20px] rounded-br-[20px] top-[1.95px] bg-orange-500 h-[61px] w-40 text-white font-semibold tracking-widest">
            Get started
          </button>
        </motion.form>
      </div>

      <div className="w-[700px] mt-56 m-auto ml-1">
        <div className="w-[650px] m-auto">
          <h1 className="text-6xl font-bold text-center">
            All your global spend, all in one place.
          </h1>
          <p className="mt-10 text-4xl font-bold text-center text-gray-500">
            Consolidate your spend onto Custina, the only truly global platform
            for enterprise spend management.
          </p>
        </div>

        <div className="border-[1px] border-black p-10 mt-40 rounded-3xl">
          <h1 className="text-5xl font-bold mb-6">Spend smarter anywhere.</h1>
          <p className="text-3xl font-semibold mb-10 ">
            Empower global employees to make better financial decisions with
            smart cards and fast reimbursements issued in their local currency.
          </p>
          <a className="text-2xl text-red-500">
            Explore Custina cards <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="border-[1px] border-black p-10 mt-10 rounded-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Unify your global entities.
          </h1>
          <p className="text-3xl font-semibold mb-10 ">
            Easily manage expenses across entities with customized controls and
            automations - and a holistic real-time view of actuals vs. budgets.
          </p>
          <a className="text-2xl text-red-500">
            Explore Custina expense management{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="border-[1px] border-black p-10 mt-10 rounded-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Make a global travel a breeze.
          </h1>
          <p className="text-3xl font-semibold mb-10 ">
            Book and manage global travel in Custina at competitive rates.
            Uphold your duty of carea with 24/7 support and real-tim traveler
            visibility.
          </p>
          <a className="text-2xl text-red-500">
            Explore Custina travel <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div>Testimonial</div>

        <div className="mt-20 m-auto">
          <h1 className="text-5xl font-bold text-center">
            Automate global financial management.
          </h1>
          <p className="mt-10 text-3xl font-semibold text-center text-gray-700">
            Eliminate manual work in every spend workflow from provisioning to
            approvals to VAT tracking.
          </p>
        </div>

        <div className="m-auto mt-44 w-[600px]">
          <h1 className="text-5xl font-bold">
            Enable and control spend efficiently, locally.
          </h1>
          <p className="text-3xl font-semibold mt-10 mb-12">
            Provision spend limits with built-in policies in 100+ currencies.
            Track actuals against planned spend in real-time with Live Budgets.
            Automate approvals to save time and focus on expenses that matter.
          </p>

          <a className="text-red-500 text-2xl">
            Explore spend controls <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="m-auto mt-32 w-[600px]">
          <h1 className="text-5xl font-bold">
            Easily adapt to foreign markets and regulations.
          </h1>
          <p className="text-3xl font-semibold mt-10 mb-12">
            Personalize spend limits and policies to each entity's customs and
            currency. The right policy will be intelligently applied to expenses
            and reimbursements, and expense reports will be auto-filled to boost
            compliance.
          </p>

          <a className="text-red-500 text-2xl">
            Explore Custina expense management{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="m-auto mt-32 w-[600px]">
          <h1 className="text-5xl font-bold">
            Save time with multi-entity accounting automation.
          </h1>
          <p className="text-3xl font-semibold mt-10 mb-12">
            Ensure accuracy and close the books faster. Track VAT and export it
            to your ERP automatically classify and export transactions to the
            correct subsidiary with entity-level ERP mapping.
          </p>

          <a className="text-red-500 text-2xl">
            Explore accounting automationns{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="m-auto mt-32 w-[600px]">
          <h1 className="text-5xl font-bold">
            Travel and operate anywhere - only on Custina.
          </h1>
          <p className="text-3xl font-semibold mt-10 mb-12">
            Avoid fees and bottlenecks, and save on travel. Custina supports
            more countries and currencies than anyone else, with local-currency
            cards, billing, and reimbursements - and unbiased{" "}
            <a className="underline">global travel</a> inventory at competitive
            rates.
          </p>

          <a className="text-red-500 text-2xl">
            Explore Custina global features{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="mt-40 m-auto">
          <h1 className="text-5xl font-bold text-center">
            Make every spend decision a good one.
          </h1>
          <p className="mt-10 w-[610px] m-auto text-3xl font-semibold text-center text-gray-700">
            Run custom, real-time reports to identify risks and opportunities
            globally.
          </p>
        </div>

        <div className="mt-20 m-auto">
          <h1 className="text-5xl font-bold text-center">Spend reports.</h1>
          <p className="mt-10 w-[610px] m-auto text-3xl font-semibold text-center text-gray-700">
            Get spend insights in real time by entity, team, and more - with
            AI-powered alerts on anomalous spend and trends.
          </p>
        </div>

        <div className="mt-20 m-auto">
          <h1 className="text-5xl font-bold text-center">
            Compliance reports.
          </h1>
          <p className="mt-10 w-[610px] m-auto text-3xl font-semibold text-center text-gray-700">
            See a snapshot of your compliance status, including how much spend
            is out of compliance and who is responsible.
          </p>
        </div>

        <div className="mt-20 m-auto">
          <h1 className="text-5xl font-bold text-center">
            Transaction reports.
          </h1>
          <p className="mt-10 w-[610px] m-auto text-3xl font-semibold text-center text-gray-700">
            Run reports across global card expenses and reimbursements,
            filtering by budgets, users, categories, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
