import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const index = () => {
  return (
    <div
      className={`startup  m-auto w-[996px] justify-center pr-12 align-center pl-2  `}
    >
      <div className="bg-[#f0f8ff] pt-36 w-[996px] text-black h-[120vh] ml-[-10px] pl-16">
        <div>Image needed</div>
        <h1 className="text-6xl font-[900] space-x-2 tracking-wide">
          simplify your workflow with Custina integrations.
        </h1>
        <p className="text-4xl pt-10 pl-8 font-semibold">
          Free up your team with an unparalleled set of automatic
          classifications, and export options to fit your accounting needs, as
          well as top HRIS integrations.
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

      <div>
        <div className="ml-10 mt-44">
          <h1>Close your books even faster.</h1>
          <p className="mt-10">
            Save hours preparing, reviewing, and exporting expenses with
            accounting integrations that help you speed up your monthly close.
          </p>
          <Link
            href={"/accounting-automation"}
            className="flex text-4xl text-orange-500 mt-32"
          >
            Explore accounting automation <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>

        <div className="ml-10 mt-44">
          <h1>Sync with any ERP for a real-time view.</h1>
          <p className="mt-10">
            Increase accountability with the most accurate view of adata you can
            trust. Import and export your accounting data with our direct ERP
            integrations or Universal ERP CSV transfer.
          </p>
          <Link
            href={"/netsuite"}
            className="flex text-4xl text-orange-500 mt-32"
          >
            Explore our award-winning NetSuite integration{" "}
            <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>

        <div className="ml-10 mt-44">
          <h1>automatically onboard and offboard employees more securely.</h1>
          <p className="mt-10">
            Custina connects with more than 50 of the top HR and identity
            platforms, so you can automatically issue cards and adjust spending
            amounts when employees join, switch roles, or leave. Org chart
            changes will no longer hold up expense approvals.
          </p>
          <Link href={"/hris"} className="flex text-4xl text-orange-500 mt-32">
            Connect your HRIS
            <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>

        <div className="ml-10 mt-44">
          <h1>Set up custom alerts for better accountability.</h1>
          <p className="mt-10">
            Custina connects with leading automation platforms Workato and
            Zapier so you can set up custom transaction or payment alerts via
            any system - like email, SLack, Microsoft Teams, even WhatsApp.
          </p>
          <Link
            href={"/no-code"}
            className="flex text-4xl text-orange-500 mt-32"
          >
            Explore automation tools <FaArrowRight className="ml-5 mt-1" />
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default index;
