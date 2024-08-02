import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detail = () => {
  return (
    <div className="m-auto mt-32 w-10/12">
      <div>
        <div>Image needed</div>
        <motion.h1
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: easeInOut
          }}
          className="text-3xl text-center font-extrabold mb-4"
        >
          Control spend before it happens
        </motion.h1>
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1.2,
          }}
          className="mb-8 font-medium"
        >
          Set budgets and allocate spend limits with auto-enforced controls that
          empower employees to spend wisely. Track and adjust in real time to
          keep everyone on budget and maximize impact.
        </motion.p>

        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <Link
            href={"/"}
            className="font-thin text-orange-400 hover:mr-2 transition-all hover:underline mt-10"
          >
            Explore Custina cards
          </Link>{" "}
          <FontAwesomeIcon className="text-orange-400" icon={faArrowRight} />
        </motion.div>
      </div>

      <div className="mt-40">
        <div>Image needed</div>
        <motion.h1
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="text-3xl text-center font-extrabold mb-4"
        >
          Make doing your expenses easy.
        </motion.h1>
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1.2,
          }}
          className="mb-8 font-medium"
        >
          Make expenses a breeze for employees and managers with automated
          receipts, an AI-powered expense assistant, in-app travel bookings and
          itinerary changes. All in a five-star mobile app.
        </motion.p>
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <Link
            href={"/"}
            className="font-thin text-orange-400 hover:mr-2 transition-all hover:underline mt-10"
          >
            Explore Custina expense management
          </Link>{" "}
          <FontAwesomeIcon className="text-orange-400" icon={faArrowRight} />
        </motion.div>
      </div>

      <div className="mt-40">
        <div>Image needed</div>
        <motion.h1
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="text-3xl text-center font-extrabold mb-4"
        >
          Maximize your spending power.
        </motion.h1>
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1.2,
          }}
          className="mb-8 font-medium"
        >
          Unlock 4.92% yield, fast global payments, 20x higher credit limits,
          and cash back with a Brex business account. Plus, safeguard your
          capital with up to $6M in additional FDIC insurance though our program
          banks*.
        </motion.p>
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <Link
            href={"/"}
            className="font-thin text-orange-400 hover:mr-2 transition-all hover:underline mt-10"
          >
            Explore Custina business accounts
          </Link>{" "}
          <FontAwesomeIcon className="text-orange-400" icon={faArrowRight} />
        </motion.div>
      </div>

      <div className="mt-40">
        <div>Image needed</div>
        <motion.h1
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="text-3xl text-center font-extrabold mb-4"
        >
          Pay vendors faster and easier.
        </motion.h1>
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1.2,
          }}
          className="mb-8 font-medium"
        >
          Save time with AI-powered automation of invoice entry, approval, and
          payments. Issue vendor-specific cards for any teams with
          per-transaction limits and procurement approval flows.
        </motion.p>
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <Link
            href={"/"}
            className="font-thin text-orange-400 hover:mr-2 transition-all hover:underline mt-10"
          >
            Explore Brex bill pay
          </Link>{" "}
          <FontAwesomeIcon className="text-orange-400" icon={faArrowRight} />
        </motion.div>
      </div>
    </div>
  );
};

export default Detail;
