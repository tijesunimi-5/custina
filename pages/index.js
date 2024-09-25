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
    <main className=" relative w-[1000px] m-auto">
      
      <div
        className={`home relative flex flex-col pt-32 m-auto w-[850px]  justify-center pr-12 align-center ml-16 pl-2 ${inter.className} z-30`}
      >
        <div className="z-30">
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
            className={`uppercase font-bold mt-36 justify-center ml-16 text-7xl text-center ${inter.className} w-[700px]`}
          >
            <span className="inline-block ">The spend</span>{" "}
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
            className={`text-4xl m-auto font-medium pl-10 w-[800px] mt-16 leading-10 lg:m-20 ${inter.className}`}
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
            className="mt-16 m-auto pl-6 w-[700px] relative"
          >
            <span className="absolute justify-center align-middle mt-2 h-9 ml-2 text-4xl border-r-2 pr-2 border-black">
              <FontAwesomeIcon icon={faEnvelope} />
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

        <div className="w-[900px]  pr-10">
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
            className=" mt-24 text-6xl font-extrabold pr-2 text-center "
          >
            Empower everyone to spend with confidence.
          </motion.h1>

          {/* <motion.p
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
            className="text-start text-4xl font-medium mt-10 w-[800px] pl-6 m-auto font-serif"
          >
            As a finance leader, you love control. But most company spend
            happens outside your team. So how do you empower everyone —
            everywhere — to spend wisely? Top companies are doing just that with
            Custina.
          </motion.p> */}

          <div className="paternship-name"></div>
        </div>

        <div className="flex flex-col m-auto justify-center align-middle pl-9  mt-16 ml-10 lg:flex-row">
          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl">Expense Tracking</h1>
            <p className="m-auto text-3xl font-medium pl-5 mt-3">
              Track record and expenses through
            </p>
            <div className="feature w-full">
              <img src="/track.png" className="w-full" />
            </div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl ">Corporate Card</h1>
            <p className="m-auto text-3xl pt-8 font-medium pl-5 mt-3">
              Custina offers a Corporate card for businesses to manage employee
              expenses{" "}
            </p>
            <div className="feature w-full ">
              <img src="/transcard.png" className="w-full mb-10 mt-[-45px]" />
            </div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl">
              Expense Categorization
            </h1>
            <p className="m-auto text-3xl font-medium pl-5 mt-3">
              Custina automatically categorizes expenses into predefined
              categories
            </p>
            <div className="feature w-[850px] h-[300px] mt-20 pr-[50px]">
              <img src="/expenses.png" className="w-full mb-10 mt-[-45px]" />
            </div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl">Approval Workflows</h1>
            <p className="m-auto text-3xl font-medium pl-5 mt-3">
              Custina enables customizable approval workflows, ensuring that
              expenses are reviewed and approved by designated managers or
              administrators.
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl">Receipt Management</h1>
            <p className="m-auto text-3xl font-medium pl-5 mt-3">
              Users can upload receipts and attach them to corresponding
              expenses, making it easy to track and verify purchases.
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl">
              Budgeting and Forecasting
            </h1>
            <p className="m-auto text-3xl font-medium pl-5 mt-3">
              Custina provides budgeting and forecasting tools, enabling
              businesses to set budgets, track expenses, and predict future
              expenditures.
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl">
              Cash Flow Management
            </h1>
            <p className="m-auto text-3xl font-medium pl-5 mt-3">
              Custina offers cash flow management features,
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl">Integration</h1>
            <p className="m-auto text-3xl font-medium pl-5 mt-3">
              Custina integrates with various accounting software, such as
              QuickBooks, Xero, and SAP, ensuring seamless expense management
              and accounting processes.
            </p>
            <div className="feature"></div>
          </Card>

          <Card>
            <h1 className="font-bold pt-6 pl-4 text-5xl">
              Security and Compliance
            </h1>
            <p className="m-auto text-3xl font-medium pl-5 mt-3">
              Custina adheres to industry-standard security measures, ensuring
              the protection of sensitive financial data and compliance with
              regulatory requirements.
            </p>
            <div className="feature"></div>
          </Card>
        </div>

        

        <div className=" mt-40 ml-[-72px] w-[998px] bg-black  text-white">
          <div className="w-[939px] h-[450px] ">
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
              className="text-6xl text-center  pt-20 mb-6 text-gray-200 font-extrabold"
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
              className="ml-5 text-3xl"
            >
              Learn how our spend platform can increase the strategic impact of
              your finance team and future-proof your company.
            </motion.p>
            <button
              onClick={buttonClick}
              className="bg-orange-500 pr-6 pl-6 pt-2 pb-2 rounded-lg mt-8 ml-8 text-4xl"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
