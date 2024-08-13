import React from 'react'
import { easeInOut, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Card from '@/layout/Card';


const index = () => {  
  return (
    <div
      className={`home  m-auto w-[500px] justify-center pr-12 align-center pl-2 `}
    >
      <div className="bg-black pt-28 w-[729px] text-white h-[100vh] ml-[-10px] pl-10">
        <div>Image needed</div>
        <h1 className="text-7xl font-extrabold space-x-2 letter-spacing-sm">
          The financial stack you can bank on.
        </h1>
        <p className="text-4xl pt-10 font-semibold">
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
          className="mt-10 ml-12 pl-0 mr-16 w-[550px] relative"
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

        <p className="mt-20 text-2xl font-light">
          Custina is a financial technology company, not a bank, checking and
          banking services provided by Column N.A., Member FDIC.
        </p>
      </div>

      <div className="flex flex-col justify-between w-[720px] h-[400px] bg-[#f0f8ff] mt-48 m-auto text-center">
        <div className="text-center">image needed</div>
        <h1 className="text-3xl font-semibold">Testimony Section</h1>
        <p className="text-4xl font-semibold">
          Custina has helped me manage my financing in a very big way{" "}
        </p>
      </div>

      <div className="flex flex-col justify-start w-[720px] mt-32">
        <div>image needed</div>
        <div className="w-[690px] pl-10">
          <h1 className="text-6xl font-extrabold m-auto text-start">
            Make your money work harder with banking and treasury.
          </h1>
          <p className="pt-10 text-4xl letter-spacing-[5px] leading-10 font-medium text-start">
            Trusted by 1 in 3 venture-backed US startups, the Custina account
            gives you access to checking, treasury, and FDIC insurance all in
            one account.
          </p>
          <ul className="mt-9 text-3xl font-medium list-disc ml-6">
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

          <p className="text-red-400 text-3xl">
            Learn more about Custina business accounts{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>

        <div className="m-auto mt-20 w-[650px]">
          <h1 className="text-5xl font-extrabold text-center">
            The operating account for founders, by founders.
          </h1>

          <div className="m-auto ml-14">
            <Card>
              <h1 className="text-3xl font-bold pl-10 pt-6">
                Increase your spending power
              </h1>
              <p className="text-2xl font-medium pt-8 pl-10">
                Extend your runway with instant Custina card payments and up to
                20x higher limits with a Custina business account.
              </p>
            </Card>

            <Card>
              <h1 className="text-3xl font-bold pl-10 pt-6">
                Earn yield, stay liquid
              </h1>
              <p className="text-2xl font-medium pt-8 pl-10">
                Earn high yield on your operational cash with a fully integrated
                treasury account. No minimums or hidden fees, automated
                transfers, and 100% liquidity.
              </p>
            </Card>

            <Card>
              <h1 className="text-3xl font-bold pl-10 pt-6">
                Secure your captial
              </h1>
              <p className="text-2xl font-medium pt-8 pl-10">
                Safeguard your funds with customizable approval flows, 24/7
                support, and up to $6M in FDIC insurance (20x the standard
                protection) through our program banks*.
              </p>
            </Card>

            <Card>
              <h1 className="text-3xl font-bold pl-10 pt-6">
                Automated bill pay
              </h1>
              <p className="text-2xl font-medium pt-8 pl-10">
                Keep more cash on hand with a business account that allows you
                to settle bills up to 5 days sooner with integrated bill pay.
              </p>
            </Card>
          </div>
        </div>

        <div className="flex flex-col justify-between w-[720px] h-[400px] bg-[#f0f8ff] mt-48 m-auto text-center">
          <div className="text-center">image needed</div>
          <h1 className="text-3xl font-semibold">Testimony Section</h1>
          <p className="text-4xl font-semibold">
            Custina has helped me manage my financing in a very big way{" "}
          </p>
        </div>

        <div className='w-[650px] m-auto mt-28'>
          <div>image needed</div>
          <h1 className='text-6xl font-extrabold text-start'>Give corporate cards to your crew.</h1>
          <p className='text-3xl font-bold mt-10'>
            Unlock credit based on your business, not your credit score. And easily issue cards and reimbursements.
          </p>
          <ul className='mt-6 list-disc text-3xl ml-7'>
            <li className='pb-6'>No personal guarantee required</li>
            <li className='pb-6'>Unlimited virtual and physical cards</li>
            <li className='pb-6'>Rewards that grow your business</li>
            <li className='pb-6'>24/7 fraud monitoring and protection</li>
            <li className='pb-6'>Apple Pay and mobile wallet</li>
          </ul>
          <p className='text-red-400 text-2xl'>Discover everything that Custina cards offer as you scale <FontAwesomeIcon icon={faArrowRight} /></p>
        </div>
      </div>
    </div>
  );
}

export default index
