import React from 'react'
import { easeInOut, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const index = () => {  
  return (
    <div
      className={`home  m-auto w-[500px] justify-center pr-12 align-center pl-2 `}
    >
      <div className="bg-black pt-28 w-[727px] text-white h-[50vh] ml-[-10px]">
        <h1>The financial stack you can bank on.</h1>
        <p>
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
        className="mt-10 m-auto pl-6 w-[550px] relative"
      >
        <span className="absolute justify-center align-middle mt-2 h-6 ml-2 text-xl border-r-2 pr-2 border-black">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <input
          type="email"
          placeholder="Work email address"
          className="w-[550px] border-2 rounded-md h-10 px-10 border-black"
        />
        <button
          className="absolute right-[-22px] rounded-tr-md rounded-br-md top-[1.95px] bg-orange-500 h-[36.2px] w-40 text-white font-semibold tracking-widest"
          
        >
          Get started
        </button>
      </motion.form>
      </div>

    </div>
  );
}

export default index
