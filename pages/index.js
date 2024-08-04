import { Inter } from "next/font/google";
import { easeIn, easeInOut, motion } from "framer-motion";
import Card from "@/layout/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Detail from "@/component/Detail";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const buttonClick = (e) => {
    const input = document.querySelector("input");

    e.preventDefault();
    console.log(input.value);
  };

  return (
    <main className="relative w-full max-h-full m-auto">
      <div
        className={`pt-32 m-auto w-[600px] justify-center align-center pl-14 ${inter.className}`}
      >
        <div>
          <motion.h1
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: easeInOut,
            }}
            className={`uppercase font-bold text-5xl text-center ${inter.className} w-[600px]`}
          >
            <span className="inline-block">The spend</span>{" "}
            <span className="inline-block">smart platform</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: easeInOut,
            }}
            className={`text-xl m-auto font-normal pl-6 w-[590px] mt-10 leading-7 lg:m-20 ${inter.className}`}
          >
            An expense management platform designed for businesses to manage
            <span className="font-semibold"> expenses</span>,{" "}
            <span className="font-semibold">cash flow</span>, and
            <span className="font-semibold"> financial operations</span>{" "}
            efficiently...
          </motion.p>

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
              onClick={buttonClick}
            >
              Get started
            </button>
          </motion.form>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.8,
              duration: 2.9,
            }}
            className="font-thin w-[490px] m-auto mt-14 "
          >
            Custina is a financial technology company, not a bank. Checking and
            banking services provided by Column N.A., Member FDIC.
          </motion.p>
        </div>

        <div className="w-[650px]  pr-10">
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
              delay: 2,
              duration: 1.1,
            }}
            className=" mt-24 text-3xl font-extrabold pr-2 text-center "
          >
            Empower everyone to spend with confidence.
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
              duration: 1.2,
            }}
            className="text-start font-medium mt-6 w-[550px] m-auto font-serif"
          >
            As a finance leader, you love control. But most company spend
            happens outside your team. So how do you empower everyone —
            everywhere — to spend wisely? Top companies are doing just that with
            Custina.
          </motion.p>

          <div className="paternship-name"></div>
        </div>

        <div className="flex flex-col m-auto justify-center align-middle pl-6  mt-16 lg:flex-row">
          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl">Expense Tracking</h1>
            <p className="m-auto pl-2 mt-1">
              Track record and expenses through
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl ">Corporate Card</h1>
            <p className="m-auto pl-2 mt-1">
              Custina offers a Corporate card for businesses to manage employee
              expenses{" "}
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl">
              Expense Categorization
            </h1>
            <p className="m-auto pl-2 mt-1">
              Custina automatically categorizes expenses into predefined
              categories
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl">Approval Workflows</h1>
            <p className="m-auto pl-2 mt-1">
              Custina enables customizable approval workflows, ensuring that
              expenses are reviewed and approved by designated managers or
              administrators.
            </p>
            <div className="feature"></div>
          </Card>

          

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl">Receipt Management</h1>
            <p className="m-auto pl-2 mt-1">
              Users can upload receipts and attach them to corresponding
              expenses, making it easy to track and verify purchases.
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl">
              Budgeting and Forecasting
            </h1>
            <p className="m-auto pl-2 mt-1">
              Custina provides budgeting and forecasting tools, enabling
              businesses to set budgets, track expenses, and predict future
              expenditures.
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl">
              Cash Flow Management
            </h1>
            <p className="m-auto pl-2 mt-1">
              Custina offers cash flow management features,
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl">Integration</h1>
            <p className="m-auto pl-2 mt-1">
              Custina integrates with various accounting software, such as
              QuickBooks, Xero, and SAP, ensuring seamless expense management
              and accounting processes.
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-xl">
              Security and Compliance
            </h1>
            <p className="m-auto pl-2 mt-1">
              Custina adheres to industry-standard security measures, ensuring
              the protection of sensitive financial data and compliance with
              regulatory requirements.
            </p>
            <div className="feature"></div>
          </Card>
        </div>

        <Detail />

        <div className="mt-40 ml-[-60px] bg-black w-[709px] h-[300px] text-white">
          <motion.h2
            initial={{
              y: 30,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              ease: easeIn,
            }}
            className="text-4xl text-center  pt-20 mb-6 text-gray-200 font-extrabold"
          >
            See what Custina can do for you
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 2.2,
              delay: 1.2,
              ease: easeIn,
            }}
            className="ml-5"
          >
            Learn how our spend platform can increase the strategic impact of
            your finance team and future-proof your company.
          </motion.p>
          <button
            onClick={buttonClick}
            className="bg-orange-500 pr-6 pl-6 pt-2 pb-2 rounded-lg mt-8 ml-8"
          >
            Get started
          </button>
        </div>
      </div>
    </main>
  );
}
