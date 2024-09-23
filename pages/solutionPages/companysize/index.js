import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div className="companysize m-auto w-[500px] justify-center pr-12 align-center pl-2 ">
      <div className="bg-[#f0f8ff] pt-28 w-[729px] text-black h-[120vh] ml-[-10px] pl-10">
        <div>Image needed</div>
        <h1 className="text-7xl font-extrabold space-x-2 tracking-wide">
          Keep spend in control for your next stage of growth.
        </h1>
        <p className="text-4xl pt-10 font-semibold">
          Custina is a complete T&E solution with cards, travel, expense
          management, and reimbursements.
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
            className="w-[575px] border-2 rounded-[20px] h-16 px-14 border-black placeholder:text-3xl"
          />
          <button className="absolute right-[-24px] rounded-tr-[20px] rounded-br-[20px] top-[1.95px] bg-orange-500 h-[61px] w-40 text-white font-semibold tracking-widest">
            Get started
          </button>
        </motion.form>
      </div>

      <div className="w-[700px] mt-20">
        <div className="w-[650px] m-auto mt-20">
          <h1 className="text-center m-auto text-5xl font-extrabold">
            Travel + expense = better on Brex.
          </h1>
          <p className="text-4xl font-medium text-gray-500 text-center">
            Fully automate expense reports and give employees a travel booking
            exprience they will love.
          </p>
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-5xl font-semibold text-center ">Easy to use.</h1>
          <p className="text-4xl font-medium text-center mt-6">
            Make expenses a breeze for every employee with a beautiful mobile
            app powered by Custina AI.
          </p>
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-5xl font-semibold text-center ">
            Greater control.
          </h1>
          <p className="text-4xl font-medium text-center mt-6">
            Keep spend in policy and keep everyone on budget automatically, at
            every swipe.
          </p>
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-5xl font-semibold text-center ">One platform.</h1>
          <p className="text-4xl font-medium text-center mt-6">
            Book business travel, submit reimbursements, and track all spend
            from on dashboard in real time.
          </p>
        </div>

        <div className="w-[600px] mt-28 mb-2 m-auto text-center">
          Testimonials
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-6xl font-bold text-center ">
            Unify your corporate travel and expense management.
          </h1>
          <p className="text-4xl font-medium text-center mt-6">
            Easily handle all of your spending, group events, and travel needs
            in one place.
          </p>
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-6xl font-bold text-center ">
            Enable spend with built-in controls.
          </h1>
          <p className="text-3xl font-medium  mt-6 mb-6">
            Provide physical and virtual cards to your employees for
            pre-approved spend -- T&E, stipends, offsites, and more. And
            reimburse global employees 3x faster for out of pocket spend.
          </p>

          <a className="text-2xl font-normal text-red-500">
            Explore our credit card <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-6xl font-bold text-center ">
            Plan group events like offsites and conferences.
          </h1>
          <p className="text-3xl font-medium  mt-6 mb-6">
            Invite unlimited attendees and track their RSVPs and bookings in
            real time. Then, easily communicate and manage event details with
            built-in itineraries, shared spend limits, and travel reminders.
          </p>

          <a className="text-2xl font-normal text-red-500">
            Explore group spend controls <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-6xl font-bold text-center ">
            Book global travel with exclusive rates.
          </h1>
          <p className="text-3xl font-medium  mt-6 mb-6">
            Lower your travel costs with pre-negotiated discounts on flights,
            hotels, and car rentals. And if an employee ever needs help? Custina
            offers 24/7 support, anywhere in the world, with unlimited
            self-serve itinerary changes.
          </p>

          <a className="text-2xl font-normal text-red-500">
            Explore travel features <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-6xl font-bold text-center ">
            Keep expenses in check every step of the way.
          </h1>
          <p className="text-3xl font-medium  mt-6 mb-6">
            Auto-enforce your expense policy at every swipe and prevent
            out-of-policy spend. Plus, track spending actuals against budgets in
            real time, and make adjustments as needed.
          </p>

          <a className="text-2xl font-normal text-red-500">
            Explore spend management <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="w-[600px] m-auto mt-20">
          <h1 className="text-6xl font-bold text-center ">
            Automate expense and accounting busywork with AI.
          </h1>
          <p className="text-3xl font-medium  mt-6 mb-6">
            Custina AI automates receipts capture, expense categorization, and
            manager approvals so you can close the books faster. And Custina
            Assistant instantly answers employee questions, like: "How much can
            I spend on a team dinner?"
          </p>

          <a className="text-2xl font-normal text-red-500">
            Explore AI-powered automation{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>

      <div className="m-auto text-center mt-44">Testimonial</div>

      <div className="m-auto ml-14 font-bold text-4xl">
        <h1>FAQ</h1>
      </div>
    </div>
  );
};

export default index;
