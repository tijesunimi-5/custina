import Button from "@/layout/Button";
import Card from "@/component/Card";
import React from "react";
import { FaCheck } from "react-icons/fa";

const index = () => {
  return (
    <div>
      <div className="home relative flex flex-col pt-32 m-auto w-[850px]  justify-center pr-12 align-center ml-16 pl-2 z-30">
        <div>
          <h1 className="uppercase font-bold mt-36 justify-center ml-7 text-7xl text-center w-[800px]">
            Everything you need to spend with confidence.
          </h1>
        </div>

        <div className="mt-56">
          <div className="ml-2 w-[900px]">
            <Card>
              <div className="w-[990px] my-20 ml-10">
                <h1>Essentials</h1>
                <p className="text-5xl pt-10">
                  For startups and growing companies
                </p>
                <h1 className="my-10 text-6xl">$0 user/month</h1>

                <div>
                  <Button>Open an account</Button>
                </div>

                <div>
                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Global corporate cards
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Business account and bill pay
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> $6M FDIC coverage and 4.48%
                    yield
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> In-app travel booking and
                    support
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Integrated expense management
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Custina AI expense assistant
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Real-time spend reporting
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Accounting integrations
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> 24/7 support
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <div className="ml-2 mt-20 w-[900px]">
            <Card>
              <div className="w-[890px] my-20 ml-10">
                <h1>Premium</h1>
                <p className="text-5xl pt-10">
                  For mid-sized companies looking to scale
                </p>
                <h1 className="my-10 text-6xl">$12 user/month</h1>

                <div>
                  <Button>Contact cales</Button>
                </div>

                <div>
                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Custom expense policies and
                    approvals
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Managed travel
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Live Budgets with real-time
                    tracking
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Custom procurement workflows
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Custom, automated HRIS and
                    advanced accounting integrations
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Dedicated support for admins
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <div className="ml-2 mt-20 w-[900px]">
            <Card>
              <div className="w-[890px] my-20 ml-10">
                <h1>Enterprise</h1>
                <p className="text-5xl pt-10">
                  For global enterprises with custom needs
                </p>
                <h1 className="my-10 text-6xl">Custom pricing</h1>

                <div>
                  <Button>Contact sales</Button>
                </div>

                <div>
                  <h2 className="mt-5">Everything in Premium plus: </h2>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Local cards and billing in 50+
                    countries
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Locally funded payments in 40+
                    countries
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Unlimited policy customization
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Advanced roles and permissions
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Custom compliance and audit
                    reports
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Top-tier onboarding and support
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <div className="ml-2 mt-20 w-[900px]">
            <Card>
              <div className="w-[800px] my-20 ml-10">
                <h1>Smart Card</h1>
                <p className="text-5xl pt-10">
                  For companies that want to simplify procurement
                </p>
                <h1 className="my-10 text-6xl">Custom pricing</h1>

                <div>
                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Global cards accepted worldwide
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Local-currency cards in 50+ countries
                  </span>

                  <span className="text-5xl flex mt-10">
                    {" "}
                    <FaCheck className="mx-5" /> Merchant card controls and custom approvals
                  </span>

                  <div className="mt-20 ml-56">
                    <Button>Open an account</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
